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

class Spkac_Web {

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
        wp_enqueue_style('spkac_widget', SPKAC_URL . 'assets/css/spkac_widget.css', array(), $this->version, 'all');
        wp_enqueue_script('spkac_responsivevoice', 'https://code.responsivevoice.org/responsivevoice.js', array('jquery'), $this->version, true);
        wp_enqueue_script('spkac_main', SPKAC_URL . 'assets/js/spkac_widget.js', array('jquery'), $this->version, true);
    }

    /**
     * Add widget stuff to footer of every page.
     * @since    1.0.0
     * @access 	 public
     * @param    string $hook Used for determining which page(s) to load our scripts.
     */
    public function render_widget($hook) {
        require_once SPKAC_PATH . 'templates/spkac-widget.php';
    }

}
