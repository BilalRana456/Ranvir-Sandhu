<?php

include_once 'config.php';
include_once 'SpeakApiCheck.php';
include_once 'gump.class.php';
/* ............................................................................ */
$isValid = GUMP::is_valid($_POST, array(
            'name' => 'required|valid_name',
            'email' => 'required|valid_email',
            'phone' => 'required',
            'i-need-help-with' => 'required',
            'Message' => 'required',
            'g-recaptcha-response' => 'required',
        ));
if ($isValid === true) {
    $phone = preg_replace("/[^0-9,.]/", "", $_POST['phone']);
    if (strlen($phone) == '10') {
        if (isHtml($_POST['Message']) == TRUE) {
            $result = array(
                'result' => 'error',
                'msg' => array('Not include html characters in Message')
            );
            wp_send_json($result);
            //echo json_encode($result);
        } elseif (checkurl($_POST['Message']) == TRUE) {
            $result = array(
                'result' => 'error',
                'msg' => array('Not include url in Message')
            );
            wp_send_json($result);
            //echo json_encode($result);
        } else {
            InsertData_cForm($_POST);

            $Get_Result = SendCurl_cForm($_POST);
            if ($Get_Result) {
                $result = array(
                    'result' => 'success',
                    'msg' => array('')
                );
                wp_send_json($result);
                // echo json_encode($result);
            } else {
                $result = array(
                    'result' => 'error',
                    'msg' => array('ApiKey Not Active')
                );
                wp_send_json($result);
                //echo json_encode($result);
            }
        }
    } else {
        $result = array(
            'result' => 'error',
            'msg' => array('Phone number must be 10 Digits')
        );
        wp_send_json($result);
        //echo json_encode($result);
    }
} else {
    $result = array(
        'result' => 'error',
        'msg' => $isValid
    );
    wp_send_json($result);
    //echo json_encode($result);
}

/* ............................................................................................... */

function isHtml($string) {
    preg_match("/<\/?\w+((\s+\w+(\s*=\s*(?:\".*?\"|'.*?'|[^'\">\s]+))?)+\s*|\s*)\/?>/", $string, $matches);
    if (count($matches) == 0) {
        return FALSE;
    } else {
        return TRUE;
    }
}

/* ............................................................................................... */

function checkurl($string_value) {
    $var = '/((?:https?\:\/\/|www\.)(?:[-a-z0-9]+\.)*[-a-z0-9]+.*)/i';
    $var1 = '/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/';
    $words = array('.com', '.org', '.in', '.pk', '.eu', '.net', '.my', '.edu', '.info', '.biz', '.pro', '.jobs', '.cc');
    $matches_words = 0;
    foreach ($words as $word) {
        if (strpos($string_value, $word) !== false) {
            $matches_words = 1;
        }
    }
    if ($matches_words == '1') {
        return TRUE;
    }
    preg_match($var1, $string_value, $matches);
    preg_match($var, $string_value, $matchess);
    if (count($matches) == 0 && count($matchess) == 0) {
        return FALSE;
    } else {
        return TRUE;
    }
}

/* ........................................................................................ */

function SendCurl_cForm($Data_Array) {

    $ApiKey = Get_ApiKey();
    $Array_Post['speak_api_key'] = $ApiKey;
    $Status_ApiKey = SpeakApiCheck::CheckAPIKey($Array_Post);
    $Check_ApiOptions = Get_ApiOptions();
    $Data_Api_Array = explode(',', $Check_ApiOptions);
    if ($Status_ApiKey) {
        $Url_Web = trim(get_bloginfo('url'));
        $lead_data2['name'] = $Data_Array['name'];
        $lead_data2['phone'] = $Data_Array['phone'];
        $lead_data2['email'] = $Data_Array['email'];
        $lead_data2['pa'] = $Data_Array['i-need-help-with'];
        $lead_data2['msg'] = $Data_Array['Message'];
        $lead_data2['type'] = 'CF';
        $lead_data2['url'] = $Url_Web;
        $lead_data2['api_key'] = Get_ApiKey();
        $lead_data2['admin_name'] = get_bloginfo('name');

        $curl_options = array(
            CURLOPT_URL => "http://api.speakeasymarketinginc.com/send-data-speak-api",
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS =>
            http_build_query($lead_data2),
            CURLOPT_HTTP_VERSION => 1.0,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HEADER => false,
            CURLOPT_CONNECTTIMEOUT => 120,
            CURLOPT_TIMEOUT => 120,
            CURLOPT_MAXREDIRS => 10
        );
        $curl = curl_init();
        curl_setopt_array($curl, $curl_options);
        $result = curl_exec($curl);
        $http_status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        curl_close($curl);
        if ($result == 'yes') {
            return TRUE;
        } else {
            return FALSE;
        }
    } else {
        return send_by_mailer($Data_Array);
    }
}

/* ........................................................................................ */

function InsertData_cForm($Data_Array) {
    global $wpdb;
    $table_name = $wpdb->prefix . "speak_api_leads";
    $wpdb->insert(
            $table_name, array(
        'speak_api_leads_name' => $Data_Array['name'],
        'speak_api_leads_phone' => $Data_Array['phone'],
        'speak_api_leads_email' => $Data_Array['email'],
        'speak_api_leads_msg' => $Data_Array['Message'],
        'speak_api_leads_type' => 'CF',
        'speak_api_lead_time' => mysqlNow()
            )
    );
}

/* ................Get Curent Date.................... */

function mysqlNow() {
    return date('Y:m:d H:i:s');
}

function send_by_mailer($Data_Array) {
    include_once('PHPMailer/class.phpmailer.php');
    $site_url = str_replace(array('http://', 'https://'), '', get_bloginfo('url'));
    $Get_Email_Data = get_option("SpeakApiCBAlerts");
    $reply_to = $Data_Array['email'];
    $subject = str_replace('[site_url]', $site_url, $Get_Email_Data['c_email_sub']);

    $body = $Get_Email_Data['c_email_temp'];
    $body = @str_replace("[site_url]", $site_url, $body);
    $body = @str_replace("[name]", $Data_Array['name'], $body);
    $body = @str_replace("[phone]", $Data_Array['phone'], $body);
    $body = @str_replace("[email]", $Data_Array['email'], $body);
    $body = @str_replace("[pa]", $Data_Array['i-need-help-with'], $body);
    $body = @str_replace("[msg]", $Data_Array['Message'], $body);
    // Submit Mail
    $mail = new PHPMailer;
    //$mail->SMTPDebug = 0;
    $mail->AddReplyTo($reply_to);
    $Email_array = $Get_Email_Data['c_email_address'];
    $email_array = explode(',', $Email_array);
    for ($i = 0; $i < sizeof($email_array); $i++) {
        $mail->addAddress($email_array[$i]);
    }
    $mail->SetFrom($Get_Email_Data['ex_email_from'], $site_url);
    $mail->Subject = $subject;
    $mail->isHTML(true);
    $mail->Body = $body;
    if ($mail->send()) {
        return TRUE;
    } else {
        return FALSE;
    }
}
