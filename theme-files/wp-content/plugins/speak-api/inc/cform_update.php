<?php

include_once SPEAKAPI_PLUGIN_DIR . 'inc/config.php';
include_once('gump.class.php');
$isValid = GUMP::is_valid($_POST, array(
            'namelabel' => 'required',
            'emaillabel' => 'required',
            'phonelabel' => 'required',
            'textarealabel' => 'required',
            'btnlabel' => 'required',
        ));

if ($isValid === true) {
    $table_name = $wpdb->prefix . "speak_api";
    $Array_Post = $_POST;
    $Data = $Array_Post['namelabel'] . ',' . $Array_Post['emaillabel'] . ',' . $Array_Post['phonelabel'] . ',' . $Array_Post['textarealabel'] . ',' . $Array_Post['practiceareaslabel'] . ',' . $Array_Post['practice_area_list'] . ',' . $Array_Post['btnlabel'];
    $Result = $wpdb->update(
            $table_name, array(
        'cform_options' => $Data,
            ), array('speak_api_id' => '1'), array(
        '%s',
        '%d'
            ), array('%d')
    );
    if ($Result) {
        $result = array(
            'result' => 'success',
            'msg' => array('Success! Please wait until page reload.')
        );
        wp_send_json($result);
        //  echo json_encode($result);
    } else {
        $result = array(
            'result' => 'error',
            'msg' => array('Something went wrong! Nothing has been saved.')
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
    // echo json_encode($result);
}