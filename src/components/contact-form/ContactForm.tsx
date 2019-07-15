import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import sendMail from "../../lib/emailSender";
import {constants} from "../../constants/constants";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            company: '',
            email: '',
            address: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: event.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        // const {name, company, address, email, message} = this.state;
        // let text = message + '\n\n' + 'From: ' + name + '. \n' + 'Company name: ' + company + '.\n' + 'Address: ' + address + '. \n';
        // sendMail(email, constants.CONTACT_SUBJECT, text);
        // Render a success for successful mail send
        // Async/await recommended to check for success or error to avoid nests
    }

    render() {
        return (
            <div>
                <section className="contact-form  animated fadeIn delay-3s">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 form-left-side">
                                <h2 className="paragraph-four">
                                    Contact Information
                                </h2>
                                <p><span><FontAwesomeIcon icon={faMapMarkerAlt}/></span> Gibson House, No 12
                                    Flatten building, Ile Ife.</p>
                                <p><span><FontAwesomeIcon icon={faEnvelope}/></span> exmdigitalagency@gmail.com</p>
                                <p><span><FontAwesomeIcon icon={faPhoneAlt}/></span> +234(0) 81 4945 6123</p>
                            </div>
                            <div className="col-sm-8 form-right-side">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" id="name" value={this.state.name}
                                                   onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Name"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" id="company" value={this.state.company}
                                                   onChange={this.handleChange} placeholder="Company"/>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input type="email" className="form-control" id="email" value={this.state.email}
                                                   onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Email"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" id="address" value={this.state.address}
                                                   onChange={this.handleChange} placeholder="Address"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <textarea className="form-control" name="message" id="textarea" value={this.state.message}
                                                    onChange={this.handleChange} placeholder="Message" rows="4"/>
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
