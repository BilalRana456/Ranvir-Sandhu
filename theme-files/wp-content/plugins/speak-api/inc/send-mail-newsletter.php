<?php

include_once 'config.php';
include_once 'SpeakApiCheck.php';
include_once 'gump.class.php';
/* ............................................................................ */
$isValid = GUMP::is_valid($_POST, array(
            'name' => 'required|valid_name',
            'email' => 'required|valid_email',
            'g-recaptcha-response' => 'required',
        ));
if ($isValid === true) {
    $result = SendCurl_Newsletter($_POST);
    wp_send_json($result);
} else {
    $result = array(
        'result' => 'error',
        'msg' => $isValid
    );
    wp_send_json($result);
    //echo json_encode($result);
}

/* ........................................................................................ */

function SendCurl_Newsletter($Data_Array) {
    $newsletter_options = get_option("SpeakApiNewsletter");
    $ApiKey = Get_ApiKey();
    $Array_Post['speak_api_key'] = $ApiKey;
    $Status_ApiKey = SpeakApiCheck::CheckAPIKey($Array_Post);
    if ($Status_ApiKey) {
        $Url_Web = trim(get_bloginfo('url'));
        $lead_data2['name'] = $Data_Array['name'];
        $lead_data2['email'] = $Data_Array['email'];
        $lead_data2['tags'] = $newsletter_options['n_tags'];
        $lead_data2['type'] = 'newsletter';
        $lead_data2['url'] = $Url_Web;
        $lead_data2['api_key'] = Get_ApiKey();
        $lead_data2['admin_name'] = get_bloginfo('name');

        $curl_options = array(
            CURLOPT_URL => "http://api.speakeasymarketinginc.com/spk-nl-apply-tag",
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
    }
    $status = send_alerts($Data_Array);

    return $status;
}

function send_alerts($Data_Array) {
    include_once('PHPMailer/class.phpmailer.php');
    $site_url = str_replace(array('http://', 'https://'), '', get_bloginfo('url'));
    $noptions = get_option("SpeakApiNewsletter");
    $reply_to = $Data_Array['email'];
    $subject = str_replace('[site_url]', $site_url, $noptions['n_email_sub']);
    $ip = getClientIP();
    $body = $noptions['n_email_temp'];
    $body = @str_replace("[site_url]", $site_url, $body);
    $body = @str_replace("[name]", $Data_Array['name'], $body);
    $body = @str_replace("[email]", $Data_Array['email'], $body);
    $body = @str_replace("[ip]", $ip, $body);

    // Submit Mail
    $mail = new PHPMailer;
    //$mail->SMTPDebug = 0;
    $mail->AddReplyTo($reply_to);
    $Email_array = $noptions['n_email_address'];
    $email_array = explode(',', $Email_array);
    for ($i = 0; $i < sizeof($email_array); $i++) {
        $mail->addAddress($email_array[$i]);
    }
    $mail->SetFrom('no-reply@speakeasymarketinginc.com', $site_url);
    $mail->Subject = $subject;
    $mail->isHTML(true);
    $mail->Body = $body;
    if ($mail->send()) {

        // send email to user
        $bodyUser = $noptions['n_email_user_temp'];
        $bodyUser = @str_replace("[site_url]", $site_url, $bodyUser);
        $bodyUser = @str_replace("[name]", $Data_Array['name'], $bodyUser);
        $bodyUser = @str_replace("[email]", $Data_Array['email'], $bodyUser);
        $bodyUser = @str_replace("[username]", $Data_Array['name'], $bodyUser);

        $mailReply = new PHPMailer;
        //$mail->SMTPDebug = 0;
        $mailReply->addAddress($Data_Array['email']);

        $subjectUser = $noptions['n_email_sub_user'];
        $mailReply->SetFrom('no-reply@speakeasymarketinginc.com', $site_url);
        $mailReply->Subject = $subjectUser;
        $mailReply->isHTML(true);
        $mailReply->Body = $bodyUser;
        if (!$mailReply->send()) {
            $result = array(
                'result' => 'error',
                'msg' => array("Something wrong while sending email to your ID. Please make sure you're using actual email adress.")
            );
        } else {
            $result = array(
                'result' => 'success',
                'msg' => array("You've successfully subscribed. Thank You!")
            );
        }
    } else {
        $result = array(
            'result' => 'error',
            'msg' => array("Something went wrong. Please try later!")
        );
    }
    return $result;
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
