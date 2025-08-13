<?php

$Array_Post = $_POST;
$param = array(
    'n_tags' => $Array_Post['newsletter_tags'],
    'n_email_address' => $Array_Post['newsletter_email_address'],
    'n_email_sub' => $Array_Post['newsletter_email_subject'],
    'n_email_sub_user' => $Array_Post['newsletter_email_subject_user'],
    'n_email_temp' => $Array_Post['newsletter_email_temp'],
    'n_email_user_temp' => stripslashes($Array_Post['newsletter_email_user_temp']),
    'n_form_temp' => $Array_Post['newsletter_form_temp'],
);
update_option("SpeakApiNewsletter", $param);

$result = array(
    'result' => 'success',
    'msg' => array('Setting has been saved sucessfully.')
);
//echo json_encode($result);
wp_send_json($result);
