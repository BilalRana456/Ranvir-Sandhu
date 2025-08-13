<?php

/**
 * Plugin Name:       SPK Accessibility
 * Plugin URI:        https://www.speakeasymarketinginc.com
 * Description:       A plugin that helps make your WordPress site more accessible without refactoring your website's existing code and will increase compliance with WCAG 2.0, ATAG 2.0, ADA, & Section 508 requirements.
 * Version:           1.0
 * Author:            Speakeasy Marketing Inc.
 * Author URI:        https://www.speakeasymarketinginc.com
 * License:           GPL-3.0
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.txt
 * Network:           true
 *
 */
// If this file was called directly, abort.
if (!defined('WPINC')) {
    die;
}

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_spkac_accessibility() {

    // Defines the path to the main plugin file.
    define('SPKAC_FILE', __FILE__);
    // Defines the path to be used for includes.
    define('SPKAC_PATH', plugin_dir_path(SPKAC_FILE));
    // Defines the URL to the plugin.
    define('SPKAC_URL', plugin_dir_url(SPKAC_FILE));
    // Defines the current version of the plugin.
    define('SPKAC_VERSION', '1.0');
    /**
     * The core plugin class that is used to define internationalization,
     * dashboard-specific hooks, and public-facing site hooks.
     */
    require SPKAC_PATH . 'lib/class-spkac-main.php';
    $plugin = new Spkac_Accessibility();
    $plugin->run();
}

add_action('after_setup_theme', 'run_spkac_accessibility');
