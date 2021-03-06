import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { constants } from '../../constants/constants';
import  {handleContact} from '../../lib/emailSender'


interface IState {
    name: string | undefined;
    email: string;
    message: string;
    company: string | undefined;
    address: string | undefined;

}

interface IProps {

}

class ContactForm extends React.PureComponent< IProps, IState>  {

 render(){
    return (
        <div>
            <section className="contact-form  animated fadeIn delay-1s">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 form-left-side">
                            <h2 className="paragraph-four">
                                Contact Information
                            </h2>
                            <p><span><FontAwesomeIcon icon={faEnvelope}/></span> exmdigitalagency@gmail.com</p>
                            <p><span><FontAwesomeIcon icon={faPhoneAlt}/></span>{constants.CONTACT_NUMBER}</p>
                        </div>
                        <div className="col-sm-7 form-right-side">
                            <form method="POST" action="https://formspree.io/exmdigitalagency@gmail.com">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input name="name"  type="text" className="form-control" id="name"
                                               aria-describedby="emailHelp" placeholder="Name" required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input name="company"   type="text" className="form-control" id="company"
                                               placeholder="Company"/>
                                    </div>
                                </div>
    
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input name="email"   type="email" className="form-control" id="email"
                                               aria-describedby="emailHelp" placeholder="Email"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input  name="address" type="text" className="form-control" id="address"
                                              placeholder="Address" required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <textarea  className="form-control" name="message" id="textarea"
                                                 rows="4" placeholder="Message" required/>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="btn btn-footer">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
 }
    
};

export default ContactForm;


