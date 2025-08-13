<?php
/**
 * Displays the main plugin page.
 *
 * @since      1.0
 * @package    Spkac_Accessibility
 * @subpackage Spkac_Accessibility/templates
 */
// Prevent direct access.
if (!defined('SPKAC_PATH'))
    exit;
?>
<div class="wrap">
    <h1 id="spkac-title"><?php _e('SPK Accessibility', 'spkac_accessibility'); ?></h1>
    <?php settings_errors(); ?>

    <form class="spkac-setting-form" id="spkac-setting-form" action="#" method="POST">
        <div id="spkac_opt_panel">
            <div class="inside">
                <p><?php _e('This tool allows you to configure Accessibility options', 'spkac_accessibility'); ?></p>
                <div id="spkac_alerts"></div>
                <table id="spkac_config_form" class="form-table">
                    <tr>
                        <td><label for="wgt_title"><strong><?php _e('Widget Title', 'spkac_accessibility'); ?></strong></label></td>
                        <td><input id="wgt_title" class="regular-text" type="text" name="wgt_title" value="<?php Spkac_Admin::prefill_value('wgt_title'); ?>" /></td>
                    </tr>
                    <tr>
                        <td><label for="wgt_color"><strong><?php _e('Widget Color', 'spkac_accessibility'); ?></strong></label></td>
                        <td><input id="wgt_color" class="regular-text" type="text" name="wgt_color" value="<?php Spkac_Admin::prefill_value('wgt_color'); ?>" /></td>
                    </tr>
                </table>
                <div id="spkac-submit-wrap">
                    <?php wp_nonce_field('process_spkac_accessibility', 'spkac_nonce'); ?>
                    <button id="spkac_save" type="submit" class="button"><?php _e('Save Options', 'spkac_accessibility'); ?></button>
                </div>
            </div><!-- /.inside -->
        </div><!-- /#spkac_opt_panel -->
    </form>
</div><!-- /.wrap -->
