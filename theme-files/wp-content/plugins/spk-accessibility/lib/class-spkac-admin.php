<?php

/**
 * The dashboard-specific functionality of the plugin.
 *
 * Registers styles and scripts, adds the custom administration page
 *
 *
 * @since      1.0
 * @package    Spkac_Accessibility
 * @subpackage Spkac_Accessibility/lib
 */
// Prevent direct access.
if (!defined('SPKAC_PATH'))
    exit;

class Spkac_Admin {

    /**
     * The ID of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $spkac_accessibility    The ID of this plugin.
     */
    private $spkac_accessibility;

    /**
     * The version of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $version    The current version of this plugin.
     */
    private $version;

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     * @var      string    $spkac_accessibility       The name of this plugin.
     * @var      string    $version    The version of this plugin.
     */
    public function __construct($spkac_accessibility, $version) {
        $this->spkac_accessibility = $spkac_accessibility;
        $this->version = $version;
    }

    /**
     * Register any CSS and JS used by the plugin.
     * @since    1.0.0
     * @access 	 public
     * @param    string $hook Used for determining which page(s) to load our scripts.
     */
    public function enqueue_scripts($hook) {
        if ('toplevel_page_spkac_accessibility' === $hook) {
            wp_enqueue_style('spkac_accessibility', SPKAC_URL . 'assets/css/spkac_admin.css', array(), $this->version, 'all');
            wp_enqueue_script('spkac_accessibility', SPKAC_URL . 'assets/js/process.js', array('jquery'), $this->version, true);

            wp_localize_script('spkac_accessibility', 'spkac_object_vars', array(
                'endpoint' => get_admin_url() . 'admin-ajax.php',
                'admin_settings' => '&action=save_settings',
                'unknown' => __('An error occurred processing your request.', 'spkac_accessibility'),
                'processing' => __('Processing...', 'spkac_accessibility')
            ));
        }
    }

    /**
     * Register any menu pages used by the plugin.
     * @since  1.0.0
     * @access public
     */
    public function spkac_menu_pages() {
        $cap = apply_filters('spkac_capability', 'install_plugins');
        add_menu_page(__('SPK Accessibility', 'spkac_accessibility'), __('SPK Accessibility', 'spkac_accessibility'), $cap, "spkac_accessibility", array($this, 'spkac_menu_pages_callback'), SPKAC_URL . '/assets/images/plugin_icon.png');
    }

    /**
     * The callback for plugin page under.
     * @access public
     */
    public function spkac_menu_pages_callback() {
        require_once SPKAC_PATH . 'templates/spkac-dashboard.php';
    }

    /**
     * Prefills the given value on the setting page.
     * @access public
     * @param  string $value The value to check for.
     * @param  string $type  The type of the value we're filling.
     */
    public static function prefill_value($value, $type = 'text') {

        $values = get_option('spkac_settings');
        // Prefill the value.
        if (isset($values[$value])) {

            if ('checkbox' === $type && 'on' === $values[$value]) {
                echo 'checked';
            } else {
                echo esc_attr($values[$value]);
            }
        }
    }

    /**
     * Registers our settings in the options table.
     * @access public
     */
    public function register_option() {
        $settings = get_option("spkac_settings");
        if (!$settings) {
            $param = array(
                'wgt_title' => __("Accessibility Menu", 'spkac_accessibility'),
                'wgt_color' => "#000"
            );
            add_option('spkac_settings', $param);
        }
    }

    /**
     * Adds any AJAX-related actions.
     * @access public
     */
    public function add_ajax_actions() {
        $actions = array(
            'save_settings',
        );

        foreach ($actions as $action) {
            add_action('wp_ajax_' . $action, array($this, $action));
        }
    }

    /**
     * Save settings.
     * @access public
     */
    public function save_settings() {
        $sData = $_POST;
        $param = array(
            'wgt_title' => sanitize_text_field($sData['wgt_title']),
            'wgt_color' => sanitize_text_field($sData['wgt_color']),
        );
        update_option("spkac_settings", $param);
        $return = array(
            'flag' => 'success',
            'alert_message' => array(__("Setting has been saved sucessfully.", 'spkac_accessibility'))
        );
        return wp_send_json($return);
    }

}
