import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

interface IContactFormProps {

}

const ContactForm: React.SFC<IContactFormProps> = ({}) => {
    return (
        <div>
           <section className="contact-form  animated fadeIn delay-3s">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 form-left-side">
                <h2 className="paragraph-four">
                  Contact Information
                </h2>
                <p ><span><FontAwesomeIcon icon={faMapMarkerAlt} /></span> Gibson House, No 12
Flatten building, Ile Ife.</p>
                <p><span><FontAwesomeIcon icon={faEnvelope} /></span> info@exmediaagency.com</p>
                <p><span><FontAwesomeIcon icon={faPhoneAlt} /></span> +234(0) 81 4945 6123</p>
              </div>
              <div className="col-sm-8 form-right-side">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Name"/>
                  </div>
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" id="company" placeholder="Company"/>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"/>
                  </div>
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" id="address" placeholder="Address"/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <textarea className="form-control" id="textarea" placeholder="Message" rows="4"></textarea>
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
};

export default ContactForm;
