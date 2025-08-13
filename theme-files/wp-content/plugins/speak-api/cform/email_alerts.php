<?php
$CB_Data = get_option("SpeakApiCBAlerts");
?>
<div class="wrap">
    <div class="postbox-container"  style="width:100%;">
        <div id="breadcrumbssupport" class="postbox">
            <div class="inside">
                <form method="post" id="spk-api-cbform">
                    <div id="check-api-form-msg"></div>
                    <h3>Contact Form Alert Setting</h3>
                    <table class="form-table" >
                        <tr>
                            <th scope="row">
                                <label for="namelabel">Email Address</label>
                            </th>
                            <td>
                                <textarea cols="40" rows="5" name="cform_email_address" class="admin-text-field"><?php echo $CB_Data['c_email_address']; ?></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <label for="namelabel">Email Subject</label>
                            </th>
                            <td>
                                <input style="width: 80%;" type="text" name="cform_email_subject" class="admin-text-field" value="<?php echo $CB_Data['c_email_sub']; ?>"/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <label for="namelabel">Email Template</label>
                            </th>
                            <td>
                                <textarea cols="40" rows="10" name="cform_email_template" class="admin-text-field"><?php echo $CB_Data['c_email_temp']; ?></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" colspan="2">
                                <h3>Book Form Alert Setting</h3>
                            </th>
                        </tr>
                        <tr>
                            <th scope="row">
                                <label for="namelabel">Email Address</label>
                            </th>
                            <td>
                                <textarea cols="40" rows="5" name="bform_email_address" class="admin-text-field"><?php echo $CB_Data['b_email_address']; ?></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <label for="namelabel">Email Subject</label>
                            </th>
                            <td>
                                <input style="width: 80%;" type="text" name="bform_email_subject" class="admin-text-field" value="<?php echo $CB_Data['b_email_sub']; ?>"/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <label for="namelabel">Email Template</label>
                            </th>
                            <td>
                                <textarea cols="40" rows="10" name="bform_email_template" class="admin-text-field"><?php echo $CB_Data['b_email_temp']; ?></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <label>Email From</label>
                            </th>
                            <td>
                                <input style="width: 80%;" type="text" name="ex_email_from" class="admin-text-field" value="<?php echo $CB_Data['ex_email_from']; ?>"/>
                            </td>
                        </tr>
                    </table>
                    <p class="submit">
                        <input type="submit" class="button-primary" id="cbform-email-btn" value="Save Settings" />
                    </p>
                </form> 
            </div>
        </div>
    </div>
</div>