<?php
// Case Result Slider
function case_results()
{
    $args = array(
        'post_type' => 'case-results',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'orderby' => 'date',
        'order' => 'ASC',
    );

    $loop = new WP_Query($args);
    while ($loop->have_posts()) : $loop->the_post();   ?>
        <div class="swiper-slide lc-block">
            <div class="">
                <div class="d-flex justify-content-center">
                    <?php the_post_thumbnail(); ?>
                </div>
                <div class="mt-2">
                    <h6 class="text-center text-white"><?php the_title(); ?></h6>
                </div>
            </div>
        </div>
<?php
    endwhile;
    wp_reset_postdata();
}
add_shortcode('case_results', 'case_results');
?>

<?php
// Our Attorney Slider
function our_attorney()
{
    $args = array(
        'post_type' => 'our-attorney',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'orderby' => 'date',
        'order' => 'ASC',
    );

    $loop = new WP_Query($args);
    while ($loop->have_posts()) : $loop->the_post();   ?>

        <div class="swiper-slide">
            <div class="item">
                <?php echo get_the_post_thumbnail(); ?>
                <div class="member-detail text-dark">
                 <h5 class="text-uppercase"><?php the_title(); ?></h5>
                <p><?php echo rwmb_meta('spk_attorney_designation') ?></p>
                <a href="<?php echo rwmb_meta('spk_attorney_profile_link') ?>" class="blue-btn mt-3">View Profile</a>
                </div>
            </div>
        </div>
<?php
    endwhile;
    wp_reset_postdata();
}
add_shortcode('our_attorney', 'our_attorney');
?>

<?php
// Practice area Slider
function practice_areas()
{
    $args = array(
        'post_type' => 'home_practice',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'orderby' => 'date',
        'order' => 'ASC',
    );

    $loop = new WP_Query($args);
 
    
    while ($loop->have_posts()) : $loop->the_post();   ?>
        <?php $value = rwmb_meta('spk_pratice_bg'); ?>
        <div class="swiper-slide" style="background-color: <?php echo $value ?>">
        <?php if(!(rwmb_meta('spk_practice_link'))){ ?>
            <a>

                <div class="item">

                    <?php
                     $url = wp_get_attachment_url(get_post_thumbnail_id($post->ID), 'thumbnail');
//                      $img_alt = get_post_meta(get_post_thumbnail_id($post->ID) , '_wp_attachment_image_alt', true); 
                      ?>
                    <img class="active_img" src="<?php echo $url ?>" alt="<?php echo rwmb_meta('spk_img_alt') ?>">

                    <?php $images = rwmb_meta('spk_home_practice_img', ['limit' => 1]) ?>
                    <?php $image = reset($images) ?>
                    <img class="hover_img" src="<?= $image['url']; ?>" alt="<?php echo rwmb_meta('spk_img_alt') ?>">
                    </a>
                    <h4 class="mt-4 text-white text-uppercase"><?php the_title(); ?></h4>
                     <?php the_content(); ?>
                </div>
            
            <?php }else { ?>
            <a href="<?php echo rwmb_meta('spk_practice_link') ?>">

                <div class="item">

                    <?php $url = wp_get_attachment_url(get_post_thumbnail_id($post->ID), 'thumbnail'); ?>
                    <img class="active_img" src="<?php echo $url ?>" alt="<?php echo rwmb_meta('spk_img_alt') ?>">

                    <?php $images = rwmb_meta('spk_home_practice_img', ['limit' => 1]) ?>
                    <?php $image = reset($images) ?>
                    <img class="hover_img" src="<?= $image['url']; ?>" alt="<?php echo rwmb_meta('spk_img_alt') ?>">
                    <h4 class="mt-4 text-white text-uppercase"><?php the_title(); ?></h4>
                     <?php the_content(); ?>
                </div>
            </a>
            <?php } ?>
        </div>
<?php
    endwhile;
    wp_reset_postdata();
}
add_shortcode('practice_areas', 'practice_areas');
?>


<?php
// Testimonial Slider
function testimonials()
{
    $args = array(
        'post_type' => 'testimonials',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'orderby' => 'date',
        'order' => 'ASC',
    );

    $loop = new WP_Query($args);
    while ($loop->have_posts()) : $loop->the_post();   ?>

        <div class="swiper-slide">
            <div class="item testimonial-inner">
                <p class="pb-2"><?php the_content(); ?></p>
                <h6 class="mt-4 pb-2 text-white text-uppercase"><?php the_title(); ?></h6>
            </div>
        </div>
<?php
    endwhile;
    wp_reset_postdata();
}
add_shortcode('testimonials', 'testimonials');
?>



