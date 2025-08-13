document.addEventListener("DOMContentLoaded", function (e) {
    $('body').on('click', '#cformsubmit', function (e) {
        $('#cform-form-msg').removeClass('alert-success');
        $('#cform-form-msg').removeClass('alert-danger');
        $('#cformsubmit').attr('disabled', 'disabled');
        $('#cform #ajax-loader-cform').css('display', 'block');
        $.ajax({
            type: "POST",
            url: "/wp-admin/admin-ajax.php",
            data: $("#cform").serialize() + "&action=speakApiSendmAilCfrom",
            dataType: "json",
            success: function (data) {
                if ('success' == data.result) {
                    $('#cform-form-msg').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
                    $('.popup-form').html(data.msg[0]);
                    $('#cformsubmit').removeAttr('disabled');
                    $('#cform #ajax-loader-cform').css('display', 'none');
                    window.setTimeout(function () {
                        window.location.href = "/thank-you"
                    }, 1000)
                }
                if ('error' == data.result) {
                    $('#cform-form-msg').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
                    $('#cform-form-msg').html(data.msg[0]);
                    $('#cformsubmit').removeAttr('disabled');
                    $('#cform #ajax-loader-cform').css('display', 'none');
                    $('html,body').animate({
                        scrollTop: $("#cform-form-msg").offset().top
                    }, 'slow')
                }
            }
        });
        return false
    });
    $('body').on('click', '#cformsubmit_download', function (e) {
        $('#cform-form-msg2').removeClass('alert-success');
        $('#cform-form-msg2').removeClass('alert-danger');
        $('#cformsubmit_download').attr('disabled', 'disabled');
        $('#cform_download #ajax-loader-cform').css('display', 'block');
        $.ajax({
            type: "POST",
            url: "/wp-admin/admin-ajax.php",
            data: $("#cform_download").serialize() + "&action=speakApiSendmAilCfromdownload",
            dataType: "json",
            success: function (data) {
                if ('success' == data.result) {
                    $('#cform-form-msg2').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
                    $('.popup-form').html(data.msg[0]);
                    $('#cformsubmit_download').removeAttr('disabled');
                    $('#cform_download #ajax-loader-cform').css('display', 'none');
                    window.setTimeout(function () {
                        window.location.href = "/estate-planning-massachusetts-downloads"
                    }, 1000)
                }
                if ('error' == data.result) {
                    $('#cform-form-msg2').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
                    $('#cform-form-msg2').html(data.msg[0]);
                    $('#cformsubmit_download').removeAttr('disabled');
                    $('#cform_download #ajax-loader-cform').css('display', 'none');
                    $('html,body').animate({
                        scrollTop: $("#cform-form-msg2").offset().top
                    }, 'slow')
                }
            }
        });
        return false
    });

    $('body').on('click', '#cformsubmit_seminar', function (e) {
        $('#cform-form-msg3').removeClass('alert-success');
        $('#cform-form-msg3').removeClass('alert-danger');
        $('#cformsubmit_seminar').attr('disabled', 'disabled');
        $('#cform_semnar #ajax-loader-cform').css('display', 'block');
        $.ajax({
            type: "POST",
            url: "/wp-admin/admin-ajax.php",
            data: $("#cform_semnar").serialize() + "&action=speakApiSendmAilCfromseminar",
            dataType: "json",
            success: function (data) {
                if ('success' == data.result) {
                    $('#cform-form-msg3').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
                    $('.popup-form').html(data.msg[0]);
                    $('#cformsubmit_seminar').removeAttr('disabled');
                    $('#cform_semnar #ajax-loader-cform').css('display', 'none');
                    window.setTimeout(function () {
                        window.location.href = "/seminar-thank-you"
                    }, 1000)
                }
                if ('error' == data.result) {
                    $('#cform-form-msg3').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
                    $('#cform-form-msg3').html(data.msg[0]);
                    $('#cformsubmit_seminar').removeAttr('disabled');
                    $('#cform_semnar #ajax-loader-cform').css('display', 'none');
                    $('html,body').animate({
                        scrollTop: $("#cform-form-msg3").offset().top
                    }, 'slow')
                }
            }
        });
        return false
    });


    $('body').on('click', '#report_submit', function (e) {
        $('.results').removeClass('alert-success');
        $('.results').removeClass('alert-danger');
        $(this).attr('disabled', 'disabled');
        $('#report_form #ajax-loader-cform').css('display', 'block');
        $.ajax({
            type: "POST",
            url: "/wp-admin/admin-ajax.php",
            data: $("#report_form").serialize() + "&action=speakApiSendmAilCfromAlt",
            dataType: "json",
            success: function (data) {
                if ('success' == data.result) {
                    $('.results').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
                    $('#report_submit').removeAttr('disabled');
                    $('#report_form #ajax-loader-cform').css('display', 'none');
                    window.setTimeout(function () {
                        window.location.href = "/thank-you"
                    }, 1000)
                }
                if ('error' == data.result) {
                    $('.results').css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
                    $('.results').html(data.msg[0]);
                    $('#report_submit').removeAttr('disabled');
                    $('#report_form #ajax-loader-cform').css('display', 'none');
                    $('html,body').animate({
                        scrollTop: $(".results").offset().top
                    }, 'slow')
                }
            }
        });
        return false
    });
    $('body').on('click', '#newsletter_form_5646523 button', function (e) {
        e.preventDefault();
        var _status_wrap = $('#nform_vaidator');
        var _trigerer = $(this);
        var btn_text = _trigerer.html();
        _status_wrap.removeClass('alert-success');
        _status_wrap.removeClass('alert-danger');
        _trigerer.html('Working...');
        _trigerer.attr('disabled', 'disabled');
        $.ajax({
            type: "POST",
            url: "/wp-admin/admin-ajax.php",
            data: $("#newsletter_form_5646523").serialize() + "&action=newsletterSubsciption",
            dataType: "json",
            success: function (data) {
                if ('success' == data.result) {
                    _status_wrap.css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-success')
                }
                if ('error' == data.result) {
                    _status_wrap.css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger')
                }
                _status_wrap.html(data.msg[0]);
                _trigerer.removeAttr('disabled');
                _trigerer.html(btn_text)
            }
        });
        return false
    });
});
