<?php
$Array_BD = $_POST;
/* .......................Check option Exits................................. */
$Check_BD = get_option("SpeakApiBD");
$Book_Array = array(
    'booktitle1' => $Array_BD['book1-title'],
    'booktitle2' => $Array_BD['book2-title'],
    'booktitle3' => $Array_BD['book3-title'],
    'booktitle4' => $Array_BD['book4-title'],
    'bookalttxt1' => $Array_BD['book1-alttxt'],
    'bookalttxt2' => $Array_BD['book2-alttxt'],
    'bookalttxt3' => $Array_BD['book3-alttxt'],
    'bookalttxt4' => $Array_BD['book4-alttxt'],
    'bookemailsub1' => $Array_BD['book1-email-sub'],
    'bookemailsub2' => $Array_BD['book2-email-sub'],
    'bookemailsub3' => $Array_BD['book3-email-sub'],
    'bookemailsub4' => $Array_BD['book4-email-sub'],
    'booksubtitledesk1' => $Array_BD['book1-sub-title-desk'],
    'booksubtitledesk2' => $Array_BD['book2-sub-title-desk'],
    'booksubtitledesk3' => $Array_BD['book3-sub-title-desk'],
    'booksubtitledesk4' => $Array_BD['book4-sub-title-desk'],
    'booksubtitlemb1' => $Array_BD['book1-sub-title-mb'],
    'booksubtitlemb2' => $Array_BD['book2-sub-title-mb'],
    'booksubtitlemb3' => $Array_BD['book3-sub-title-mb'],
    'booksubtitlemb4' => $Array_BD['book4-sub-title-mb'],
    'bookcategory1' => $Array_BD['book1-category'],
    'bookcategory2' => $Array_BD['book2-category'],
    'bookcategory3' => $Array_BD['book3-category'],
    'bookcategory4' => $Array_BD['book4-category'],
    'bookimg1' => $Array_BD['book1-img'],
    'bookimg2' => $Array_BD['book2-img'],
    'bookimg3' => $Array_BD['book3-img'],
    'bookimg4' => $Array_BD['book4-img'],
    'bookpdf1' => $Array_BD['book1-pdf'],
    'bookpdf2' => $Array_BD['book2-pdf'],
    'bookpdf3' => $Array_BD['book3-pdf'],
    'bookpdf4' => $Array_BD['book4-pdf'],
    'bookbtnname' => $Array_BD['book-btn-name'],
);
if ($Check_BD) {
    update_option("SpeakApiBD", $Book_Array);
} else {
    add_option("SpeakApiBD", $Book_Array);
}
$result = array(
    'result' => 'success',
    'msg' => array('Setting has been saved sucessfully. Reloading...')
);
//echo json_encode($result);
wp_send_json($result);
