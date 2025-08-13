jQuery(document).ready(function () {
    jQuery('head').append('<?php if( is_front_page() ){?><link type="text/css" rel="stylesheet" href="http://attorney-chat.com/design/defaulttheme/css/livechathead.css"><?php } ?>');
    
    jQuery('head').append('<link type="text/css" rel="stylesheet" href="http://attorney-chat.com/design/defaulttheme/css/livechat.css">');
    jQuery('head').append('<link type="text/css" rel="stylesheet" href="http://attorney-chat.com/design/defaulttheme/css/bootstrap.css">');
    jQuery('head').append('<link type="text/css" rel="stylesheet" href="http://attorney-chat.com/design/defaulttheme/css/bootstrat-responsivee.css">');
    jQuery('head').append('<script type="text/javascript" src="http://attorney-chat.com/design/defaulttheme/js/bootstrap.min.js"></script>');
    jQuery('body').append('<div class="front-modall" style="display: none;"><div class="modal fade zain" id="myModall"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><button type="button" class="bttn-green" onclick="return lh_inst.lh_openchatWindow();" data-dismiss="modal" data-target="#myModal">Yes</button><button type="button" class="bttn-red" data-dismiss="modal">No</button></div></div></div></div></div>');
//jQuery('.footer-top-div').after('<script src="http://attorney-chat.com/design/defaulttheme/js/jquery.cookie.js" type="text/javascript"></script>');



});
//if (location.pathname == '/') {
    jQuery(function (jQuery) {
//        jQuery.cookie('chat', 'value');
        if (jQuery.cookie('chat') != 'onn') {
            setTimeout(function () {
                jQuery('.front-modall').show();
                jQuery('#myModall').modal('show');

                jQuery(".chat-box").removeClass('hide');
            }, 10 * 1000);
            jQuery.cookie('chat', 'onn', {expires: 1});
        } else {

        }
    });
//}
    
var LHCChatOptions = {};
LHCChatOptions.opt = {widget_height:390,widget_width:540,popup_height:390,popup_width:540};
(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
var refferer = (document.referrer) ? encodeURIComponent(document.referrer.substr(document.referrer.indexOf('://')+1)) : '';
var location  = (document.location) ? encodeURIComponent(window.location.href.substring(window.location.protocol.length)) : '';
po.src = '//attorney-chat.com/index.php/chat/getstatus/(position)/bottom_right/(ma)/br/(top)/350/(units)/pixels/(leaveamessage)/true?r='+refferer+'&l='+location;
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();