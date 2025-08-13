<?php
include_once SPEAKAPI_PLUGIN_DIR . 'inc/config.php';
$Data_BD = GetBdData();
?>
<div class="wrap" id="book-scrol-speak">
    <h2>PDF Book Download Settings</h2>
    <br />
    <div class="postbox-container"  style="width:100%;">
        <div id="breadcrumbssupport" class="postbox">
            <div class="inside">
                <form id="speak-bd-form">
                    <div id="check-api-form-msg"></div>
                    <div class="book-box">
                        <h1>Book 1 Box</h1>
                        <label>Book Title</label>
                        <input type="text" name="book1-title" class="bd-fld-admin" value="<?php echo $Data_BD['booktitle1']; ?>"/>
                        <label>Book Alt Text</label>
                        <input type="text" name="book1-alttxt" class="bd-fld-admin" value="<?php echo $Data_BD['bookalttxt1']; ?>"/>
                        <label>Book name for Email Subject</label>
                        <input type="text" name="book1-email-sub" class="bd-fld-admin" value="<?php echo stripslashes($Data_BD['bookemailsub1']); ?>"/>
                        <label>Book Sub-title For Desktop</label>
                        <textarea name="book1-sub-title-desk" class="bd-fld-area-admin"><?php echo $Data_BD['booksubtitledesk1']; ?></textarea>
                        <label>Book Sub-title For Mobile</label>
                        <textarea name="book1-sub-title-mb" class="bd-fld-area-admin"><?php echo $Data_BD['booksubtitlemb1']; ?></textarea>
                        <label>Select Category</label>
                        <?php wp_dropdown_categories(array('hide_empty' => 0, 'name' => 'book1-category', 'hierarchical' => true, 'selected' => $Data_BD['bookcategory1'])); ?>
                        <label>Upload Book Image</label>
                        <input id="upload_image1" type="text" name="book1-img" value="<?php echo $Data_BD['bookimg1']; ?>" />
                        <input class="upload_image_button" type="button" value="Upload Image" />
                        <label>Upload Book PDF</label>
                        <input id="upload_image2" type="text" name="book1-pdf" value="<?php echo $Data_BD['bookpdf1']; ?>" />
                        <input class="upload_image_button" type="button" value="Upload PDF" />
                    </div>
                    <div class="book-box">
                        <h1>Book 2 Box</h1>
                        <label>Book Title</label>
                        <input type="text" name="book2-title" class="bd-fld-admin" value="<?php echo $Data_BD['booktitle2']; ?>"/>
                        <label>Book Alt Text</label>
                        <input type="text" name="book2-alttxt" class="bd-fld-admin" value="<?php echo $Data_BD['bookalttxt2']; ?>"/>
                        <label>Book name for Email Subject</label>
                        <input type="text" name="book2-email-sub" class="bd-fld-admin" value="<?php echo stripslashes($Data_BD['bookemailsub2']); ?>"/>
                        <label>Book Sub-title For Desktop</label>
                        <textarea name="book2-sub-title-desk" class="bd-fld-area-admin"><?php echo $Data_BD['booksubtitledesk2']; ?></textarea>
                        <label>Book Sub-title For Mobile</label>
                        <textarea name="book2-sub-title-mb" class="bd-fld-area-admin"><?php echo $Data_BD['booksubtitlemb2']; ?></textarea>
                        <label>Select Category</label>
                        <?php wp_dropdown_categories(array('hide_empty' => 0, 'name' => 'book2-category', 'hierarchical' => true, 'selected' => $Data_BD['bookcategory2'])); ?>
                        <label>Upload Book Image</label>
                        <input id="upload_image3" type="text" name="book2-img" value="<?php echo $Data_BD['bookimg2']; ?>" />
                        <input class="upload_image_button" type="button" value="Upload Image" />
                        <label>Upload Book PDF</label>
                        <input id="upload_image4" type="text" name="book2-pdf" value="<?php echo $Data_BD['bookpdf2']; ?>" />
                        <input class="upload_image_button" type="button" value="Upload PDF" />
                    </div>
                    <div class="book-box">
                        <h1>Book 3 Box</h1>
                        <label>Book Title</label>
                        <input type="text" name="book3-title" class="bd-fld-admin" value="<?php echo $Data_BD['booktitle3']; ?>"/>
                        <label>Book Alt Text</label>
                        <input type="text" name="book3-alttxt" class="bd-fld-admin" value="<?php echo $Data_BD['bookalttxt3']; ?>"/>
                        <label>Book name for Email Subject</label>
                        <input type="text" name="book3-email-sub" class="bd-fld-admin" value="<?php echo $Data_BD['bookemailsub3']; ?>"/>
                        <label>Book Sub-title For Desktop</label>
                        <textarea name="book3-sub-title-desk" class="bd-fld-area-admin"><?php echo $Data_BD['booksubtitledesk3']; ?></textarea>
                        <label>Book Sub-title For Mobile</label>
                        <textarea name="book3-sub-title-mb" class="bd-fld-area-admin"><?php echo $Data_BD['booksubtitlemb3']; ?></textarea>
                        <label>Select Category</label>
                        <?php wp_dropdown_categories(array('hide_empty' => 0, 'name' => 'book3-category', 'hierarchical' => true, 'selected' => $Data_BD['bookcategory3'])); ?>
                        <label>Upload Book Image</label>
                        <input id="upload_image5" type="text" name="book3-img" value="<?php echo $Data_BD['bookimg3']; ?>" />
                        <input class="upload_image_button" type="button" value="Upload Image" />
                        <label>Upload Book PDF</label>
                        <input id="upload_image6" type="text" name="book3-pdf" value="<?php echo $Data_BD['bookpdf3']; ?>" />
                        <input class="upload_image_button" type="button" value="Upload PDF" />
                    </div>
                    <div class="book-box">
                        <h1>Book 4 Box</h1>
                        <label>Book Title</label>
                        <input type="text" name="book4-title" class="bd-fld-admin" value="<?php echo $Data_BD['booktitle4']; ?>"/>
                        <label>Book Alt Text</label>
                        <input type="text" name="book4-alttxt" class="bd-fld-admin" value="<?php echo $Data_BD['bookalttxt4']; ?>"/>
                        <label>Book name for Email Subject</label>
                        <input type="text" name="book4-email-sub" class="bd-fld-admin" value="<?php echo $Data_BD['bookemailsub4']; ?>"/>
                        <label>Book Sub-title For Desktop</label>
                        <textarea name="book4-sub-title-desk" class="bd-fld-area-admin"><?php echo $Data_BD['booksubtitledesk4']; ?></textarea>
                        <label>Book Sub-title For Mobile</label>
                        <textarea name="book4-sub-title-mb" class="bd-fld-area-admin"><?php echo $Data_BD['booksubtitlemb4']; ?></textarea>
                        <label>Select Category</label>
                        <?php wp_dropdown_categories(array('hide_empty' => 0, 'name' => 'book4-category', 'hierarchical' => true, 'selected' => $Data_BD['bookcategory4'])); ?>
                        <label>Upload Book Image</label>
                        <input id="upload_image7" type="text" name="book4-img" value="<?php echo $Data_BD['bookimg4']; ?>" />
                        <input class="upload_image_button" type="button" value="Upload Image" />
                        <label>Upload Book PDF</label>
                        <input id="upload_image8" type="text" name="book4-pdf" value="<?php echo $Data_BD['bookpdf4']; ?>" />
                        <input class="upload_image_button" type="button" value="Upload PDF" />
                    </div>
                    <label>Book Button Text</label>
                    <input type="text" name="book-btn-name" value="<?php echo $Data_BD['bookbtnname']; ?>"/>
                    <div style="clear: both;padding-bottom: 20px;"></div>
                    <input type="submit" value="Save" class="button-primary" id="spk-bd-btn"/>
                </form>
            </div>
        </div>
    </div>

</div>