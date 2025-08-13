<?php

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;



add_action("customize_register","custom_work");


function custom_work($wp_customize) {

  // Category Dropdown
  $categories = get_categories(array(
	'hide_empty' => 0,
	'orderby' => 'name',
));
$Cats = array();
foreach ($categories as $category) {
	$Cats[$category->term_id] = $category->name;
}

 /**
     * Multiple select customize control class.
     */
    class MYR_Customize_Control_Multiple_Select extends WP_Customize_Control {

        public $type = 'multiple-select';

        public function render_content() {
            if (empty($this->choices))
                return;
            ?>
            <label>
                <span class="customize-control-title"><?php echo esc_html($this->label); ?></span>
                <select <?php $this->link(); ?> multiple="multiple" style="height: 100%;">
                    <?php
                    foreach ($this->choices as $value => $label) {
                        $selected = (is_array($this->value()) && in_array($value, $this->value()) ) ? selected(1, 1, false) : '';
                        echo '<option value="' . esc_attr($value) . '"' . $selected . '>' . $label . '</option>';
                    }
                    ?>
                </select>
            </label>
            <?php
        }

    }
	/*---------------------Banner--------------------*/
	$wp_customize->add_section("BannerSection", array(
        "title" => __("Banner Section", "spk"),
        "priority" => 100,
    ));

	$wp_customize->add_setting('banner_image2', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'banner_image2', array(
        'label' => __('Upload Inner Pages Banner Image', 'spk'),
        'section' => 'BannerSection',
        'settings' => 'banner_image2',
    )));

	/*--------------------Footer--------------------*/
	$wp_customize->add_section("footergeneral", array(
        "title" => __("General Footer", "spk"),
        "priority" => 100,
    ));

	$wp_customize->add_setting('theme_footer_map_iframe', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control('theme_footer_map_iframe', array(
        'label' => 'Footer Map Iframe Link',
        'section' => 'footergeneral',
        'type' => 'text',
    ));
	
	$wp_customize->add_setting('theme_footer_map_image', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'theme_footer_map_image', array(
        'label' => __('Footer Map Image', 'spk'),
        'section' => 'footergeneral',
        'settings' => 'theme_footer_map_image',
    )));


	 /* ................Footer Other Settings..................... */
	 $wp_customize->add_section('theme_footer_other_settings_section', array(
        'capability' => 'edit_theme_options',
        'title' => __('Footer Other Setting', 'spk'),
        'description' => __('Footer Other Settings', 'spk'),
        'panel' => 'theme_settings_footer',
    ));
    $wp_customize->add_setting('theme_footer_other_get_direction_txt', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control('theme_footer_other_get_direction_txt', array(
        'label' => 'Insert Get Direction Button Text',
        'section' => 'theme_footer_other_settings_section',
        'type' => 'text',
    ));
    $wp_customize->add_setting('theme_footer_other_get_direction_link', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control('theme_footer_other_get_direction_link', array(
        'label' => 'Insert Get Direction Button Link',
        'section' => 'theme_footer_other_settings_section',
        'type' => 'text',
    ));
    $wp_customize->add_setting('theme_footer_other_get_help_now_txt', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control('theme_footer_other_get_help_now_txt', array(
        'label' => 'Insert Get Help Now Button Text',
        'section' => 'theme_footer_other_settings_section',
        'type' => 'text',
    ));
    $wp_customize->add_setting('theme_footer_other_get_help_now_link', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control('theme_footer_other_get_help_now_link', array(
        'label' => 'Insert Get Help Now Button Link',
        'section' => 'theme_footer_other_settings_section',
        'type' => 'text',
    ));
    $wp_customize->add_setting('theme_footer_other_menu_top_txt', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control('theme_footer_other_menu_top_txt', array(
        'label' => 'Disclaimer Text',
        'section' => 'theme_footer_other_settings_section',
        'type' => 'textarea',
    ));
    $wp_customize->add_setting('theme_footer_img', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'theme_footer_img', array(
        'label' => __('Footer Logo', 'spk'),
        'section' => 'theme_footer_other_settings_section',
        'settings' => 'theme_footer_img',
    )));
    $wp_customize->add_setting('theme_footer_loc_hd', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control('theme_footer_loc_hd', array(
        'label' => 'Footer Logo Bottem Text',
        'section' => 'theme_footer_other_settings_section',
        'type' => 'textarea',
    ));
    $wp_customize->add_setting('theme_footer_address_txt', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control('theme_footer_address_txt', array(
        'label' => 'Office Address',
        'section' => 'theme_footer_other_settings_section',
        'type' => 'textarea',
    ));
    $wp_customize->add_setting('theme_footer_logoimg', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'theme_footer_logoimg', array(
        'label' => __('upload Image', 'spk'),
        'section' => 'theme_footer_other_settings_section',
        'settings' => 'theme_footer_logoimg',
    )));
    $wp_customize->add_setting('theme_footer_nlhd', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control('theme_footer_nlhd', array(
        'label' => 'Footer News Letter Heading',
        'section' => 'theme_footer_other_settings_section',
        'type' => 'text',
    ));
    $wp_customize->add_setting('theme_footer_other_copyright_txt', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control('theme_footer_other_copyright_txt', array(
        'label' => 'Insert CopyRight Text',
        'section' => 'theme_footer_other_settings_section',
        'type' => 'textarea',
    ));

   
    /* ................Theme Other Settings..................... */
    $wp_customize->add_panel('theme_settings_others', array(
        'priority' => 200,
        'capability' => 'edit_theme_options',
        'theme_supports' => '',
        'title' => __('Theme Other Settings', 'spk'),
        'description' => __('Theme All Other Settings', 'spk'),
    ));
   
    /* ................Blogs Setting..................... */
    $wp_customize->add_section('theme_blogs_settings', array(
        'capability' => 'edit_theme_options',
        'title' => __('Blog Settings', 'spk'),
        'description' => __('Blog Settings', 'spk'),
        'panel' => 'theme_settings_others',
    ));
    $wp_customize->add_setting('theme_blog_category_dropdown', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control('theme_blog_category_dropdown', array(
        'label' => 'Show Dropdown Category',
        'section' => 'theme_blogs_settings',
        'type' => 'checkbox',
    ));
    $wp_customize->add_setting('theme_blog_category_dropdown_hd', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control('theme_blog_category_dropdown_hd', array(
        'label' => 'Dropdown Category Heading',
        'section' => 'theme_blogs_settings',
        'type' => 'text',
    ));
    $wp_customize->add_setting('theme_blog_exclude_category_dropwoen', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control(new MYR_Customize_Control_Multiple_Select($wp_customize, 'theme_blog_exclude_category_dropwoen', array(
        'settings' => 'theme_blog_exclude_category_dropwoen',
        'label' => 'Dropdown Exclude Category List',
        'section' => 'theme_blogs_settings',
        'type' => 'multiple-select',
        'choices' => $Cats,
    )));
    $wp_customize->add_setting('theme_blog_user_meta_admin_name', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control('theme_blog_user_meta_admin_name', array(
        'label' => 'Show User Meta Admin Name',
        'section' => 'theme_blogs_settings',
        'type' => 'checkbox',
    ));
    $wp_customize->add_setting('theme_blog_user_meta_publish_date', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control('theme_blog_user_meta_publish_date', array(
        'label' => 'Show User Meta Published Date',
        'section' => 'theme_blogs_settings',
        'type' => 'checkbox',
    ));
    $wp_customize->add_setting('theme_blog_show_number_posts', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control('theme_blog_show_number_posts', array(
        'label' => 'Show Number of Posts (If empty show default 10 posts per pages)',
        'section' => 'theme_blogs_settings',
        'type' => 'text',
    ));
    $wp_customize->add_setting('theme_blog_posts_words_limit', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control('theme_blog_posts_words_limit', array(
        'label' => 'Show number of Words blog post (If empty show default 100 Words)',
        'section' => 'theme_blogs_settings',
        'type' => 'text',
    ));
    $wp_customize->add_setting('theme_blog_share_this_box_hd', array(
        'capability' => 'edit_theme_options',
        'transport' => 'postMessage',
    ));
    $wp_customize->add_control('theme_blog_share_this_box_hd', array(
        'label' => 'Insert Heading Share this Section',
        'section' => 'theme_blogs_settings',
        'type' => 'text',
    ));

}
 