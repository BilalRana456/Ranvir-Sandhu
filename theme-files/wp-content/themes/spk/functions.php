<?php
/*
        _               _                  _____        _     _ _     _   _   _                         
       (_)             | |                | ____|      | |   (_) |   | | | | | |                        
  _ __  _  ___ ___  ___| |_ _ __ __ _ _ __| |__     ___| |__  _| | __| | | |_| |__   ___ _ __ ___   ___ 
 | '_ \| |/ __/ _ \/ __| __| '__/ _` | '_ \___ \   / __| '_ \| | |/ _` | | __| '_ \ / _ \ '_ ` _ \ / _ \
 | |_) | | (_| (_) \__ \ |_| | | (_| | |_) |__) | | (__| | | | | | (_| | | |_| | | |  __/ | | | | |  __/
 | .__/|_|\___\___/|___/\__|_|  \__,_| .__/____/   \___|_| |_|_|_|\__,_|  \__|_| |_|\___|_| |_| |_|\___|
 | |                                 | |                                                                
 |_|                                 |_|                                                                

                                                       
*************************************** WELCOME TO PICOSTRAP ***************************************

********************* THE BEST WAY TO EXPERIENCE SASS, BOOTSTRAP AND WORDPRESS *********************

    PLEASE WATCH THE VIDEOS FOR BEST RESULTS:
    https://www.youtube.com/playlist?list=PLtyHhWhkgYU8i11wu-5KJDBfA9C-D4Bfl

*/

// DE-ENQUEUE PARENT THEME BOOTSTRAP JS BUNDLE
add_action( 'wp_print_scripts', function(){
    wp_dequeue_script( 'bootstrap5' );
}, 100 );

// ENQUEUE THE BOOTSTRAP JS BUNDLE FROM THE CHILD THEME DIRECTORY
add_action( 'wp_enqueue_scripts', function() {
    //enqueue js in footer, async
    wp_enqueue_script( 'bootstrap5-childtheme', get_stylesheet_directory_uri() . "/js/bootstrap.bundle.min.js#asyncload", array(), null, true);

} ,101);

// ENQUEUE YOUR CUSTOM JS FILES, IF NEEDED 
add_action( 'wp_enqueue_scripts', function() {	   
    
    //UNCOMMENT next row to include the js/custom.js file globally
    wp_enqueue_script('custom', get_stylesheet_directory_uri() . '/js/custom.js', array(/* 'jquery' */), null, true); 
  
   //UNCOMMENT next 3 rows to load the js file only on one page
    //if (is_page('mypageslug')) {
    //    wp_enqueue_script('custom', get_stylesheet_directory_uri() . '/js/custom.js', array(/* 'jquery' */), null, true); 
    // }  

});

function my_custom_scripts() {
	 wp_enqueue_script('funcations-js', get_stylesheet_directory_uri() . '/js/jquery.js');
 }
add_action( 'wp_enqueue_scripts', 'my_custom_scripts' );


// CHECK PARENT THEME VERSION as Bootstrap 5.2 requires an updated SCSSphp, so picostrap5 v2 is required
add_action( 'admin_notices', function  () {
    if( (pico_get_parent_theme_version())>=2) return;
	$class = 'notice notice-error';
	$message = __( 'This Child Theme requires at least Picostrap Version 2 for the SCSS compiler to work properly. Please update the parent theme.', 'picostrap' );
	printf( '<div class="%1$s"><h1>%2$s</h1></div>', esc_attr( $class ), esc_html( $message ) );
} );

// FOR SECURITY: DISABLE APPLICATION PASSWORDS. Remove if needed (unlikely!)
add_filter( 'wp_is_application_passwords_available', '__return_false' );

// ADD YOUR CUSTOM PHP CODE DOWN BELOW /////////////////////////
require_once locate_template('/theme-functions/includes/breadcrumbs.php');
require_once locate_template('/theme-functions/includes/get_custom_posttypes.php');
require_once locate_template('/theme-functions/includes/get_functions.php');
require_once locate_template('/theme-functions/includes/customizer.php');
// require_once locate_template('/theme-functions/includes/pagination.php');
require_once locate_template('/Related/related.php');
