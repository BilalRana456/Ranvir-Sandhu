<?php
/* ....................spk_video................... */
function spk_video()
{ ?>
    <?php if (!empty(rwmb_meta('spk_youtube_code'))) : ?>
        <div class="row">
            <div class="col-sm-12">
                <div class="home_video">
                    <?php
                    $youtube_id = rwmb_meta('spk_youtube_code');
                    $youtube = 'http://i.ytimg.com/vi/' . $youtube_id . '/hqdefault.jpg';
                    // $img_encoded = file_get_contents($youtube);
                    // $youtube = 'data:image/' . $type . ';base64,' . base64_encode($img_encoded);
                    ?>
                    <div class="youtube" id="<?php echo $youtube_id ?>" style="background-image:url(<?php echo $youtube ?>)"></div>
                </div>
            </div>
        </div>
    <?php endif; ?>
    <div class="clearfix"></div>
    <?php if (!empty(rwmb_meta('spk_vimeo_code'))) { ?>
        <div class="row">
            <div class="col-sm-12">
                <div class="home_video">
                    <?php
                    $vimeo_id_code = rwmb_meta('spk_vimeo_code');
                    $image = 'https://i.vimeocdn.com/video/' . $vimeo_id_code;
                    $imgid = $vimeo_id_code;
                    $data = json_decode(file_get_contents('http://vimeo.com/api/oembed.json?url=//player.vimeo.com/video/' . $vimeo_id_code . '&width=1920&height=1080'));
                    $image = $data->thumbnail_url;
                    // $img_encoded = file_get_contents($image);
                    // $image_url = 'data:image/png' . $type . ';base64,' . base64_encode($img_encoded);
                    ?>
                    <div class="vimeo_section vimeo" id="<?php echo $vimeo_id_code; ?>" class="vimeo" style="background-image:url('<?php echo $image; ?> ');"></div>
                </div>
            </div>
        </div>
    <?php } ?>
    <div class="clearfix"></div>
<?php } ?>

<?php
/* ....................spk_video inner................... */
function spk_video_inner()
{ ?>
    <?php if (!empty(rwmb_meta('spk_videos_youtube_code'))) : ?>
        <div class="row">
            <div class="col-sm-12">
                <div class="inner_video">
                    <?php
                    $youtube_id = rwmb_meta('spk_videos_youtube_code');
                    $youtube = 'http://i.ytimg.com/vi/' . $youtube_id . '/hqdefault.jpg';
                    // $img_encoded = file_get_contents($youtube);
                    // $youtube = 'data:image/' . $type . ';base64,' . base64_encode($img_encoded);
                    ?>
                    <div class="youtube" id="<?php echo $youtube_id ?>" style="background-image:url(<?php echo $youtube ?>)"></div>
                </div>
            </div>
        </div>
    <?php endif; ?>
    <div class="clearfix"></div>
    <?php if (!empty(rwmb_meta('spk_vimeo_id_code'))) { ?>
        <div class="row">
            <div class="col-sm-12">
                <div class="inner_video">
                    <?php
                    $vimeo_id_code = rwmb_meta('spk_vimeo_id_code');
                    $image = 'https://i.vimeocdn.com/video/' . $vimeo_id_code;
                    $imgid = $vimeo_id_code;
                    $data = json_decode(file_get_contents('http://vimeo.com/api/oembed.json?url=//player.vimeo.com/video/' . $vimeo_id_code . '&width=1920&height=1080'));
                    $image = $data->thumbnail_url;
                    // $img_encoded = file_get_contents($image);
                    // $image_url = 'data:image/png' . $type . ';base64,' . base64_encode($img_encoded);
                    ?>
                    <div class="vimeo_section vimeo" id="<?php echo $vimeo_id_code; ?>" class="vimeo" style="background-image:url('<?php echo $image; ?> ');"></div>
                </div>
            </div>
        </div>
    <?php } ?>
    <div class="clearfix"></div>
<?php } ?>



