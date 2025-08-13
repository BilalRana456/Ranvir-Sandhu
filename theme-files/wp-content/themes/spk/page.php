<?php

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header();
$breadcrum = get_post_meta($post->ID, 'spk_hide_bread', 'true');
?>
<!-- <div class="py-6 bg-light">
    <div class="container text-center">
        <hp class="display-4"><?php the_title(); ?></hp>
        
  </div>
</div> -->
<?php if (!is_front_page()) { ?>
<div class="inner-pages pt-5">
	<?php } ?>
<?php
if (have_posts()) :
    while (have_posts()) : the_post();
        the_content();
    endwhile;
else :
    _e('Sorry, no posts matched your criteria.', 'textdomain');
endif;
?>
<?php if (!is_front_page()) { ?>
    <div class="container">
		<?php echo do_shortcode('[lc_get_post post_type="lc_section" slug="get-help-now"]'); ?>
        <div class="clearfix"></div>
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
<?php } ?>
</div>
</div>
</div>
<?php get_footer(); ?>

