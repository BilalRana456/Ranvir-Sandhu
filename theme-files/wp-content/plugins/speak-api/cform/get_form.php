<?php
include_once ABSPATH . '/wp-content/plugins/speak-api/inc/config.php';
$Data_Cform = GetData_CForm();
$Data_Cform_Array = explode(',', $Data_Cform);
$Name_T = $Data_Cform_Array[0];
$Email_T = $Data_Cform_Array[1];
$Phone_T = $Data_Cform_Array[2];
$Msg_T = $Data_Cform_Array[3];
$Pa_T = $Data_Cform_Array[4];
$Pa_list = $Data_Cform_Array[5];
$Btn_T = $Data_Cform_Array[6];
?>
<?php wp_reset_query(); ?>
<div class="home_form">
    <h2>Contact For A Case Evaluation</h2>
    <form id="cform">
        <div class="row mlr-5">       
            <div class="col-md-12 plr-5"><div id="cform-form-msg"></div></div>
            <div class="col-md-6 plr-5">
                <label for="<?php echo RemoveSpaceAndLowCase($Name_T); ?>"><?php echo $Name_T; ?></label>
                <input type="text" id="<?php echo RemoveSpaceAndLowCase($Name_T); ?>" name="name" placeholder="<?php echo $Name_T; ?>" class="rounded mb-2 px-2">
            </div>
            <div class="col-md-6 plr-5">
                <label for="<?php echo RemoveSpaceAndLowCase($Email_T); ?>"><?php echo $Email_T; ?></label>
                <input type="text" id="<?php echo RemoveSpaceAndLowCase($Email_T); ?>" name="email" placeholder="<?php echo $Email_T; ?>" class="rounded mb-2 px-2">
            </div>
            <div class="col-md-6 plr-5">
                <label for="<?php echo RemoveSpaceAndLowCase($Phone_T); ?>"><?php echo $Phone_T; ?></label>
                <input type="text" id="<?php echo RemoveSpaceAndLowCase($Phone_T); ?>" name="phone" placeholder="<?php echo $Phone_T; ?>" class="rounded mb-2 px-2">
            </div>
            <div class="col-md-6 plr-5">
                <label for="<?php echo RemoveSpaceAndLowCase($Pa_T); ?>"><?php echo $Pa_T; ?></label>
                <select id="<?php echo RemoveSpaceAndLowCase($Pa_T); ?>" name="i-need-help-with" class="rounded mb-2 px-2"><?php echo $Pa_list; ?></select>
            </div>
            <div class="col-md-12 plr-5">
                <label for="<?php echo RemoveSpaceAndLowCase($Msg_T); ?>"><?php echo $Msg_T; ?></label>
                <textarea id="<?php echo RemoveSpaceAndLowCase($Msg_T); ?>" class="rounded mb-2 p-2" name="How-Can-I-Help-You" placeholder="<?php echo $Msg_T; ?>"></textarea>
                <div class="clearfix"></div>
                <div class="text-center m-auto content-pages-btn-wrap">
                    <button id="cformsubmit" type="submit" class="btnall btnall2 hvr-sweep-to-right w-100 my-2"><?php echo $Btn_T; ?></button>
                </div>
                <div class="clearfix"></div>
                <div id="ajax-loader-cform"></div>
            </div>
        </div>
    </form>
</div>