<?php

// Exit if accessed directly.
defined('ABSPATH') || exit;


?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <!-- Required meta tags -->
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
  <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>

  <!-- wp_head begin -->
  <?php wp_head(); ?>
  <!-- wp_head end -->
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>

  <?php if (function_exists('lc_custom_header')) lc_custom_header();
  else {

    //STANDARD NAV

    if (get_theme_mod("enable_topbar")) : ?>
      <!-- ******************* The Topbar Area ******************* -->
      <div id="wrapper-topbar" class="py-2 <?php echo get_theme_mod('topbar_bg_color_choice', 'bg-light') ?> <?php echo get_theme_mod('topbar_text_color_choice', 'text-dark') ?>">
        <div class="container">
          <div class="row">
            <div id="topbar-content" class="col-md-12 text-center small"> <?php echo do_shortcode(get_theme_mod('topbar_content')) ?> </div>
          </div>
        </div>
      </div>
    <?php endif; ?>


    <!-- ******************* The Navbar Area ******************* -->
    <div id="wrapper-navbar" itemscope itemtype="http://schema.org/WebSite">

      <a class="skip-link visually-hidden-focusable" href="#theme-main"><?php esc_html_e('Skip to content', 'picostrap'); ?></a>


      <nav class="navbar <?php echo get_theme_mod('picostrap_header_navbar_expand', 'navbar-expand-lg'); ?> <?php echo get_theme_mod('picostrap_header_navbar_position') . " " . get_theme_mod('picostrap_header_navbar_color_scheme', 'navbar-dark') . ' ' . get_theme_mod('picostrap_header_navbar_color_choice', 'bg-dark'); ?>" aria-label="Main Navigation">
        <div class="container">
          <div id="logo-tagline-wrap">
            <!-- Your site title as branding in the menu -->
            <?php if (!has_custom_logo()) { ?>

              <?php if (is_front_page() && is_home()) : ?>

                <div class="navbar-brand mb-0 h3"><a rel="home" href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" itemprop="url"><?php bloginfo('name'); ?></a></div>

              <?php else : ?>

                <a class="navbar-brand mb-0 h3" rel="home" href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" itemprop="url"><?php bloginfo('name'); ?></a>

              <?php endif; ?>


            <?php } else {
              the_custom_logo();
            } ?><!-- end custom logo -->


            <?php if (!get_theme_mod('header_disable_tagline')) : ?>
              <small id="top-description" class="text-muted d-none d-md-block mt-n2">
                <?php bloginfo("description") ?>
              </small>
            <?php endif ?>


          </div> <!-- /logo-tagline-wrap -->



          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <?php
            wp_nav_menu(array(
              'theme_location' => 'primary',
              'container' => false,
              'menu_class' => '',
              'fallback_cb' => '__return_false',
              'items_wrap' => '<ul id="%1$s" class="navbar-nav me-auto mb-2 mb-md-0 %2$s">%3$s</ul>',
              'walker' => new bootstrap_5_wp_nav_menu_walker()
            ));
            ?>

            <?php if (get_theme_mod('enable_search_form')) : ?>
              <form action="<?php echo bloginfo('url') ?>" method="get" id="header-search-form">
                <input class="form-control" type="text" placeholder="Search" aria-label="Search" name="s" value="<?php the_search_query(); ?>">
              </form>
            <?php endif ?>

          </div> <!-- .collapse -->
        </div> <!-- .container -->
      </nav> <!-- .site-navigation -->
      <?php

      //AS A TEST / DEMO for a mock-up megamenu
      //include("nav-static-mega.php");
      ?>
    </div><!-- #wrapper-navbar end -->


  <?php
  } // END ELSE CASE 
  ?>

  <?php if (is_front_page()) { ?>
    <div class="inner_banner_section" style="background: url('<?php echo get_theme_mod('banner_image'); ?>') no-repeat center top;">
    <?php } else { ?>
      <?php $bannercover = get_post_meta($post->ID, 'spk_hide_banner_image', 'true'); ?>
      <?php if ($bannercover !== "1") { ?>
        <div class="inner_banner_section banner-image" style="background: url('<?php echo get_theme_mod('banner_image2'); ?>') no-repeat center bottom;">
        <?php } else { ?>
          <?php $custom_cover_img = wp_get_attachment_url(get_post_meta($post->ID, 'spk_custom_banner', 'true')); ?>
          <div class="inner_banner_section" style="background: url('<?php echo $custom_cover_img; ?>') no-repeat center;">
          <?php } ?>
        <?php } ?>
        <div class="clearfix"></div>
        <?php if (!(is_front_page()) && !(is_singular('attorneyprofile'))) { ?>
          <?php
          while (have_posts()) : the_post();
            $No_heading = get_post_meta($post->ID, 'spk_heading_hide', 'true');
          endwhile;
          ?>
          <?php if ($No_heading !== "1") { ?>
            <div class="container">
              <div class="title-pad">
                <h1 class="text-center m-o other_head">
                  <?php if (is_page($page)) { ?>
                    <?php the_title(); ?>
                  <?php } ?>
                  <?php if (is_single($post)) { ?>
                    <?php the_title(); ?>
                  <?php } ?>
                  <?php if (is_404()) { ?>
                    Page not found
                  <?php } ?>
                  <?php if (in_category($cat)) { ?>
                    <?php single_term_title() ?>
                  <?php } else { ?>
                    <?php single_term_title() ?>
                  <?php } ?>
                </h1>
              </div>
            </div>
          <?php } ?>
        <?php } ?>
          </div>