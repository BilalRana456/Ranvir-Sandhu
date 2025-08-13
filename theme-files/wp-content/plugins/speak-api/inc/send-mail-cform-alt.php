<?php

include_once 'config.php';
include_once 'SpeakApiCheck.php';
include_once 'gump.class.php';
/* ............................................................................ */
$isValid = GUMP::is_valid($_POST, array(
            'First_Name' => 'required',
            'last_Name' => 'required',
            'Email_Address' => 'required',
            'Contact_Phone_Number' => 'required',
        ));
if ($isValid === true) {
    $Get_Result = SendCurl_cForm($_POST);
    if ($Get_Result) {
        $result = array(
            'result' => 'success',
            'msg' => array('')
        );
        wp_send_json($result);
    } else {
        $result = array(
            'result' => 'error',
            'msg' => array('ApiKey Not Active')
        );
        wp_send_json($result);
    }
} else {
    $result = array(
        'result' => 'error',
        'msg' => $isValid
    );
    wp_send_json($result);
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

        $lead_data2['body'] = buildBody($Data_Array);


        $lead_data2['from'] = $Url_Web;
        $hastag = trim($Data_Array["hastag"]);
        $lead_data2['subject'] = "Lead From " . $hastag;

        $lead_data2['smartsheet'] = "1";
        $lead_data2['name'] = $Data_Array['First_Name'];
        $lead_data2['email'] = $Data_Array['Email_Address'];
        $lead_data2['phone'] = $Data_Array['Contact_Phone_Number'];
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
    $ip = getClientIP();

    $hastag = trim($Data_Array["hastag"]);
    $body = '<h2>A Lead Just Came In From ' . $hastag . '</h2>';
    $body .= '<p><b>Title: </b> ' . $Data_Array["Title"] . '</p>';
    $body .= '<p><b>First Name: </b> ' . $Data_Array["First_Name"] . '</p>';
    $body .= '<p><b>Last Name: </b> ' . $Data_Array["last_Name"] . '</p>';
    $body .= '<p><b>Email Address: </b> ' . $Data_Array["Email_Address"] . '</p>';
    $body .= '<p><b>Contact Phone Number: </b> ' . $Data_Array["Contact_Phone_Number"] . '</p>';
    $body .= '<p><b>Home Phone Number: </b> ' . $Data_Array["validation1"] . '</p>';
    $body .= '<p><b>Referred by: </b> ' . $Data_Array["validation2"] . '</p>';
    $body .= '<p><b>Home Address: </b> ' . $Data_Array["validation3"] . '</p>';
    $body .= '<p><b>City: </b> ' . $Data_Array["validation4"] . '</p>';
    $body .= '<p><b>State: </b> ' . $Data_Array["validation5"] . '</p>';
    $body .= '<p><b>Zipcode/Postcode: </b> ' . $Data_Array["validation6"] . '</p>';
    $body .= '<p><b>Country: </b> ' . $Data_Array["validation7"] . '</p>';
    $body .= '<p><b>Employer: </b> ' . $Data_Array["validation8"] . '</p>';
    $body .= '<p><b>Employer Address: </b> ' . $Data_Array["validation9"] . '</p>';
    $body .= '<p><b>Licenses you hold: </b> ' . $Data_Array["validation10"] . '</p>';
    $body .= '<p><b>CDL: </b> ' . $Data_Array["validation11"] . '</p>';
    $body .= '<p><b>Pilot License: </b> ' . $Data_Array["validation12"] . '</p>';
    $body .= '<p><b>Professional License: </b> ' . $Data_Array["validation13"] . '</p>';
    $body .= '<p><b>Type of Profession: </b> ' . $Data_Array["validation14"] . '</p>';
    $body .= '<h3 class="my-2">Your Georgia DUI Case</h3>';
    $body .= '<p><b>State of Stop: </b> ' . $Data_Array["validation15"] . '</p>';
    $body .= '<p><b>Date of Stop: </b> ' . $Data_Array["validation16"] . '</p>';
    $body .= '<p><b>County of Stop: </b> ' . $Data_Array["validation17"] . '</p>';
    $body .= '<p><b>Police Agency: </b> ' . $Data_Array["validation18"] . '</p>';
    $body .= '<p><b>Was there an accident involved: </b> ' . $Data_Array["validation19"] . '</p>';
    $body .= '<p><b>Why were you stopped: </b> ' . $Data_Array["validation20"] . '</p>';
    $body .= '<p><b>Police officers first comments: </b> ' . $Data_Array["validation21"] . '</p>';
    $body .= '<p><b>Did Police ask you how much you had to drink: </b> ' . $Data_Array["validation22"] . '</p>';
    $body .= '<p><b>What did you tell the Officer: </b> ' . $Data_Array["validation23"] . '</p>';
    $body .= '<p><b>What and how much did you drink/smoke/other: </b> ' . $Data_Array["validation24"] . '</p>';
    $body .= '<p><b>Were field test performed: </b> ' . $Data_Array["validation25"] . '</p>';
    $body .= '<p><b>Were you informed that they are voluntary: </b> ' . $Data_Array["validation26"] . '</p>';
    $body .= '<p><b>Were Miranda rights read to you: </b> ' . $Data_Array["validation27"] . '</p>';
    $body .= '<p><b>Which field tests were administered: </b> ' . implode(', ', $Data_Array["validation28"]) . '</p>';
    $body .= '<p><b>What were the results of the breath test: </b> ' . $Data_Array["validation29"] . '</p>';
    $body .= '<p><b>At what point were you arrested: </b> ' . $Data_Array["validation30"] . '</p>';
    $body .= '<p><b>Was the following read to you: </b> ' . $Data_Array["validation31"] . '</p>';
    $body .= '<p><b>Did you blow into the Intoxilyzer 9000: </b> ' . $Data_Array["validation32"] . '</p>';
    $body .= '<p><b>Did you refuse the test: </b> ' . $Data_Array["validation33"] . '</p>';
    $body .= '<p><b>Did you request an explanation: </b> ' . $Data_Array["validation34"] . '</p>';
    $body .= '<p><b>Did you ask for an independent test: </b> ' . $Data_Array["validation35"] . '</p>';
    $body .= '<p><b>Reason given for refusal: </b> ' . $Data_Array["validation36"] . '</p>';
    $body .= '<p><b>How was blood taken: </b> ' . $Data_Array["validation37"] . '</p>';
    $body .= '<p><b>How was blood sent to lab: </b> ' . $Data_Array["validation38"] . '</p>';
    $body .= '<p><b>Location of Court: </b> ' . $Data_Array["validation39"] . '</p>';
    $body .= '<p><b>Do you need a Ten Day Letter: </b> ' . $Data_Array["validation40"] . '</p>';
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