<?php
// Blog post Slider
function blog_post()
{

    $WordLimit = 28;
    $args = array(
        'post_type' => 'post',
        'post_status' => 'publish',
        'posts_per_page' => 3,
        'orderby' => 'date',
        'order' => 'DESC',
    );

    $loop = new WP_Query($args);
    while ($loop->have_posts()) : $loop->the_post();   ?>

        <div class="swiper-slide">
            <div class="item">
                <a href="<?php echo get_the_permalink(); ?>"> <?php echo get_the_post_thumbnail(); ?></a>
                <h5 class="mt-3"><?php the_title(); ?></h5>
                <hr>
                <p><?php echo SPK_Excerpt($WordLimit) ?></p>
                <a class="text-decoration-underline" href="<?php echo get_the_permalink(); ?>">Read More ></a>
            </div>
        </div>
<?php
    endwhile;
    wp_reset_postdata();
}
add_shortcode('blog_post', 'blog_post');
?>

<?php
// accolades Slider
function accolades()
{
    $args = array(
    'post_type' => 'accolades',
    'post_status' => 'publish',
    'posts_per_page' => -1,
    'orderby' => 'date',
    'order' => 'ASC',
    'tax_query' => array(
        array(
            'taxonomy' => 'accolade-category', // Replace 'accolade-category' with your actual taxonomy name
            'field' => 'slug',
            'terms' => 'top-accolade', // Replace 'bottom-accolade' with the term you want to exclude
            'operator' => 'NOT IN',
        ),
    ),
);

    $loop = new WP_Query($args);
    while ($loop->have_posts()) : $loop->the_post();   ?>

        <div class="swiper-slide">
            <div class="item">
                <a href="<?php echo rwmb_meta('spk_accolade_link') ?>" target="_blank"> <?php echo get_the_post_thumbnail(); ?></a>
            </div>
        </div>
<?php
    endwhile;
    wp_reset_postdata();
}
add_shortcode('accolades', 'accolades');
?>

<?php
// banner bottom accolades Slider
function banner_bottom_accolades()
{
    $args = array(
    'post_type' => 'accolades',
    'post_status' => 'publish',
    'posts_per_page' => -1,
    'orderby' => 'date',
    'order' => 'ASC',
    'tax_query' => array(
        array(
            'taxonomy' => 'accolade-category', // Replace 'accolade-category' with your actual taxonomy name
            'field' => 'slug',
            'terms' => 'top-accolade', // Replace 'bottom-accolade' with the term you want to exclude
            'operator' => 'IN',
        ),
    ),
);

    $loop = new WP_Query($args);
    while ($loop->have_posts()) : $loop->the_post();   ?>

        <div class="swiper-slide">
            <div class="item">
                <a href="<?php echo rwmb_meta('spk_accolade_link') ?>" target="_blank"> <?php echo get_the_post_thumbnail(); ?></a>
            </div>
        </div>
<?php
    endwhile;
    wp_reset_postdata();
}
add_shortcode('banner_bottom_accolades', 'banner_bottom_accolades');
?>


<?php
// Case Tab Section
function tabs_section()
{
    $args = array(
        'post_type' => 'tab-section',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'orderby' => 'date',
        'order' => 'ASC',
    );
?>
    <div class="service_section">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <?php
            $loop = new WP_Query($args);
            $i = 1;
            while ($loop->have_posts()) : $loop->the_post();   ?>
                <li class="nav-item" role="presentation">
                    <button class="nav-link <?= $i === 1 ? 'active' : '' ?>" id="home-tab<?php echo $i ?>" data-bs-toggle="tab" data-bs-target="#tab<?php echo $i ?>" type="button" role="tab" aria-controls="home" aria-selected="true"><?php the_title(); ?></button>
                </li>
            <?php
                $i++;
            endwhile;
            ?>
        </ul>
        <div class="tab-content pt-5" id="myTabContent">
        <?php
            $loop = new WP_Query($args);
            $h = 1;
            while ($loop->have_posts()) : $loop->the_post();   ?>
            	<div class="tab-pane fade <?= $h === 1 ? 'active show' : '' ?>" id="tab<?php echo $h ?>" role="tabpanel" aria-labelledby="home-tab<?php echo $h ?>">
                <?php the_post_thumbnail(); ?>
                    <div class="content"><?the_content()?></div>
            </div>
            <?php
            $h++;
            endwhile;
            ?>
        </div>
    </div>
<?
    wp_reset_postdata();
}
add_shortcode('tabs_section', 'tabs_section');
?>