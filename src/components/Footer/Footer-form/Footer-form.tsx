import React from 'react';
import styles from './footer-form.scss';
import sendMail from '../../../lib/emailSender';

interface IFooterFormProps {

}

const FooterForm: React.SFC<IFooterFormProps> = ({

}) => {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="email"></label>
                    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email..." />
                </div>
                <div class="form-group">
                    <label for="text"></label>
                    <textarea name="text" class="form-control" cols="20" rows="10"></textarea>
                </div>
                <button type="button" class="btn btn-primary mb-2"></button>
            </form>
        </div>
    );
};

export default FooterForm;
