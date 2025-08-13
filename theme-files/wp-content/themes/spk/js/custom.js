// to enable the enqueue of this optional JS file, 
// you'll have to uncomment a row in the functions.php file
// just read the comments in there mate

console.log("Custom js file loaded");

//add here your own js code. Vanilla JS welcome.
/*-----------------------Desktop menu--------------------------*/
    $('body').on('click', '.redriect-link a', function (e) {
        var get_link = $(this).attr('href');
         window.location.href = get_link;
    });

    /*-----------------------Responsive menu--------------------------*/
    $(document).ready(function ($) {
    $(".res-menu .menu-item-has-children ul").hide();
    $('.res-menu .menu-item-has-children').append('<span>▼</span>');
    $('.res-menu .menu-item-has-children > span').click(function(e) {
    e.preventDefault();     
    $(this).parent().find(' > ul').toggle('ul');
    console.log($(this).parent());
         return false;
    });
     });

/*......................Blog Category Drop down Js.....................*/
$('body').on('change', '#cat', function (e) {
    var CheckID = $(this).val();
    if (CheckID == "-1") {
        return false
    } else {
        $(this).closest('form').trigger('submit');
    }
});

/*..............Youtube..............*/
$(function () {
    $(".youtube").each(function () {
        $(this).append($('<div/>', { 'class': 'play' }));
        $(document).delegate('#' + this.id, 'click', function () {
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?rel=0&autoplay=1";
            if ($(this).data('params'))
                iframe_url += '&' + $(this).data('params');
            var iframe = $('<iframe/>', { 'frameborder': '0', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })
            $(this).replaceWith(iframe);
        });
    });
});

/*..............Vimeo..............*/
$(function () {
    $(".vimeo").each(function () {
        $(this).append($('<div/>', { 'class': 'vimeoplay' }));
        $(document).delegate('#' + this.id, 'click', function () {
            var iframe_url = "//player.vimeo.com/video/" + this.id + "/?autoplay=1";
            if ($(this).data('params'))
                iframe_url += '&' + $(this).data('params');
            var iframe = $('<iframe/>', { 'frameborder': '0', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })
            $(this).replaceWith(iframe);
        });
    });
});

/*............................Map Mouse Event............................*/
$('.mapMarker iframe').addClass('scrolloff'); // set the pointer events to none on doc ready
$('.mapMarker').on('click', function () {
    $('.mapMarker iframe').removeClass('scrolloff'); // set the pointer events true on click
});
$(".mapMarker").mouseleave(function () {
    $('.mapMarker iframe').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
});
$(function ($) {
    $('#my-fast-map a').on('click', function (e) {
        e.preventDefault();
        map = $(this).parent();
        iframe_src = map.data('iframe-src');
        iframe_width = map.data('iframe-width');
        iframe_height = map.data('iframe-height');
        map.html('<iframe src="' + iframe_src + '" width="' + iframe_width + '" height="' + iframe_height + '" allowfullscreen></iframe>');
        return false;
    });
});