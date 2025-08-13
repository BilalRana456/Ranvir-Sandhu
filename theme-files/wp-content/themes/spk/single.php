<?php
get_header();
$breadcrum = get_post_meta($post->ID, 'spk_hide_bread', 'true');
?>
<div class="inner-page-outer-wrap pt-4">
    <div class="container">
        <?php wp_reset_query(); ?>
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <div class="clearfix"></div>
                <div class="blog-summary-meta d-flex justify-content-left mb-2 px-0">
                        <ul class="p-0 m-0">
                            <?php if (get_theme_mod('theme_blog_user_meta_admin_name')): ?>
                                <li class="p-0 my-0 mr-1 d-inline-block"><i class="fa fa-user"></i> By: <span><?php echo get_the_author(); ?></span></li>
                                <?php
                            endif;
                            if (get_theme_mod('theme_blog_user_meta_publish_date')):
                                ?>
                                <li class="p-0 my-0 d-inline-block"><i class="fa fa-calendar"></i> Published: <span><?php echo get_the_date(); ?></span></li>
                            <?php endif; ?>
                        </ul>
                    </div>
                <div class="clearfix"></div>
                <?php
                $imgID = get_post_thumbnail_id($wp_query->ID);
                $img = wp_get_attachment_image_src($imgID, 'full', false, '');
                $imgAlt = get_post_meta($imgID, '_wp_attachment_image_alt', true);
                ?>

                <?php if ($imgID) { ?>
                    <div class="custom_right">
                        <img class = "blog-summary-img alignright" src = "<?php echo $img[0]; ?>"alt = "<?php echo $imgAlt; ?>" />
                    </div>
                <?php } ?>
                <div class="custom_left">
                    <?php the_content(); ?>
                </div>
            <?php endwhile; ?>
        <?php endif; ?>

        <div class="clearfix"></div>
        <?php spk_post_nav(); ?>
        <div class="clearfix"></div>
        <div class="blog-detail-share-box py-2 mt-3 border-top border-bottom border-primary">
            <div class="row">
                <div class="col-sm-6 left align-self-center text-center text-sm-left">
                    <h6 class="text-start text-primary fw-bold m-0"><?php echo get_theme_mod('theme_blog_share_this_box_hd'); ?></h6>
                </div>
                <div class="col-sm-6 text-end">
                    <ul class="m-0 p-0 ">
                        <li class="d-inline-block m-0 p-0">
                            <a data-toggle="tooltip" title="Facebook" href="http://www.facebook.com/sharer.php?u=<?php the_permalink(); ?>/&p[title]=<?php the_title(); ?>" target="_blank"><i class="fa-brands fa-square-facebook fa-xl mx-1"></i></a>
                        </li>
                        <li class="d-inline-block m-0 p-0">
                            <a href="http://twitter.com/home?status=<?php the_title(); ?> <?php the_permalink(); ?>" title="<?php _e('Twitter', 'law-firm') ?>" target="_blank"><i class="fa-brands fa-square-twitter fa-xl mx-1"></i></a>
                        </li>
                        <li class="d-inline-block m-0 p-0">
                            <a href="http://linkedin.com/shareArticle?mini=true&amp;url=<?php the_permalink(); ?>&amp;title=<?php the_title(); ?>" title="<?php _e('LinkedIn', 'law-firm') ?>" target="_blank"><i class="fa-brands fa-linkedin fa-xl mx-1"></i></a>
                        </li>
                        <li class="d-inline-block m-0 p-0">
                            <a href="mailto:?subject=<?php the_title(); ?>&amp;body=<?php the_permalink() ?>" title="<?php _e('E-Mail', 'law-firm') ?>" target="_blank"><i class="fa fa-envelope-square fa-xl mx-1"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <!-----Bio Box Code--------------------->
        <?php echo do_shortcode('[lc_get_post post_type="lc_section" slug="author-box"]'); ?> 
        <div class="clearfix"></div>

    <?php if ($breadcrum !== "1") { ?>
        <div class="breadcrumb-wrap-outer py-4">
            <?php echo SPKBreadcrumbs(); ?>
        </div>
    <?php } else { ?>
        <div class="breadcrumb-wrap-outer py-4">
            <?php echo rwmb_meta('spk_txt_bread'); ?>
        </div>
    <?php } ?>
    </div>
</div>

<?php get_footer() ?>