import React from 'react';
import sendMail from '../../lib/emailSender';
import { constants } from '../../constants/constants';

class FooterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            text: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e: any) {
        e.preventDefault();
        const email: string = this.state.email;
        const text: string = this.state.text;
        const subject: string = constants.CONTACT_SUBJECT;
        sendMail(email, text, subject);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="email" name="email" className="form-control"
                               value={this.state.email} onChange={this.handleChange} placeholder="Enter email..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="text"></label>
                        <textarea name="text" className="form-control" rows="5" placeholder="Your message"
                        value={this.state.text} onChange={this.handleChange}></textarea>
                    </div>
                    <div className="footer-button">
                        <button type="button" className="btn btn-footer mb-2">Send</button>

                    </div>
                </form>
            </div>
        );
    }
}

export default FooterForm;

// interface IFooterFormProps {
//
// }
//
// const submitForm = () => {
//
// };
//
// const FooterForm: React.SFC<IFooterFormProps> = ({
//
//                                                  }) => {
//     return (
//         <div>
//             <form>
//                 <div className="form-group">
//                     <label for="email"></label>
//                     <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email..." />
//                 </div>
//                 <div className="form-group">
//                     <label for="text"></label>
//                     <textarea name="text" className="form-control" cols="20" rows="10" placeholder="Your message"></textarea>
//                 </div>
//                 <button type="button" className="btn btn-footer mb-2">Send</button>
//             </form>
//         </div>
//     );
// };
