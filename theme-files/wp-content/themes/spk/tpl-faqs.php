<?php
/* Template Name: Faqs Page Template */
get_header();
?>
<div class="inner-page-outer-wrap pt-5">
    <div class="entry-content">
        <div class="container">
            <div class="faq-area">    
            <div class="clearfix"></div>
            <?php
            $i = 1;
            $h = 1;
            $args = array(
                'post_type' => 'faqs',
                'post_status' => 'publish',
                'orderby' => 'date',
                'order' => 'DESC',
                'posts_per_page' => "10",
                'paged' => $paged,
                'cat' => '-17'
            );
            $the_query = new WP_Query($args);
            if ($the_query->have_posts()) : while ($the_query->have_posts()) : $the_query->the_post();
            ?>
                    <div class="accordion accordion-cat" id="accordion-kusi">
                        <div class="accordion-item mt-2">
                            <div lass="accordion-header" id="heading<?php echo $h ?>">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-kusi<?php echo $i ?>" aria-expanded="true" aria-controls="collapse-kusi<?php echo $i ?>">
                                    <span><b>Q:</b><?php echo get_the_title(); ?></span>
                                </button>
                            </div>
                            <div id="collapse-kusi<?php echo $i ?>" class="accordion-collapse collapse " aria-labelledby="heading<?php echo $h ?>" data-bs-parent="#accordion-kusi">
                                <div class="accordion-body">
                                    <?php echo get_the_content(); ?>
                                </div>
                            </div>
                        </div>
                    </div>
            <?php $i++;
                    $h++;
                endwhile;
            endif; ?>
            </div>
            <div class="row">
                <div class="col lead text-center w-100">
                    <div class="d-inline-block"><?php picostrap_pagination() ?>
                </div>
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