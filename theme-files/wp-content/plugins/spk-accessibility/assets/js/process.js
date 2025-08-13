(function ($) {
    'use strict';
    $('body').on('click', '#spkac_save', function (e) {
        var _btn = $(this), _alerts_wrp = $('#spkac_alerts');
        var btn_text = $(this).text();

        _btn.text(spkac_object_vars.processing);
        _alerts_wrp.text('');
        _alerts_wrp.removeClass('alert-success');
        _alerts_wrp.removeClass('alert-danger');

        $.ajax({
            type: "POST",
            url: spkac_object_vars.endpoint,
            data: $("#spkac-setting-form").serialize() + spkac_object_vars.admin_settings,
            dataType: "json",
            success: function (data) {
                _btn.text(btn_text);
                if ('success' == data.flag)
                {
                    _alerts_wrp.css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
                    _alerts_wrp.html(data.alert_message);

                }

                if ('error' == data.flag)
                {
                    _alerts_wrp.css('visibility', 'visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
                    _alerts_wrp.html(data.alert_message);
                }

            }
        });
        return false;
    });

})(jQuery);
