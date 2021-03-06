import React from 'react';
import Link from 'next/link';
import FooterForm from '../Footer-form';
import { constants } from '../../constants/constants';

interface IFooterProps {

}

const Footer: React.SFC<IFooterProps> = ({}) => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <h3 className="footer-heading">Explore</h3>
                                <li>
                                    <Link href="/story">
                                        <a className="footer-text">Our Story</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio">
                                        <a className="footer-text">Portfolio</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services">
                                        <a className="footer-text">Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a className="footer-text">About Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a className="footer-text">Contact</a>
                                    </Link>
                                </li>
                                
                        </div>

                        <div className="col-sm-3">
                            <h3 className="footer-heading">Contact Us</h3>
                            <li className="footer-text">
                                exmdigital@gmail.com
                            </li>
                            <li className="footer-text">
                                {constants.CONTACT_NUMBER}
                            </li>
                            <li className="icons">
                                <span> <a href="https://www.facebook.com/exmdigitalagency/" target="_blank"><img src="/static/img/svg/facebookic.svg" alt="facebook"/></a></span>
                                <span><a href="https://www.instagram.com/exmdigital/" target="_blank"><img src="/static/img/png/instagramwhite.png" alt="instagram"/></a></span>
                                <span><a href="https://twitter.com/exmdigital" target="_blank"><img src="/static/img/svg/twitteric.svg" alt="twitter"/></a></span>
                            </li>
                        </div>

                        <div className="col-sm-2"></div>

                        <div className="col-sm-4">
                            <h3 className="footer-heading">We would love to hear from you</h3>
                            <FooterForm/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 text-center copyright">
                            <p className="footer-text "> &copy; Expression Media Digital Agency 2019 </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
