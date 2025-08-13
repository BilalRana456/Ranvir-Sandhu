jQuery(document).ready(function () {
    /*..................................................................*/
    jQuery('body').on('click', '#speak_api_submit', function (e) {

        jQuery('#loader-form').css('display', 'block');
        jQuery('#check-api-form-msg').removeClass('alert-success');
        jQuery('#check-api-form-msg').removeClass('alert-danger');
        jQuery('#check-api-keys').attr('disabled', true);

        jQuery.ajax({
            type: "POST",
            url: "/wp-admin/admin-ajax.php",
            data: jQuery("#spk-api-form").serialize() + "&action=speakApiUpdate",
            dataType: "json",
            success: function (data) {

                if ('success' == data.result)
                {
                    jQuery('#check-api-form-msg').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
                    jQuery('#loader-form').css('display', 'none');
                    jQuery('#check-api-form-msg').html(data.msg);
                    window.setTimeout(function () {
                        location.reload()
                    }, 3000)
                }

                if ('error' == data.result)
                {
                    jQuery('#check-api-form-msg').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
                    jQuery('#loader-form').css('display', 'none');
                    jQuery('#check-api-form-msg').html(data.msg);
                }

            }
        });
        return false;
    });
    /*........................cForm update..........................................*/
    jQuery('body').on('click', '#cform-options-btn', function (e) {

        jQuery('#cform-options-btn').attr('value', 'Loading....');
        jQuery('#check-api-form-msg').removeClass('alert-success');
        jQuery('#check-api-form-msg').removeClass('alert-danger');
        jQuery.ajax({
            type: "POST",
            url: "/wp-admin/admin-ajax.php",
            data: jQuery("#cform-settings").serialize() + "&action=speakApiCfromUpdate",
            dataType: "json",
            success: function (data) {

                if ('success' == data.result)
                {
                    jQuery('#check-api-form-msg').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
                    jQuery('#cform-options-btn').attr('value', 'Save Settings');
                    jQuery('#check-api-form-msg').html(data.msg[0]);
                    window.setTimeout(function () {
                        location.reload()
                    }, 3000)
                }

                if ('error' == data.result)
                {
                    jQuery('#check-api-form-msg').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
                    jQuery('#loader-form').css('display', 'none');
                    jQuery('#cform-options-btn').attr('value', 'Save Settings');
                    jQuery('#check-api-form-msg').html(data.msg[0]);
                }

            }
        });
        return false;
    });
    /*........................Chat update..........................................*/
    jQuery('body').on('click', '#newsletter-options-btn', function (e) {
        e.preventDefault();
        console.log('saving....')
        var btn = this;
        jQuery(btn).attr('value', 'Saving....');
        jQuery('#check-api-form-msg').removeClass('alert-success');
        jQuery('#check-api-form-msg').removeClass('alert-danger');
        jQuery.ajax({
            type: "POST",
            url: "/wp-admin/admin-ajax.php",
            data: jQuery("#newsletter-settings").serialize() + "&action=speakApiNewsletterUpdate",
            dataType: "json",
            success: function (data) {

                if ('success' == data.result)
                {
                    jQuery('#check-api-form-msg').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
                    jQuery(btn).attr('value', 'Save Settings');
                    jQuery('#check-api-form-msg').html(data.msg[0]);
                }

                if ('error' == data.result)
                {
                    jQuery('#check-api-form-msg').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
                    jQuery('#loader-form').css('display', 'none');
                    jQuery(btn).attr('value', 'Save Settings');
                    jQuery('#check-api-form-msg').html(data.msg[0]);
                }

            }
        });
        return false;
    });

    /*........................Book Download update..........................................*/
    jQuery('body').on('click', '#spk-bd-btn', function (e) {

        jQuery('#spk-bd-btn').attr('value', 'Loading....');
        jQuery('#check-api-form-msg').removeClass('alert-success');
        jQuery('#check-api-form-msg').removeClass('alert-danger');
        jQuery.ajax({
            type: "POST",
            url: "/wp-admin/admin-ajax.php",
            data: jQuery("#speak-bd-form").serialize() + "&action=speakApiBookUpdate",
            dataType: "json",
            success: function (data) {

                if ('success' == data.result)
                {
                    jQuery('#check-api-form-msg').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
                    jQuery('#spk-bd-btn').attr('value', 'Save');
                    jQuery('#check-api-form-msg').html(data.msg[0]);
                    jQuery('html, body').animate({scrollTop: jQuery('#book-scrol-speak').offset().top}, 'slow');
                    window.setTimeout(function () {
                        location.reload()
                    }, 3000)
                }

                if ('error' == data.result)
                {
                    jQuery('#check-api-form-msg').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
                    jQuery('#spk-bd-btn').attr('value', 'Save');
                    jQuery('#check-api-form-msg').html(data.msg[0]);
                }

            }
        });
        return false;
    });
    /*.........................................File upload Script..................................*/
    var upload_image_button = false;
    jQuery(document).ready(function () {
        jQuery('.upload_image_button').click(function () {
            upload_image_button = true;
            formfieldID = jQuery(this).prev().attr("id");
            formfield = jQuery("#" + formfieldID).attr('name');
            tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
            if (upload_image_button == true) {

                var oldFunc = window.send_to_editor;
                window.send_to_editor = function (html) {

                    imgurl = jQuery('img', html).attr('src');
                    jQuery("#" + formfieldID).val(imgurl);
                    tb_remove();
                    window.send_to_editor = oldFunc;
                }
            }
            upload_image_button = false;
        });
    });
    /*.........................................Email Alerts update..........................*/
    jQuery('body').on('click', '#cbform-email-btn', function (e) {

        jQuery('#check-api-form-msg').removeClass('alert-success');
        jQuery('#check-api-form-msg').removeClass('alert-danger');
        //jQuery('#cbform-email-btn').attr('disabled', true);

        jQuery.ajax({
            type: "POST",
            url: "/wp-admin/admin-ajax.php",
            data: jQuery("#spk-api-cbform").serialize() + "&action=speakApiCBformUpdate",
            dataType: "json",
            success: function (data) {

                if ('success' == data.result)
                {
                    jQuery('#check-api-form-msg').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
                    jQuery('#check-api-form-msg').html(data.msg);
                    window.setTimeout(function () {
                        location.reload()
                    }, 3000)
                }

                if ('error' == data.result)
                {
                    jQuery('#check-api-form-msg').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
                    jQuery('#loader-form').css('display', 'none');
                    jQuery('#check-api-form-msg').html(data.msg);
                }

            }
        });
        return false;
    });
});
jQuery(function ($) {
    /*
     * Select/Upload image(s) event
     */
    $('body').on('click', '.spk_upload_image', function (e) {
        e.preventDefault();

        var button = $(this),
                custom_uploader = wp.media({
                    title: 'Insert image',
                    library: {
                        // uncomment the next line if you want to attach image to the current post
                        // uploadedTo : wp.media.view.settings.post.id, 
                        type: 'image'
                    },
                    button: {
                        text: 'Use this image' // button label text
                    },
                    multiple: false // for multiple image selection set to true
                }).on('select', function () { // it also has "open" and "close" events 
            var attachment = custom_uploader.state().get('selection').first().toJSON();
            $(button).removeClass('button').html('<img class="true_pre_image" src="' + attachment.url + '" style="max-width:95%;display:block;" />').next().val(attachment.url).next().show();
            /* if you sen multiple to true, here is some code for getting the image IDs
             var attachments = frame.state().get('selection'),
             attachment_ids = new Array(),
             i = 0;
             attachments.each(function(attachment) {
             attachment_ids[i] = attachment['id'];
             console.log( attachment );
             i++;
             });
             */
        })
                .open();
    });

    /*
     * Remove image event
     */
    $('body').on('click', '.spk_remove_image', function () {
        $(this).hide().prev().val('').prev().addClass('button').html('Upload image');
        return false;
    });

});