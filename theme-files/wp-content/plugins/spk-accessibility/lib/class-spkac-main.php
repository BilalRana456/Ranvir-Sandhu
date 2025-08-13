<?php

/**
 * The core plugin class.
 *
 * This is used to define internationalization, dashboard-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0
 * @package    Spkac_Accessibility
 * @subpackage Spkac_Accessibility/lib
 */
// Prevent direct access.
if (!defined('SPKAC_PATH'))
    exit;

class Spkac_Accessibility {

    /**
     * The loader that's responsible for maintaining and registering all hooks that power
     * the plugin.
     *
     * @since    1.0
     * @access   protected
     * @var      SPKAC_Loader   $loader   Maintains and registers all hooks for the plugin.
     */
    protected $loader;

    /**
     * The unique identifier of this plugin.
     *
     * @since    1.0
     * @access   protected
     * @var      string    $plugin_name    The string used to uniquely identify this plugin.
     */
    protected $plugin_name;

    /**
     * The current version of the plugin.
     *
     * @since    1.0
     * @access   protected
     * @var      string    $version    The current version of the plugin.
     */
    protected $version;

    /**
     * Define the core functionality of the plugin.
     *
     * Set the plugin name and the plugin version that can be used throughout the plugin.
     * Load the dependencies, define the locale, and set the hooks for the Dashboard and
     * the public-facing side of the site.
     *
     * @since    1.0
     */
    public function __construct() {
        $this->plugin_name = 'spkac_accessibility';
        $this->version = SPKAC_VERSION;
        $this->load_dependencies();
        $this->set_locale();
        $this->define_admin_hooks();
        $this->define_web_hooks();
    }

    /**
     * Load the required dependencies for this plugin.
     *
     * Create an instance of the loader which will be used to register the hooks
     * with WordPress.
     *
     * @since    1.0
     * @access   private
     */
    private function load_dependencies() {
        require_once SPKAC_PATH . 'lib/class-spkac-loader.php';
        require_once SPKAC_PATH . 'lib/class-spkac-admin.php';
        require_once SPKAC_PATH . 'lib/class-spkac-web.php';
        require_once SPKAC_PATH . 'lib/class-spkac-i18n.php';
        $this->loader = new Spkac_Loader();
    }

    /**
     * Define the locale for this plugin for internationalization.
     *
     * Uses the BSR_i18n class in order to set the domain and to register the hook
     * with WordPress.
     *
     * @since    1.0
     * @access   private
     */
    private function set_locale() {
        $plugin_i18n = new Spkac_i18n();
        $plugin_i18n->set_domain($this->get_plugin_name());
    }

    /**
     * Register all of the hooks related to the dashboard functionality
     * of the plugin.
     *
     * @since    1.0
     * @access   private
     */
    private function define_admin_hooks() {

        // Initialize the admin class.
        $plugin_admin = new Spkac_Admin($this->get_plugin_name(), $this->get_version());

        /// Register the admin pages and scripts.
        $this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts');
        $this->loader->add_action('admin_menu', $plugin_admin, 'spkac_menu_pages');
        $this->loader->add_action('admin_init', $plugin_admin, 'register_option');
        $this->loader->add_action('admin_init', $plugin_admin, 'add_ajax_actions');
    }

    /**
     * Register all of the hooks related front
     * of the plugin.
     *
     * @since    1.0
     * @access   private
     */
    private function define_web_hooks() {
        if (!is_admin()) {
            $plugin_web = new Spkac_Web($this->get_plugin_name(), $this->get_version());
            $this->loader->add_action('wp_enqueue_scripts', $plugin_web, 'enqueue_scripts');
            $this->loader->add_action('wp_footer', $plugin_web, 'render_widget', 1000);
        }
    }

    /**
     * Run the loader to execute all of the hooks with WordPress.
     *
     * @since    1.0
     */
    public function run() {
        $this->loader->run();
    }

    /**
     * The name of the plugin used to uniquely identify it within the context of
     * WordPress and to define internationalization functionality.
     *
     * @since     1.0
     * @return    string    The name of the plugin.
     */
    public function get_plugin_name() {
        return $this->plugin_name;
    }

    /**
     * The reference to the class that orchestrates the hooks with the plugin.
     *
     * @since     1.0
     * @return    Spkac_Accessibility_Loader    Orchestrates the hooks of the plugin.
     */
    public function get_loader() {
        return $this->loader;
    }

    /**
     * Retrieve the version number of the plugin.
     *
     * @since     1.0
     * @return    string    The version number of the plugin.
     */
    public function get_version() {
        return $this->version;
    }

}
