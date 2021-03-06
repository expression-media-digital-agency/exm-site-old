
import React from 'react';
import { Router } from 'routes';
import Link from 'next/link';

interface IFooterFormProps {

}

const FooterForm: React.SFC<IFooterFormProps> = ({}) => {
    return (
        <div>
            <form className="footer-form">
                <div className="form-group">
                    <input type="email" className="form-control input" id="email" placeholder="Your email..."/>
                </div>
                <div className="form-group">
                <textarea className="form-control textarea" id="message" rows="5" placeholder="Your message here..."></textarea>
                </div>
                <div className="float-right">
                    <button type="submit" className="btn btn-footer">Send</button>
                </div>
            </form>
        </div>
    );
};

export default FooterForm;