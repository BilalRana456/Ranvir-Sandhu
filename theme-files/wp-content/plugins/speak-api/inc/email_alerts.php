<?php

$Array_BD = $_POST;
/* .......................Check option Exits................................. */

$Book_Array = array(
    'c_email_address' => $Array_BD['cform_email_address'],
    'c_email_sub' => $Array_BD['cform_email_subject'],
    'c_email_temp' => $Array_BD['cform_email_template'],
    'b_email_address' => $Array_BD['bform_email_address'],
    'b_email_sub' => $Array_BD['bform_email_subject'],
    'b_email_temp' => $Array_BD['bform_email_template'],
    'ex_email_from' => $Array_BD['ex_email_from'],
);
update_option("SpeakApiCBAlerts", $Book_Array);

$result = array(
    'result' => 'success',
    'msg' => array('Setting has been saved sucessfully. Reloading...')
);
//echo json_encode($result);
wp_send_json($result);
