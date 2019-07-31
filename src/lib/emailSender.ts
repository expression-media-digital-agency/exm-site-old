import mailgun from 'mailgun.js';
import { config } from '../config/index';
import { constants, responseMessages } from '../constants/constants';

const domain = config.mailgunDomainName;
const apiKey = config.mailgunApiKey;

const mg = mailgun.client({
    username: 'api',
    key: apiKey,
});

interface IEmailData {
    from: string;
    subject: string;
    to: string,
    text: string;
}

interface IEmailError {
    error: object,
    message: string,
    status: string | number,
}

interface IEmailFormData {
    name: string | undefined;
    email: string;
    message: string;
    company: string | undefined;
    address: string | undefined;

}

export const sendMail = async (to: string, message: string, subject: string, from: string) => {

    const data: IEmailData = {
        from,
        subject,
        to,
        text: message
    };

    try {
        const body = await mg.messages.create(domain, data);
        if (body) {
            return { message: responseMessages.MAILS_SENT, data: body.message, code: 200 };
        } else {
            return {
                error: {},
                message: responseMessages.MAIL_NOT_SENT,
                status: 503
            };
        }
    } catch (err) {
        const error: IEmailError = {
            error: err.stack,
            message: err.message,
            status: err.status
        };
        return error;
    }
}

export const handleContact = (data: IEmailFormData) => {
    const { email, message, name, company, address } = data;
    const { exmEmail } = config;
    const emailContent = formatContactEmailFromPageParams(email, message, name, company, address);
    return sendMail(exmEmail, emailContent, constants.CONTACT_SUBJECT, exmEmail);
}

const formatContactEmailFromPageParams = (email: string, message: string, name: string | undefined,
    company: string | undefined, address: string | undefined): string => {

    const formattedText = `
        ${message}

        Name: ${name}
        Email: ${email}
        Company: ${company}
        Address: ${address}
        `;

    return formattedText;
}
