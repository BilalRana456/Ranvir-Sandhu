<?php
/* Template Name: Blog Page Template */
get_header();
$breadcrum = get_post_meta($post->ID, 'spk_hide_bread', 'true');
?>
<div class="inner-page-outer-wrap mt-4">
    <div class="entry-content">
        <div class="container">
        <div class="clearfix"></div>
            <?php if (get_theme_mod('theme_blog_category_dropdown')): ?>
                <div class="show-cat-dropdown d-flex justify-content-center mb-3">
                    <form action="<?php echo esc_url(home_url('/')); ?>" method="get">
                        <label for="cat"><?php echo _e(get_theme_mod('theme_blog_category_dropdown_hd'), "spk") ?></label>
                        <?php
                        $args = array(
                            'show_option_none' => __('Select Category'),
                            'show_count' => 1,
                            'orderby' => 'name',
                            'echo' => 0,
                            'exclude' => implode(",", array(get_theme_mod('theme_blog_exclude_category_dropwoen'))),
                            'class' => 'blog-cat-dropdown p-1',
                        );
                        ?>
                        <?php $select = wp_dropdown_categories($args); ?>
                        <?php $replace = "<select$1>"; ?>
                        <?php $select = preg_replace('#<select([^>]*)>#', $replace, $select); ?>
                        <?php echo $select; ?>
                        <noscript><input type="submit" value="View" /></noscript>
                    </form>
                </div>
            <?php endif; ?>
            <div class="clearfix"></div>
            <?php
            $WordLimit = empty(get_theme_mod('theme_blog_posts_words_limit')) ? "60" : get_theme_mod('theme_blog_posts_words_limit');
            $args = array(
                'post_type' => 'post',
                'post_status' => 'publish',
                'orderby' => 'date',
                'order' => 'DESC',
                'posts_per_page' => !empty(get_theme_mod('theme_blog_show_number_posts')) ? get_theme_mod('theme_blog_show_number_posts') : "10",
                'paged' => $paged,
                'cat' => '-17'
            );

            $wp_query = new WP_Query($args);
            if ($wp_query->have_posts()) : while ($wp_query->have_posts()) : $wp_query->the_post();
                    $imgID = get_post_thumbnail_id($wp_query->ID);
                    $img = wp_get_attachment_image_src($imgID, 'full', false, '');
                    $imgAlt = get_post_meta($imgID, '_wp_attachment_image_alt', true);
                    if ($imgID):
                        ?>

                        <div class="blog-summary-wrap mb-3">
                            <div class="blog-summary-hd"><a href="<?php echo get_the_permalink(); ?>" class="d-block py-2 px-3 mb-2"><?php echo get_the_title(); ?></a></div>
                            <div class="media">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <img class="blog-summary-img" src="<?php echo $img[0]; ?>"alt="<?php echo $imgAlt; ?>" />
                                    </div>
                                    <div class="col-sm-9">
                                        <div class="media-body">
                                            <?php if (get_theme_mod('theme_blog_user_meta_admin_name') || get_theme_mod('theme_blog_user_meta_publish_date')): ?>
                                                <div class="blog-summary-meta d-flex justify-content-left mb-2 ">
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
                                            <?php endif; ?>
                                            <div class = "blog-summary-body ">
                                                <p><?php echo SPK_Excerpt($WordLimit); ?><a href="<?php echo get_the_permalink(); ?>" class="blog-summary-rmore">Read More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php else: ?>
                        <div class="blog-summary-wrap mb-3">
                            <div class="blog-summary-hd"><a href="<?php echo get_the_permalink(); ?>" class="d-block py-2 px-3 mb-2"><?php echo get_the_title(); ?></a></div>
                            <?php if (get_theme_mod('theme_blog_user_meta_admin_name') || get_theme_mod('theme_blog_user_meta_publish_date')): ?>
                                <div class="blog-summary-meta d-flex justify-content-left mb-2 px-3">
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
                            <?php endif; ?>
                            <div class = "blog-summary-body ">
                                <p><?php echo SPK_Excerpt($WordLimit); ?><a href="<?php echo get_the_permalink(); ?>" class="blog-summary-rmore">Read More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
                            </div>
                        </div>
                    <?php
                    endif;
                endwhile;
            endif;
            ?>
            <div class="row">
                <div class="col lead text-center w-100">
                    <div class="d-inline-block"><?php picostrap_pagination() ?></div>
                </div>
            </div> 
            <?php wp_reset_query(); ?>
            <div class="clearfix"></div>
            <?php if ($breadcrum !== "1") { ?>
                <div class="breadcrumb-wrap-outer pb-4">
                    <?php echo SPKBreadcrumbs(); ?>
                </div>
            <?php } else { ?>
                <div class="breadcrumb-wrap-outer pb-4">
                    <?php echo rwmb_meta('spk_txt_bread'); ?>
                </div>
            <?php } ?>
        </div>
    </div>
</div>
<?php get_footer() ?>