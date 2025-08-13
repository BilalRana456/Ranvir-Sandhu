<?php

include_once 'config.php';
include_once 'SpeakApiCheck.php';
include_once 'gump.class.php';
/* ............................................................................ */
$isValid = GUMP::is_valid($_POST, array(
            'name' => 'required|valid_name',
            'email' => 'required|valid_email',
            'phone' => 'required',
        ));
if ($isValid === true) {
    $phone = preg_replace("/[^0-9,.]/", "", $_POST['phone']);
    if (strlen($phone) == '10') {
        InsertData_bForm($_POST);
        $Get_Result = SendCurl_bForm($_POST);
        if ($Get_Result) {
            $result = array(
                'result' => 'success',
                'msg' => array("<p class='book-thankmsg m-0 p-0'>If your download doesn't start automatically: <a download='" . $_POST['pdfurl'] . "' id='book-download-link-popup" . $_POST['numberfordoenload'] . "' href= " . $_POST['pdfurl'] . " > CLICK HERE </a> </p>"),
                'pdful' => $_POST['pdfurl'],
                'downloadnumber' => $_POST['numberfordoenload']
            );
            wp_send_json($result);
            //echo json_encode($result);
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

/* ........................................................................................ */

function SendCurl_bForm($Data_Array) {
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
        $lead_data2['emailsub'] = $Data_Array['email_sub'];
        $lead_data2['type'] = 'BD';
        $lead_data2['msg'] = ' ';
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

function InsertData_bForm($Data_Array) {
    global $wpdb;
    $table_name = $wpdb->prefix . "speak_api_leads";
    $wpdb->insert(
            $table_name, array(
        'speak_api_leads_name' => $Data_Array['name'],
        'speak_api_leads_phone' => $Data_Array['phone'],
        'speak_api_leads_email' => $Data_Array['email'],
        'speak_api_leads_msg' => "",
        'speak_api_leads_type' => 'BD',
        'speak_api_lead_time' => mysqlNow()
            )
    );
}

/* ................Get Curent Date.................... */

function mysqlNow() {
    return date('Y:m:d H:i:s');
}

function send_by_mailer($Data_Array) {
    include_once('PHPMailer/PHPMailerAutoload.php');
    $site_url = substr(get_bloginfo('url'), 7);
    $Get_Email_Data = get_option("SpeakApiCBAlerts");
    $reply_to = $Data_Array['email'];
    $admin_name = get_bloginfo('name');
    $subject = str_replace('[bookemailsub]', $Data_Array['email_sub'], $Get_Email_Data['b_email_sub']);

    $body = $Get_Email_Data['b_email_temp'];
    $body = @str_replace("[bookemailsub]", $Data_Array['email_sub'], $body);
    $body = @str_replace("[lawyername]", $admin_name, $body);
    $body = @str_replace("[name]", $Data_Array['name'], $body);
    $body = @str_replace("[phone]", $Data_Array['phone'], $body);
    $body = @str_replace("[email]", $Data_Array['email'], $body);

// Submit Mail
    $mail = new PHPMailer;
    $mail->SMTPDebug = 0;
    $mail->AddReplyTo($reply_to);
    $Email_array = $Get_Email_Data['b_email_address'];
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
