<?php
$Data_Newsletter = get_option("SpeakApiNewsletter");
?>
<div class="wrap">
    <h2>Newsletter Settings</h2>
    <br />
    <div class="postbox-container"  style="width:100%;">
        <div id="breadcrumbssupport" class="postbox">
            <div class="inside">
                <form method="post" id="newsletter-settings">
                    <div id="check-api-form-msg"></div>
                    <table class="form-table table-responsive" >
                        <tr>
                            <th scope="row">
                                <label for="newsletter_tags">Infusionsoft Tags</label>
                                <p>(Comma separated)</p>
                            </th>
                            <td>
                                <input style="width: 53%;" type="text" name="newsletter_tags" id="newsletter_tags" class="admin-text-field" value="<?php echo $Data_Newsletter['n_tags']; ?>"/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <label for="newsletter_email_subject">Email Subject Admin Alert</label>
                            </th>
                            <td>
                                <input style="width: 53%;" type="text" name="newsletter_email_subject" id="newsletter_email_subject" class="admin-text-field" value="<?php echo $Data_Newsletter['n_email_sub']; ?>"/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <label for="newsletter_email_address">Email Address</label>
                                <p>(Comma separated)</p>
                            </th>
                            <td>
                                <textarea cols="70" rows="5" name="newsletter_email_address" id="newsletter_email_address" class="admin-text-field"><?php echo $Data_Newsletter['n_email_address']; ?></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <label for="newsletter_email_temp">Email Template Admin</label>
                            </th>
                            <td>
                                <textarea cols="70" rows="15" name="newsletter_email_temp" id="newsletter_email_temp" class="admin-text-field"><?php echo $Data_Newsletter['n_email_temp']; ?></textarea>
                            </td>
                        </tr>
                         <tr>
                            <th scope="row">
                                <label for="newsletter_email_subject_user">Email Subject User Alert</label>
                            </th>
                            <td>
                                <input style="width: 53%;" type="text" name="newsletter_email_subject_user" id="newsletter_email_subject" class="admin-text-field" value="<?php echo $Data_Newsletter['n_email_sub_user']; ?>"/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <label for="newsletter_email_user_temp">Email Template User</label>
                            </th>
                            <td>
                                <textarea cols="70" rows="15" name="newsletter_email_user_temp" id="newsletter_email_user_temp" class="admin-text-field"><?php echo $Data_Newsletter['n_email_user_temp']; ?></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <label for="newsletter_form_temp">Form Template</label>
                            </th>
                            <td>
                                <textarea cols="70" rows="15" name="newsletter_form_temp" id="newsletter_form_temp" class="admin-text-field"><?php echo htmlentities(stripslashes($Data_Newsletter['n_form_temp'])); ?></textarea>
                            </td>
                        </tr>

                    </table>
                    <p></p>
                    <p class="submit">
                        <input type="submit" class="button-primary" id="newsletter-options-btn" value="Save Settings" />
                    </p>
                </form> 
            </div>
        </div>
    </div>
</div>