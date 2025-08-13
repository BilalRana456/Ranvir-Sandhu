<?php
get_header();
$breadcrum = get_post_meta($post->ID, 'spk_hide_bread', 'true');
?>
<div class="attorney-profile-outer-wrap pt-5 pt-lg-6">
    <div class="container">
        <div class="entry-content">
            <div class="row">
                <div class="col-lg-4 left">
                    <div class="responsive-atty-top-section-wrap">

                        <div itemscope class="text-center pt-0">
                            <h2 itemprop="name" id="attorney_name" class="m-0 pb-2 text-center ThemeHeadingColor"><?php echo rwmb_meta('spk_attornet_profile_hd'); ?></h2>
                            <?php
                            $imgID = get_post_thumbnail_id($post->ID);
                            $img = (wp_get_attachment_image_src($imgID, 'full', false, ''));
                            $imgAlt = get_post_meta($imgID, '_wp_attachment_image_alt', true);
                            ?>
                            <img class="w-100 wow zoomIn" src="<?php echo $img[0]; ?>"alt="<?php echo $imgAlt; ?>" />
                            
                        </div>
                        <div class="row review-section-top mb-3 mb-lg-0">
                            <div class="col text-left">
                                <span class="m-0 p-0 fw-bold black-col"><?php echo rwmb_meta('spk_attornet_profile_image_btm_txt'); ?></span>
                            </div>
                            <div class="col text-end">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                            </div>
                        </div>
                    </div>
                    <!------------------------------------------------------------->
                    <div class="tabs-wrap-atty-profile-outer mt-3 d-none d-lg-block wow fadeInUp">
                        <ul class="nav nav-tabs tabs-atty-profile m-0 p-0" id="myTab" role="tablist">
                            <?php if (empty(rwmb_meta('spk_attornet_profile_tab1_hide'))) { ?>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link <?php echo empty(rwmb_meta('spk_attornet_profile_tab1_hide')) ? "active" : ""; ?>" data-bs-toggle="tab" href="#Tab1AttyP" role="tab" aria-selected="true"><?php echo rwmb_meta('spk_attornet_profile_tab1_hd'); ?></a>
                                </li>
                            <?php } ?>
                            <?php if (empty(rwmb_meta('spk_attornet_profile_tab2_hide'))) { ?>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link <?php echo empty(rwmb_meta('spk_attornet_profile_tab1_hide')) ? "" : "active"; ?>" data-bs-toggle="tab" href="#Tab2AttyP" role="tab" aria-selected="true"><?php echo rwmb_meta('spk_attornet_profile_tab2_hd'); ?></a>
                                </li>
                            <?php } ?>
                        </ul>
                        <div class="tab-content content-atty-profile m-0">
                            <?php if (empty(rwmb_meta('spk_attornet_profile_tab1_hide'))) { ?>
                                <div class="tab-pane fade <?php echo empty(rwmb_meta('spk_attornet_profile_tab1_hide')) ? "show active" : ""; ?>" id="Tab1AttyP" role="tabpanel">
                                    <?php echo rwmb_meta('spk_attornet_profile_tab1_txt'); ?>
                                    <div class="clearfix"></div>
                                    <div class="text-end"><a href="<?php echo rwmb_meta('spk_attornet_profile_tab1_more_btn_link'); ?>" class="tab-readmore ThemeHeadingColor"><?php echo rwmb_meta('spk_attornet_profile_tab1_more_btn_txt'); ?></a></div>
                                    <div class="clearfix"></div>
                                    <div class="row pt-3">
                                        <div class="col text-start font-weight-bold black-col"><?php echo rwmb_meta('spk_attornet_profile_tab1_reviews'); ?></div>
                                        <div class="col text-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                                        </div>
                                    </div>
                                </div>
                            <?php } ?>
                            <?php if (empty(rwmb_meta('spk_attornet_profile_tab2_hide'))) { ?>
                                <div class="tab-pane fade <?php echo empty(rwmb_meta('spk_attornet_profile_tab1_hide')) ? "" : "show active"; ?>" id="Tab2AttyP" role="tabpanel">
                                    <?php echo rwmb_meta('spk_attornet_profile_tab2_txt'); ?>
                                    <div class="clearfix"></div>
                                    <div class="text-end"><a href="<?php echo rwmb_meta('spk_attornet_profile_tab2_more_btn_link'); ?>" class="tab-readmore ThemeHeadingColor"><?php echo rwmb_meta('spk_attornet_profile_tab2_more_btn_txt'); ?></a></div>
                                    <div class="clearfix"></div>
                                    <div class="row pt-3">
                                        <div class="col text-left font-weight-bold black-col"><?php echo rwmb_meta('spk_attornet_profile_tab2_reviews'); ?></div>
                                        <div class="col text-end">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                                        </div>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                        <!-- <?php if (empty(rwmb_meta('spk_single_box_hinde_section'))) { ?>
                            <div class="single_box">
                                <?php foreach (rwmb_meta('spk_single_box_group') as $value) { ?>
                                    <h2><?php echo $value['spk_single_heading']; ?></h2>
                                    <div class="single_box_content">
                                        <?php echo $value['spk_single_content']; ?>
                                    </div> 
                                <?php } ?>
                            </div>
                        <?php } ?> -->
                    </div>
                </div>
                <div class="col-lg-8 right attr_rig wow fadeInUp text-block">
                    <?php
                    while (have_posts()) : the_post();
                        the_content();
                    endwhile;
                    ?>
                    <!------------------------------------------------------------->
                    <div class="tabs-wrap-atty-profile-outer mt-4 d-lg-none wow fadeInUp">
                        <ul class="nav tabs-atty-profile m-0 p-0" role="tablist">
                            <?php if (empty(rwmb_meta('spk_attornet_profile_tab1_hide'))) { ?>
                                <li class="nav-item">
                                    <a class="nav-link <?php echo empty(rwmb_meta('spk_attornet_profile_tab1_hide')) ? "active" : ""; ?>" data-bs-toggle="tab" href="#Tab1AttyP1" role="tab" aria-selected="true"><?php echo rwmb_meta('spk_attornet_profile_tab1_hd'); ?></a>
                                </li>
                            <?php } ?>
                            <?php if (empty(rwmb_meta('spk_attornet_profile_tab2_hide'))) { ?>
                                <li class="nav-item">
                                    <a class="nav-link <?php echo empty(rwmb_meta('spk_attornet_profile_tab1_hide')) ? "" : "active"; ?>" data-bs-toggle="tab" href="#Tab2AttyP1" role="tab" aria-selected="true"><?php echo rwmb_meta('spk_attornet_profile_tab2_hd'); ?></a>
                                </li>
                            <?php } ?>
                        </ul>
                        <div class="tab-content content-atty-profile m-0">
                            <?php if (empty(rwmb_meta('spk_attornet_profile_tab1_hide'))) { ?>
                                <div class="tab-pane fade <?php echo empty(rwmb_meta('spk_attornet_profile_tab1_hide')) ? "show active" : ""; ?>" id="Tab1AttyP1" role="tabpanel">
                                    <?php echo rwmb_meta('spk_attornet_profile_tab1_txt'); ?>
                                    <div class="clearfix"></div>
                                    <div class="text-end"><a href="<?php echo rwmb_meta('spk_attornet_profile_tab1_more_btn_link'); ?>" class="tab-readmore ThemeHeadingColor"><?php echo rwmb_meta('spk_attornet_profile_tab1_more_btn_txt'); ?></a></div>
                                    <div class="clearfix"></div>
                                    <div class="row pt-3">
                                        <div class="col text-left font-weight-bold black-col"><?php echo rwmb_meta('spk_attornet_profile_tab1_reviews'); ?></div>
                                        <div class="col text-end">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                                        </div>
                                    </div>
                                </div>
                            <?php } ?>
                            <?php if (empty(rwmb_meta('spk_attornet_profile_tab2_hide'))) { ?>
                                <div class="tab-pane fade <?php echo empty(rwmb_meta('spk_attornet_profile_tab1_hide')) ? "" : "show active"; ?>" id="Tab2AttyP1" role="tabpanel">
                                    <?php echo rwmb_meta('spk_attornet_profile_tab2_txt'); ?>
                                    <div class="clearfix"></div>
                                    <div class="text-end"><a href="<?php echo rwmb_meta('spk_attornet_profile_tab2_more_btn_link'); ?>" class="tab-readmore ThemeHeadingColor"><?php echo rwmb_meta('spk_attornet_profile_tab2_more_btn_txt'); ?></a></div>
                                    <div class="clearfix"></div>
                                    <div class="row pt-3">
                                        <div class="col text-left font-weight-bold black-col"><?php echo rwmb_meta('spk_attornet_profile_tab2_reviews'); ?></div>
                                        <div class="col text-end">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                                        </div>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                        <!-- <?php if (empty(rwmb_meta('spk_single_box_hinde_section'))) { ?>
                            <div class="single_box">
                                <?php foreach (rwmb_meta('spk_single_box_group') as $value) { ?>
                                    <h2><?php echo $value['spk_single_heading']; ?></h2>
                                    <div class="single_box_content">
                                        <?php echo $value['spk_single_content']; ?>
                                    </div> 
                                <?php } ?>
                            </div>
                        <?php } ?> -->
                    </div>
                </div>
            </div>
           
        </div>
        <?php if ($breadcrum !== "1") { ?>
            <div class="breadcrumb-wrap-outer py-4">
                <?php echo SPKBreadcrumbs(); ?>
            </div>
        <?php } else { ?>
            <div class="breadcrumb-wrap-outer pt-3 pb-3">
                <?php echo rwmb_meta('spk_txt_bread'); ?>
            </div>
        <?php } ?>
    </div>
</div>
<?php get_footer(); ?>

