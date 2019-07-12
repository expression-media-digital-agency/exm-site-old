import * as nodemailer from 'nodemailer';

import { constants } from '../constants/constants';


interface ITransport {
    host: string;
    port: number;
    secure: boolean,
    auth: {
        user: IAuth;
    }
}

interface IAuth {
    user: IEmailSender;
    pass: string;
}

interface IEmailOptions {
    from: string;
    to: [string] | string;
    subject: string;
    text: string;
}

interface IEmailSender {
    name: string;
    address: string;
}

const transportOptions: ITransport = {
    host: constants.SMTP_HOST,
    port: constants.SMTP_PORT,
    secure: constants.SMTP_SECURE,
    auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_PW
    }
};

const _createTransport = (): any => {
    return nodemailer.createTransport(transportOptions);
};

const sendMail: any = (to: [string] | string, subject: string, text: string) => new Promise((resolve, reject) => {

    to = Array.isArray(to) ? to.toString() : to;

    const mailOptions: IEmailOptions = {
        from: process.env.EMAIL_SENDER, to, subject, text
    };
    const transporter = _createTransport();

    return transporter.sendMail(mailOptions)
        .then(info => resolve(info))
        .catch(err => reject(err));
});

export default sendMail;