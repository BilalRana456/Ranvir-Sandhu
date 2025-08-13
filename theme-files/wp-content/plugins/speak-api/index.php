<?php

/*
  Plugin Name: Speakeasy Api
  Plugin URI: http://www.speakeasymarketinginc.com
  Description: This plugin is used for SpeakEasy Marketing clients and solely property of company. Don't use/distribute without permission
  Version: 2.0
  Author: SpeakEasy Marketing
 */

if (!class_exists("SpeakApi")) {

    class SpeakApi {

        var $_version = '2.0';
        var $_name = 'SpeakApi';
        var $_pluginPath = '';
        var $_FormName = 'cForm';
        var $_pluginRelativePath = '';
        var $_pluginURL = '';
        var $_supportURL = 'mailto:support@speakeasymarketinginc.com';

        function __construct() {
            if (!defined('SPEAKAPI_PLUGIN_DIR')) {
                define('SPEAKAPI_PLUGIN_DIR', plugin_dir_path(__FILE__));
            }

            $this->_pluginURL = plugins_url('/speak-api/');
            if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') {
                $this->_pluginURL = str_replace('http://', 'https://', $this->_pluginURL);
            }

            if (is_admin()) {
                add_action('admin_menu', array($this, 'SpeakApi_menu')); // Add menu in admin.
                register_activation_hook(__FILE__, array('SpeakApi', 'speak_api_create_tables'));
                add_action('admin_init', array($this, 'SpeakApi_init'));

                add_action('wp_ajax_speakApiUpdate', array($this, 'speak_Apikey_update'));
                add_action('wp_ajax_speakApiCfromUpdate', array($this, 'speak_Apikey_CfromUpdate'));
                add_action('wp_ajax_speakApiNewsletterUpdate', array($this, 'speak_Apikey_NewsletterUpdate'));
                add_action('wp_ajax_speakApiBookUpdate', array($this, 'speak_Apikey_BookUpdate'));
                /* ex-client hook */
                add_action('wp_ajax_speakApiCBformUpdate', array($this, 'speak_Apikey_CBformUpdate'));
            }
            if (!is_admin()) {
                add_action('wp_enqueue_scripts', array($this, 'speakapi_frontend'), 20, 1);
            }
            add_action('admin_enqueue_scripts', array($this, 'admin_script'));
            add_action('wp_ajax_speakApiSendmAilCfrom', array($this, 'speak_Apikey_CformMail'));
            add_action('wp_ajax_speakApiSendmAilCfromAlt', array($this, 'speak_Apikey_CformMailAlt'));
            add_action('wp_ajax_speakApiSendmAilBook', array($this, 'speak_Apikey_BookMail'));
            add_action('wp_ajax_newsletterSubsciption', array($this, 'speak_Api_newsletterSubsciption'));
            add_action('wp_ajax_nopriv_speakApiSendmAilCfrom', array($this, 'speak_Apikey_CformMail'));
            add_action('wp_ajax_nopriv_speakApiSendmAilBook', array($this, 'speak_Apikey_BookMail'));
            add_action('wp_ajax_nopriv_speakApiSendmAilCfromAlt', array($this, 'speak_Apikey_CformMailAlt'));
            add_action('wp_ajax_nopriv_newsletterSubsciption', array($this, 'speak_Api_newsletterSubsciption'));

            // add shortcodes
            add_shortcode('cForm', array($this, 'get_cForm'));
            add_shortcode('BdForm', array($this, 'get_BdForm'));
            add_shortcode('BdForm2', array($this, 'get_BdForm2'));
            add_shortcode('BdForm3', array($this, 'get_BdForm3'));

            add_shortcode('nfield', array($this, 'newsletter_field'));
            add_shortcode('nButton', array($this, 'newsletter_button'));
            add_shortcode('newsletterForm', array($this, 'newsletter_form'));
        }

        /* .....................Add Menu in Admin................................................. */

        public function SpeakApi_menu() {
            add_menu_page('SpeakApi', 'Speak API', 'administrator', 'speak-setting', array($this, 'speak_setting_page'), plugins_url('/speak-api/images/icon.png', 1));
            //Sub pages
            add_submenu_page('speak-setting', 'cForm Settings', 'cForm Settings', 'administrator', 'cform-settings', array($this, 'cForm'));
            add_submenu_page('speak-setting', 'Book Settings', 'Book Settings', 'administrator', 'book-settings', array($this, 'BookD'));
            add_submenu_page('speak-setting', 'Newsletter', 'Newsletter', 'administrator', 'newsletter-settings', array($this, 'Newsletter'));
            if (!$this->checkApiStatus()) {
                add_submenu_page('speak-setting', 'Email Alters', 'Email Alters', 'administrator', 'email-alerts', array($this, 'EmailAlerts'));
            }
        }

        public function speak_Apikey_CformMailAlt() {
            include_once 'inc/send-mail-cform-alt.php';
        }

        /* ....................Speak Api Page............................... */

        public function speak_setting_page() {
            include_once 'inc/setting.php';
        }

        /* ..........................Create Table In Databse............................. */

        public function speak_api_create_tables() {
            require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
            global $wpdb, $table_prefix;
            $charset_collate = $wpdb->get_charset_collate();
            $table_name = $wpdb->prefix . "speak_api";
            $table_name2 = $wpdb->prefix . "speak_api_leads";

            $sql_create_table = "CREATE TABLE IF NOT EXISTS {$table_name} (
          speak_api_id bigint(20) unsigned NOT NULL auto_increment,
          speak_api_key varchar(255) NOT NULL default '0',
          speak_api_status int(20) unsigned NOT NULL default '0',
          speak_api_options varchar(255),          
          cform_options longtext,          
          speak_api_date datetime NOT NULL default '0000-00-00 00:00:00',
          PRIMARY KEY  (speak_api_id)
     )  $charset_collate";

            dbDelta($sql_create_table);

            /* ............................................... */
            $sql_create_table2 = "CREATE TABLE IF NOT EXISTS {$table_name2} (
          speak_api_leads bigint(20) unsigned NOT NULL auto_increment,
          speak_api_leads_name varchar(255) NOT NULL default '0',
          speak_api_leads_phone varchar(255) NOT NULL default '0',
          speak_api_leads_email varchar(255) NOT NULL default '0',          
          speak_api_leads_msg longtext,          
          speak_api_leads_type varchar(25) NOT NULL default '0',          
          speak_api_lead_time datetime NOT NULL default '0000-00-00 00:00:00',
          PRIMARY KEY  (speak_api_leads)
     )  $charset_collate";
            dbDelta($sql_create_table2);
        }

        /* ........................Init............................... */

        function SpeakApi_init() {
            $newsletter_options = get_option("SpeakApiNewsletter");
            if (!$newsletter_options) {
                $param = array(
                    'n_tags' => "",
                    'n_email_address' => "seolawyers2012@gmail.com",
                    'n_email_sub' => "Newsletter Subscription [site_url]",
                    'n_email_temp' => "<h2>A New Subscription Just Came In From [site_url]</h2>
<table><tbody>
<tr><td>Name: [name] </td></tr>
<tr><td>Email: [email]</td></tr>
</tbody>
</table>",
                    'n_email_user_temp' => "<h2>Thank you for subscribing on [site_url]</h2>",
                    'n_form_temp' => stripslashes("<div class='row mlr-5'>
                            <div class='col-md-5 plr-5'>[nfield name='name' class='news_box  py-1 px-1' placeholder='Your Name' type='text' id='name']</div> 
                            <div class='col-md-5 plr-5'>[nfield name='email' class='news_box py-1 px-1' placeholder='Email Address' type='text' id='email']</div> 
                            <div class='col-md-2 plr-5'>[nButton class='d-block btnall hvr-sweep-to-right' type='text' id='newsletter-submit']Submit[/nButton]</div>
                        </div>"),
                );
                add_option("SpeakApiNewsletter", $param);
            }
            /* */
            $alerts_options = get_option("SpeakApiCBAlerts");
            if (!$alerts_options || $alerts_options['c_email_address'] == '') {
                $param_arr = array(
                    'c_email_address' => "seolawyers2012@gmail.com",
                    'c_email_sub' => "Lead From [site_url]",
                    'c_email_temp' => "<h2>A Lead Just Came In From [site_url]</h2>
<table>
<tbody>
<tr>
<td>Name: [name] </td>
</tr>
<tr>
<td>Phone: [phone]</td>
</tr>
<tr>
<td>Email: [email]</td>
</tr>
<tr>
<td>I need help with: [pa]</td>
</tr>
<tr>
<td>Message: [msg]</td>
</tr>
</tbody>
</table>
<br /><br />
<span style=color:#fff>[ip]</span>",
                    'b_email_address' => "seolawyers2012@gmail.com",
                    'b_email_sub' => "This person downloaded the [bookemailsub] guide from your website",
                    'b_email_temp' => "<h2>Attorney  [lawyername]  </h2>

This person downloaded the [bookemailsub] guide from your website <br />and provided the following info: <br/>

<br/>Name: [name] <br/>
Email: [email]<br/>
Phone: [phone]<br/><br/>

They are now a lead and should be contacted <br />immediately to see if they need help.<br/>",
                    'ex_email_from' => "support@" . substr(get_bloginfo('url'), 11),
                );
                add_option("SpeakApiCBAlerts", $param_arr);
            }
        }

        public function admin_script($hook) {
            // Load only on ?page=mypluginname
            $pages = array(
                "toplevel_page_speak-setting",
                "speak-api_page_newsletter-settings",
                "speak-api_page_book-settings",
                "speak-api_page_cform-settings",
                "speak-api_page_email-alerts",
            );
            if (in_array($hook, $pages)) {
                wp_enqueue_script('media-upload');
                wp_enqueue_style('thickbox'); // call to media files in wp
                wp_enqueue_script('thickbox');
                wp_enqueue_script('jquery-ui-core');
                wp_enqueue_style('speakapi-css', $this->_pluginURL . '/css/css.css');
                wp_enqueue_script('speak-api-js', $this->_pluginURL . '/js/speak-api-js.js');
                wp_localize_script("speakapiajax", "speakajax", $this->_pluginURL);
                wp_enqueue_script('speakapiajax');
                wp_enqueue_media();
            }
        }

        /* .....................Include Js and Css on Front End............................ */

        public function speakapi_frontend() {
            wp_enqueue_script('speakapi-frontend', $this->_pluginURL . '/js/speak-api-js-frontend.js', array(), FALSE, TRUE);
            //wp_enqueue_style('speakapi-css-frontend', $this->_pluginURL . '/css/cform_frontend.css');
        }

        /* ..................................Api Key update Code...................... */

        public function speak_Apikey_update() {
            include_once 'inc/update.php';
        }

        /* ..................................Cform update Code...................... */

        public function speak_Apikey_CfromUpdate() {
            include_once 'inc/cform_update.php';
        }

        /* ..................................Newsletter Code...................... */

        public function speak_Apikey_NewsletterUpdate() {
            include_once SPEAKAPI_PLUGIN_DIR . 'newsletter/save.php';
        }

        /* ..................................Book update Code...................... */

        public function speak_Apikey_BookUpdate() {
            include_once SPEAKAPI_PLUGIN_DIR . 'book-download/save.php';
        }

        /* ..................................Cform Mail Code...................... */

        public function speak_Apikey_CformMail() {
            include_once 'inc/send-mail-cform.php';
        }

        /* ..................................Book Mail Code...................... */

        public function speak_Apikey_BookMail() {
            include_once 'inc/send-mail-book.php';
        }

        public function speak_Api_newsletterSubsciption() {
            include_once 'inc/send-mail-newsletter.php';
        }

        /* ........................cForm Functions................................. */

        public function cForm() {
            include_once 'cform/index.php';
        }

        public function EmailAlerts() {
            include_once 'cform/email_alerts.php';
        }

        public function speak_Apikey_CBformUpdate() {
            include_once 'inc/email_alerts.php';
        }

        /* ........................BookD Funcations................................. */

        public function BookD() {
            include_once 'book-download/index.php';
        }

        public function Newsletter() {
            include_once 'newsletter/index.php';
        }

        /* ...........................Get cForm Form.............................. */

        public function get_cForm() {
            include_once ABSPATH . '/wp-content/plugins/speak-api/inc/config.php';
            $Data_Cform = GetData_CForm();
            $Data_Cform_Array = explode(',', $Data_Cform);
            $Name_T = $Data_Cform_Array[0];
            $Email_T = $Data_Cform_Array[1];
            $Phone_T = $Data_Cform_Array[2];
            $Msg_T = $Data_Cform_Array[3];
            $Btn_T = $Data_Cform_Array[4];
            $Pa_list = $Data_Cform_Array[5];

            if (is_front_page()) {
                return'
     <div class="home_form">
               <form id="cform" class="label_home">
        <div class="row mlr-5">       
            <div class="col-md-12 plr-5"><div id="cform-form-msg"></div></div>
            <div class="col-md-6 plr-5">
                <label class="text-white d-none" for="' . $Name_T . '">' . $Name_T . '</label>
                <input type="text" id="' . $Name_T . '" name="name" placeholder="Please type your name here" class="rounded mb-2 px-2 input-box">
            </div>
            <div class="col-md-6 plr-5">
                <label class="text-white d-none" for="' . $Email_T . '">' . $Email_T . '</label>               
                <input type="text" id="' . $Email_T . '" name="email" placeholder="Please type a valid email address" class="rounded mb-2 px-2 input-box">      
            </div>
            <div class="col-md-6 plr-5">
                <label class="text-white d-none" for="' . $Phone_T . '">' . $Phone_T . '</label>                   
                <input type="text" id="' . $Phone_T . '" name="phone" placeholder="Please type your 10-digit phone number"  class="rounded mb-2 px-2 input-box">
            </div>
            <div class="col-md-6 plr-5">
                 <label class="text-white d-none" for="I Need Help With">I Need Help With</label>   
                 <select id="' . $Pa_list . '" name="i-need-help-with" placeholder="Select one from below list" class="rounded mb-2 px-2 input-box">' . $Pa_list . '</select> 
            </div>
            <div class="col-md-12 plr-5">
                <label class="text-white d-none" for="' . $Msg_T . '">' . $Msg_T . '</label>   
               <textarea id="' . $Msg_T . '" class="rounded p-2 input-box" placeholder="Please type your message here" name="Message"></textarea>
                <div class="clearfix"></div>
                 <div class="g_recapcha_div m-auto d-table pt-1">
    <div class="g-recaptcha" name="g-recaptcha-response" data-sitekey="6Lfz2JcmAAAAAGtMgo8VHQDvGBo_xlSq_bagBfs5"></div>
</div>
                <div class="clearfix"></div>
                <div class="mt-1">
                    <button id="cformsubmit" type="submit" class="btn btn-primary my-2 btnall BtnHover2 hvr-sweep-to-right">Get Help Now</button>
                    <div class="clearfix"></div>
                <div id="ajax-loader-cform"><img src="/wp-content/plugins/speak-api/images/ajax-loader.gif"></div>
                </div>
                
            </div>
        </div>
    </form>
  </div>';
            } else {
                return'
       <div class="home_form">
               <form id="cform" class="label_home">
        <div class="row mlr-5">       
            <div class="col-md-12 plr-5"><div id="cform-form-msg"></div></div>
            <div class="col-md-6 plr-5">
                <label class="text-dark d-none" for="' . $Name_T . '">' . $Name_T . '</label>
                <input type="text" id="' . $Name_T . '" name="name" placeholder="Please type your name here" class="rounded mb-2 px-2 input-box">
            </div>
            <div class="col-md-6 plr-5">
                <label class="text-dark d-none" for="' . $Email_T . '">' . $Email_T . '</label>               
                <input type="text" id="' . $Email_T . '" name="email" placeholder="Please type a valid email address" class="rounded mb-2 px-2 input-box">      
            </div>
            <div class="col-md-6 plr-5">
                <label class="text-dark d-none" for="' . $Phone_T . '">' . $Phone_T . '</label>                   
                <input type="text" id="' . $Phone_T . '" name="phone" placeholder="Please type your 10-digit phone number"  class="rounded mb-2 px-2 input-box">
            </div>
            <div class="col-md-6 plr-5">
                 <label class="text-dark d-none" for="I Need Help With">I Need Help With</label>   
                 <select id="' . $Pa_list . '" name="i-need-help-with" placeholder="Select one from below list" class="rounded mb-2 px-2 input-box">' . $Pa_list . '</select> 
            </div>
            <div class="col-md-12 plr-5">
                <label class="text-dark d-none" for="' . $Msg_T . '">' . $Msg_T . '</label>   
               <textarea id="' . $Msg_T . '" class="rounded p-2 input-box" placeholder="Please type your message here" name="Message"></textarea>
                <div class="clearfix"></div>
                  <div class="g_recapcha_div m-auto d-table">
    <div class="g-recaptcha" name="g-recaptcha-response" data-sitekey="6Lfz2JcmAAAAAGtMgo8VHQDvGBo_xlSq_bagBfs5"></div>
</div>
                <div class="clearfix"></div>
                <div class="text-center m-auto content-pages-btn-wrap d-table">
                    <button id="cformsubmit" type="submit" class="btn btn-primary my-3 btnall BtnHover1 hvr-sweep-to-right">Get Help Now</button>
                </div>
                <div class="clearfix"></div>
                <div id="ajax-loader-cform"><img src="/wp-content/plugins/speak-api/images/ajax-loader.gif"></div>
            </div>
        </div>
    </form>
  </div>';
            }
        }

        /* ...........................Get BdForm Form Popup.............................. */

        public function get_BdForm2($BdData) {
            include_once ABSPATH . '/wp-content/plugins/speak-api/inc/config.php';
            $Data_BD = GetBdData();
            $Bd_Type = $BdData['type'];
            $Bd_Mode = $BdData['mod'];
            include 'book-download/get_book_form.php';
        }

        /* ...........................Get BdForm Form.............................. */

        public function get_BdForm($BdData) {
            include_once ABSPATH . '/wp-content/plugins/speak-api/inc/config.php';
            $Data_BD = GetBdData();
            $Bd_Type = $BdData['type'];
            $Bd_Mode = $BdData['mod'];
            /* ............................ */
            $Book_url = $Data_BD['bookimg1'];
            $Book_Name = stripslashes($Data_BD['booktitle1']);
            $Book_Text = stripslashes($Data_BD['booksubtitledesk1']);
            $Book_Btn_Name = $Data_BD['bookbtnname'];
            $Book_AltTxt = stripslashes($Data_BD['bookalttxt1']);

            if ($Bd_Type == "1" && $Bd_Mode == "desk") {
                return '
                    <div class="book-box">
                    <div class="row">
                     <div class="col-md-12">
                       <img src="' . $Book_url . '" class="d d-block m-auto pb-2" alt="' . $Book_AltTxt . '">
                      </div>
                     <div class="col-md-12">
                     <h3 class="m-0 d-none HomeBookSection_COL text-center">' . $Book_Name . '</h3>
                       <p class="m-0 d-none p-0 text-center">' . $Book_Text . '</p>
                       <div class="text-center m-auto">
                       <a class="btnall book_div hvr-sweep-to-bottom py-3" href="#bookModal1" data-toggle="modal" data-bt="1" >' . $Book_Btn_Name . '</a>     
                     </div>
                     </div>
                    
                       </div>
                    </div>';
            }
            if ($Bd_Type == "2" && $Bd_Mode == "desk") {
                return '
                    <div class="book-box">
                    <div class="row">
                     <div class="col-md-7">
                       <h3 class="m-0 HomeBookSection_COL text-center">' . $Data_BD['booktitle2'] . '</h3>
                       <p class="m-0 pt-2 pb-3 text-center">' . $Data_BD['booksubtitledesk2'] . '</p>
                       <div class="text-center m-auto">
                       <a class="btnall book_div hvr-sweep-to-bottom py-3" href="#bookModal2" data-toggle="modal" data-bt="1" >' . $Book_Btn_Name . '</a>
                         </div>
                         </div>
                        <div class="col-md-5 d-none d-lg-block d-md-block">
                     <img src="' . $Data_BD['bookimg2'] . '" class="d-none d-md-block m-auto" alt="' . $Data_BD['bookalttxt2'] . '">
                    </div>
                       </div>
                    </div>';
            }
            if ($Bd_Type == "3" && $Bd_Mode == "desk") {
                return '
                    <div class="book-box">
                    <div class="row">
                    <div class="col-md-7">
                    <h3 class="m-0 HomeBookSection_COL text-center">' . $Data_BD['booktitle3'] . '</h3>
                       <p class="m-0 pt-2 pb-3 text-center">' . $Data_BD['booksubtitledesk3'] . '</p>
                        <div class="text-center m-auto">
                       <a class="btnall book_div hvr-sweep-to-bottom py-3" href="#bookModal3" data-toggle="modal" data-bt="1" >' . $Book_Btn_Name . '</a>
                         </div>                  
                      </div>
                     <div class="col-md-5 d-none d-lg-block d-md-block">
                       <img src="' . $Data_BD['bookimg3'] . '" class="d-none d-md-block m-auto" alt="' . $Data_BD['bookalttxt3'] . '">
                    </div>
                    </div>
                    </div>';
            }
        }

        public function newsletter_field($attr, $content = null) {
            extract(shortcode_atts(array(
                'type' => 'text',
                'name' => '',
                'class' => '',
                'placeholder' => '',
                'id' => '',
                'value' => '',
                            ), $attr));
            return "<input type='$type' name='$name' class='$class' placeholder='$placeholder' id='$id' value='$value' />";
        }

        public function newsletter_button($attr, $content = null) {
            extract(shortcode_atts(array(
                'class' => '',
                'id' => '',
                            ), $attr));
            return "<button class='$class' id='$id' >$content</button>";
        }

        public function newsletter_form($attr, $content = null) {
            $newsletter_options = get_option("SpeakApiNewsletter");
            $return = '';
            if ($newsletter_options['n_form_temp']) {
                $return .= "<form method='post' id='newsletter_form_5646523'>";
                $return .= "<div id='nform_vaidator'></div>";
                $return .= do_shortcode(stripslashes($newsletter_options['n_form_temp']));
                $return .= "</form>";
            } else {
                $return = 'Something wrong with your form template. Please goto the plugin setting and check Form Template.';
            }
            return $return;
        }

        // public function checkApiStatus() {
        //     global $wpdb;
        //     include_once 'inc/SpeakApiCheck.php';
        //     $table_name = $wpdb->prefix . "speak_api";
        //     $Get_Results = $wpdb->get_row("SELECT * FROM $table_name WHERE speak_api_id = 1");
        //     $Option_Array = explode(',', $Get_Results->speak_api_options);
        //     $data_Api['speak_api_key'] = $Get_Results->speak_api_key;
        //     $CheckApiKey = SpeakApiCheck::CheckAPIKey($data_Api);
        //     if ($CheckApiKey) {
        //         return TRUE;
        //     } else {
        //         return FALSE;
        //     }
        // }


        public function checkApiStatus(): bool {
            global $wpdb;
            include_once 'inc/SpeakApiCheck.php';
            
            $table_name = $wpdb->get_blog_prefix() . "speak_api";
            $Get_Results = $wpdb->get_row("SELECT * FROM $table_name WHERE speak_api_id = 1");
            
            if ($Get_Results) {
                $Option_Array = explode(',', $Get_Results->speak_api_options);
                $data_Api['speak_api_key'] = $Get_Results->speak_api_key;
                $CheckApiKey = SpeakApiCheck::CheckAPIKey($data_Api);
                
                return (bool)$CheckApiKey;
            }
            
            return false;
        }


    }

    $cFormObj = new SpeakApi(); // Create instance
}