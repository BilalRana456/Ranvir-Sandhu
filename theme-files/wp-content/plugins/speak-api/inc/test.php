<?php

include_once 'config.php';
include_once 'SpeakApiCheck.php';
include_once 'gump.class.php';
/* ............................................................................ */
$isValid = GUMP::is_valid($_POST, array(
            'name' => 'required',
            'email' => 'required',
            'state' => 'required',
            'zip' => 'required',
            'phone' => 'required',
            'Brief-description-of-your-legal-issue' => 'required',
            'disclaimer' => 'required',
        ));
if ($isValid === true) {
    //InsertData_cForm($_POST);
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
} else {
    $result = array(
        'result' => 'error',
        'msg' => $isValid
    );
    wp_send_json($result);
    //echo json_encode($result);
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
        $lead_data2['body'] = stripslashes(buildBody($Data_Array));
        $lead_data2['from'] = $Url_Web;
        $lead_data2['subject'] = "Lead From " . $Url_Web;

        $lead_data2['smartsheet'] = "1";
        $lead_data2['name'] = $Data_Array['name'];
        $lead_data2['email'] = $Data_Array['email'];
        $lead_data2['phone'] = $Data_Array['phone'];
        $lead_data2['msg'] = $Data_Array['Brief-description-of-your-legal-issue'];

        $lead_data2['sendUserCC'] = ($Data_Array['cbContactCopy']) ? TRUE : FALSE;
        $lead_data2['type'] = 'CF';
        $lead_data2['url'] = $Url_Web;
        $lead_data2['api_key'] = Get_ApiKey();
        $lead_data2['admin_name'] = get_bloginfo('name');
        $curl_options = array(
            CURLOPT_URL => "http://api.speakeasymarketinginc.com/send-email-direct",
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

function buildBody($Data_Array) {
    $Url_Web = trim(get_bloginfo('url'));
    $cEmail = !empty($Data_Array['contact-email']) ? "Yes" : "No";
    $cPhone = !empty($Data_Array['contact-phone']) ? "Yes" : "No";
    $ip = getClientIP();
    $body = '<h2>A Lead Just Came In From ' . $Url_Web . '</h2>';
    $body .= '<p><b>Name: </b> ' . $Data_Array["name"] . '</p>';
    $body .= '<p><b>Email Address: </b> ' . $Data_Array["email"] . '</p>';
    $body .= '<p><b>State: </b> ' . $Data_Array["state"] . '</p>';
    $body .= '<p><b>Zip: </b> ' . $Data_Array["zip"] . '</p>';
    $body .= '<p><b>Phone: </b> ' . $Data_Array["phone"] . '</p>';
    $body .= '<h3>How would you like to be contacted?</h3>';
    $body .= '<p><b>Email: </b> ' . $cEmail . '</p>';
    $body .= '<p><b>Phone: </b> ' . $cPhone . '</p>';
    $body .= '<p><b>Brief description of your legal issue:</b> ' . $Data_Array["Brief-description-of-your-legal-issue"] . '</p>';
    $body .= '<p style="color: #fff;"> <br> <br> <br>' . $ip . '</p>';
    return $body;
}

/* ................Get Curent Date.................... */

function mysqlNow() {
    return date('Y:m:d H:i:s');
}

function send_by_mailer($Data_Array) {
    include_once('PHPMailer/PHPMailerAutoload.php');
    $site_url = substr(get_bloginfo('url'), 7);
    $reply_to = $Data_Array['email'];
    $Get_Email_Data = get_option("SpeakApiCBAlerts");
    $body = buildBody($Data_Array);
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
    $mail->Subject = "New Subscribe Request";
    $mail->isHTML(true);
    $mail->Body = $body;
    if ($mail->send()) {
        return TRUE;
    } else {
        return FALSE;
    }
}

function getClientIP() {
    if (isset($_SERVER)) {
        if (isset($_SERVER["HTTP_X_FORWARDED_FOR"]))
            return $_SERVER["HTTP_X_FORWARDED_FOR"];
        if (isset($_SERVER["HTTP_CLIENT_IP"]))
            return $_SERVER["HTTP_CLIENT_IP"];
        return $_SERVER["REMOTE_ADDR"];
    }
    if (getenv('HTTP_X_FORWARDED_FOR'))
        return getenv('HTTP_X_FORWARDED_FOR');
    if (getenv('HTTP_CLIENT_IP'))
        return getenv('HTTP_CLIENT_IP');
    return getenv('REMOTE_ADDR');
}
