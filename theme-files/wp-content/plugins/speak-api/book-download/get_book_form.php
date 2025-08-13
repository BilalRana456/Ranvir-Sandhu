<?php
if ($Bd_Type == "1") {
    $Pdf_Url = $Data_BD['bookpdf1'];
    $Pdf_title = $Data_BD['booktitle1'];
    $Pdf_email_sub = $Data_BD['bookemailsub1'];
    $Pdf_Subtitle = $Data_BD['booksubtitledesk1'];
    $Pdf_img = $Data_BD['bookimg1'];
    $Modal_uniq_nymber = 1;
} elseif ($Bd_Type == "2") {
    $Pdf_Url = $Data_BD['bookpdf2'];
    $Pdf_title = $Data_BD['booktitle2'];
    $Pdf_email_sub = $Data_BD['bookemailsub2'];
    $Pdf_Subtitle = $Data_BD['booksubtitledesk2'];
    $Pdf_img = $Data_BD['bookimg2'];
    $Modal_uniq_nymber = 2;
} elseif ($Bd_Type == "3") {
    $Pdf_Url = $Data_BD['bookpdf3'];
    $Pdf_title = $Data_BD['booktitle3'];
    $Pdf_email_sub = $Data_BD['bookemailsub3'];
    $Pdf_Subtitle = $Data_BD['booksubtitledesk3'];
    $Pdf_img = $Data_BD['bookimg3'];
    $Modal_uniq_nymber = 3;
} elseif ($Bd_Type == "4") {
    $Pdf_Url = $Data_BD['bookpdf4'];
    $Pdf_title = $Data_BD['booktitle4'];
    $Pdf_email_sub = $Data_BD['bookemailsub4'];
    $Pdf_Subtitle = $Data_BD['booksubtitledesk4'];
    $Pdf_img = $Data_BD['bookimg4'];
    $Modal_uniq_nymber = 4;
}
?>
<div class="modal fade spk-book-modal" id="bookModal<?php echo $Modal_uniq_nymber; ?>" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="p-0 m-0 text-capitalize modal-title Bdform_title<?php echo $Modal_uniq_nymber; ?>" id="exampleModalLabel"><?php echo preg_replace("/\r|\n/", "", $Pdf_title); ?></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body popup-form<?php echo $Modal_uniq_nymber; ?>">
                <form id="book-form-speak<?php echo $Modal_uniq_nymber; ?>" method="post">
                    <div class="subtitle-book mb-3"><?php echo preg_replace("/\r|\n/", "", $Pdf_Subtitle); ?></div>
                    <input type="hidden" name="booktype" value="<?php echo $Bd_Type; ?>" >
                    <input type="hidden" name="pdfurl"  value="<?php echo $Pdf_Url; ?>" >
                    <input type="hidden" name="email_sub" value="<?php echo $Pdf_email_sub; ?>" >
                    <input type="hidden" name="numberfordoenload" value="<?php echo $Modal_uniq_nymber; ?>">
                    <div class="clearfix"></div>
                    <div id="cform-form-msg2<?php echo $Modal_uniq_nymber; ?>"></div>
                    <div class="row">
                        <div class="col-sm-4 d-none d-sm-block left align-self-center"><img src="<?php echo $Pdf_img; ?>"/></div>
                        <div class="col-sm-8 right <?php echo $Pdf_Url != "" ? "" : "align-self-center"; ?>">
                            <?php if ($Pdf_Url != "") { ?>
                                <label class="p-0 my-2" for="book_name">Your Name *</label>
                                <input type="text" name="name" id="book_name" placeholder="Full Name" class="w-100 px-2">
                                <label class="p-0 my-2" for="book_email">Email *</label>
                                <input type="text" name="email" id="book_email" placeholder="Valid Email" class="w-100 px-2">
                                <label class="p-0 my-2" for="book_phone">Phone *</label>
                                <input type="text" id="book_phone" name="phone" placeholder="10 Digit Number" class="w-100 px-2">
                            <?php } else { ?>
                                <div class="text-center text-capitalize comming-soon-txt-book">Download Coming Soon <br> Check Back Shortly</div>
                            <?php } ?>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btnall hvr-sweep-to-right rounded book-popup-btn" data-dismiss="modal">Close</button>
                <?php if ($Pdf_Url != "") { ?>
                    <button class="btnall hvr-sweep-to-right rounded book-popup-btn" id="book-form-btn-front<?php echo $Modal_uniq_nymber; ?>" type="submit">Download Guide Now</button>
                <?php } ?>
            </div>
        </div>
    </div>
</div>
<?php /* .....................................Jquery For Book Download............................... */ ?>
<script type="text/javascript">
    jQuery('body').on('click', '#book-form-btn-front<?php echo $Modal_uniq_nymber; ?>', function (e) {

        jQuery('#cform-form-msg2<?php echo $Modal_uniq_nymber; ?>').removeClass('alert-success');
        jQuery('#cform-form-msg2<?php echo $Modal_uniq_nymber; ?>').removeClass('alert-danger');
        jQuery('#book-form-btn-front<?php echo $Modal_uniq_nymber; ?>').html('Loading...');
        jQuery('#book-form-btn-front<?php echo $Modal_uniq_nymber; ?>').attr('disabled', 'disabled');

        jQuery.ajax({
            type: "POST",
            url: "/wp-content/plugins/speak-api/inc/send-mail-book.php",
            data: jQuery("#book-form-speak<?php echo $Modal_uniq_nymber; ?>").serialize(),
            dataType: "json",
            success: function (data) {

                if ('success' == data.result)
                {
                    jQuery('#cform-form-msg2<?php echo $Modal_uniq_nymber; ?>').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
                    jQuery('.Bdform_title<?php echo $Modal_uniq_nymber; ?>').html('Thank you for downloading the guide');
                    jQuery('#book-form-btn-front<?php echo $Modal_uniq_nymber; ?>').html('Download Guide Now <i class="fa fa-icon-download-alt"></i>');
                    jQuery('.popup-form<?php echo $Modal_uniq_nymber; ?>').html(data.msg[0]);
                    document.getElementById('book-download-link-popup' + data.downloadnumber).click();
                    jQuery('#book-form-btn-front<?php echo $Modal_uniq_nymber; ?>').removeAttr('disabled');
                }

                if ('error' == data.result)
                {
                    jQuery('#cform-form-msg2<?php echo $Modal_uniq_nymber; ?>').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
                    jQuery('#book-form-btn-front<?php echo $Modal_uniq_nymber; ?>').html('Download Guide Now <i class="fa fa-icon-download-alt"></i>');
                    jQuery('#cform-form-msg2<?php echo $Modal_uniq_nymber; ?>').html(data.msg[0]);
                    jQuery('#book-form-btn-front<?php echo $Modal_uniq_nymber; ?>').removeAttr('disabled');
                }

            }
        });

        return false;
    });
</script>