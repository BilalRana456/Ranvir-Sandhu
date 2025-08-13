<?php
function RelatedArticalsVideosBox() {
    if (count(rwmb_meta('spk_videos_related_videos_box')) > 0):
        $RData = '<!-----------------------Related Videos Section Code-------------------------->';
        $RData.= '<div class="related-videos-wrap mt-4 mb-0">';
        $RData.= '<h5 class="mb-3 mt-0" id="WPCustomizerRVPage">' . get_theme_mod('theme_related_videos_hd') . '</h5>';
        foreach (rwmb_meta('spk_videos_related_videos_box') as $value) {
            $RData.= '<div class="video-list-title px-2 py-2 mb-3 rounded">
                    <a class="d-block" href="' . get_the_permalink($value) . '">' . get_the_title($value) . '</a>
                </div>';
        }
        $RData.= '</div>';
    endif;
    return $RData;
}


/* .........................Related Articals/Topics Box Code.............................. */

function RelatedArticalsTopicsBox() {
    $related_article = rwmb_meta('spk_related_articals_box');
    $related_topic = rwmb_meta('spk_related_topics_box');
    if ($related_article[0] > 0 || $related_topic[0] > 0) {
        $RArticalsClass = $related_article[0] > 0 && $related_topic[0] == 0 ? "col-sm-12" : "col-sm-6";
        $RTopicsClass = $related_topic[0] > 0 && $related_article[0] == 0 ? "col-sm-12" : "col-sm-6";
        $RData = '<!-----------------------Related Articles Section Code-------------------------->';
        $RData.= '<div class="related-and-topics-box-outer-wrap py-3 px-3 d-block my-3 w-100">';
        $RData.= '<div class="row">';
        if ($related_article[0] > 0) {
            $RData.= '<div class="' . $RArticalsClass . '">';
            $RData.= '<h5 class="m-0 p-0" id="WPCustomizerRAPage">' . get_theme_mod('theme_related_rarticals_page_hd') . '</h5>';
            $RData.= '<ul style="padding: 0 19px;" class="mx-0 mb-0 mt-3 py-0">';
            foreach (rwmb_meta('spk_related_articals_box') as $value) {
                $RData.= '<li><a href="' . get_the_permalink($value) . '">' . get_the_title($value) . '</a></li>';
            }
            $RData.= '</ul>';
            $RData.= '</div>';
        }
        if ($related_topic[0] > 0) {
            $RData.= '<div class="' . $RTopicsClass . ' mt-3 mt-sm-0">';
            $RData.= '<h5 class="m-0 p-0" id="WPCustomizerRTPage">' . get_theme_mod('theme_related_topics_page_hd') . '</h5>';
            $RData.= '<ul style="padding: 0 19px;" class="mx-0 mb-0 mt-3 py-0">';
            foreach (rwmb_meta('spk_related_topics_box') as $value) {
                $RData.= '<li><a href="' . get_the_permalink($value) . '">' . get_the_title($value) . '</a></li>';
            }
            $RData.= '</ul>';
            $RData.= '</div>';
        }
        $RData.= '</div>';
        $RData.= '</div>';
        return $RData;
    }
}

?>