<?php
/* ....................SPK Excerpt................... */
function SPK_Excerpt($limit)
{
    return wp_trim_words(get_the_content(), $limit);
}
?>
<?php
/* ....................Post Navigation................... */
function spk_post_nav()
{
    $previous = (is_attachment()) ? get_post(get_post()->post_parent) : get_adjacent_post(false, '', true);
    $next = get_adjacent_post(false, '', false);
    if (!$next && !$previous) {
        return;
    }
?>
    <div class="navigation-blog-detail-page">
        <div class="row">
            <?php
            previous_post_link('<div class="col text-start d-block">%link', __('<i class="fa fa-chevron-left" aria-hidden="true"></i> Previous Post</div>', 'spk'));
            next_post_link('<div class="col text-end d-block">%link', __('Next Post <i class="fa fa-chevron-right" aria-hidden="true"></i></div>', 'spk'));
            ?>
        </div>
    </div>
<?php
}
?>

<?php
/* ....................Additional Menu................... */

// OPTIONAL: ADD MORE NAV MENUS
// register_nav_menus( array( 'third' => __( 'Third Menu', 'picostrap' ), 'fourth' => __( 'Fourth Menu', 'picostrap' ), 'fifth' => __( 'Fifth Menu', 'picostrap' ), ) );
// THEN USE SHORTCODE:  [lc_nav_menu theme_location="third" container_class="" container_id="" menu_class="navbar-nav"]
register_nav_menus(array('footer' => __('Footer Menu', 'picostrap')));

?>

<?php
/* ....................Year Shortcode................... */
function get_cYear($atts)
{
    $return = date('Y');
    return $return;
}

add_shortcode('current_y', 'get_cYear');

?>


<?php
  
/* -------------------------------------- Home page Map------------------------------------- */
    function home_map() {
        ?>
        <div id="my-fast-map" data-iframe-width="100%" data-iframe-height="430" data-iframe-src="<?php echo get_theme_mod('theme_footer_map_iframe'); ?>">
        <a title="Click to activate map"><img src="<?php echo get_theme_mod('theme_footer_map_image'); ?>" alt="Click to activate map"></a>
        </div>
    <?php }?>

<?php 

/* .........................Faqs Show.............................. */

function GetFaqs() {
    $i = 1;
    $h = 1;
    $args = array(
        'post_type' => 'faqs',
        'orderby' => 'date',
        'order' => 'ASC',
        'posts_per_page' => -1
    );
    $RData = '';
    $the_query = new WP_Query($args);
    if ($the_query->have_posts()) : while ($the_query->have_posts()) : $the_query->the_post();
            $RData.='<div class="accordion accordion-cat" id="accordion-kusi">
                        <div class="accordion-item mt-2">
                    <div lass="accordion-header" id="heading'. $h .'">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-kusi'. $i .'" aria-expanded="true" aria-controls="collapse-kusi'. $i .'">
                            <span><b>' . "Q: </b>" . get_the_title() . '</span>
                        </button>
                    </div>
                    <div id="collapse-kusi'. $i .'" class="accordion-collapse collapse " aria-labelledby="heading'. $h .'" data-bs-parent="#accordion-kusi">
                        <div class="accordion-body">
                            ' . get_the_content() . '
                        </div>
                    </div>
                    </div>
                </div>';
            $i++;
            $h++;
        endwhile;
    endif;
    return $RData;
}

?>

<?php 

/* .........................Faqs Show By Category Code.............................. */

function GetFaqsByCAT() {
    $i = 1;
    $h = 1;
    $RData = '';
    if (have_posts()) : while (have_posts()) : the_post();
            $RData.='<div class="accordion accordion-cat" id="accordion-kusi">
                        <div class="accordion-item mt-2">
                    <div lass="accordion-header" id="heading'. $h .'">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-kusi'. $i .'" aria-expanded="true" aria-controls="collapse-kusi'. $i .'">
                            <span><b>' . "Q: </b>" . get_the_title() . '</span>
                        </button>
                    </div>
                    <div id="collapse-kusi'. $i .'" class="accordion-collapse collapse" aria-labelledby="heading'. $h .'" data-bs-parent="#accordion-kusi">
                        <div class="accordion-body">
                            ' . get_the_content() . '
                        </div>
                    </div>
                    </div>
                </div>';
            $i++;
            $h++;
        endwhile;
    endif;
    return $RData;
}

?>