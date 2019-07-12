import React from 'react';
import Link from 'next/link';
import FooterForm from '../Footer-form';

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
                                    <Link href="#">
                                        <a className="footer-text">Portfolio</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="footer-text">Careers</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a className="footer-text">About Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="footer-text">Term of Service</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a className="footer-text">Help</a>
                                    </Link>
                                </li>
                        </div>

                        <div className="col-sm-3">
                            <h3 className="footer-heading">Contact Us</h3>
                            <li className="footer-text">
                                hi@expressionmedia.com
                            </li>
                            <li className="footer-text">
                                +234 500 500 5000
                            </li>
                            <li className="footer-text">
                                +234 500 500 5000
                            </li>
                            <li className="">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </li>
                        </div>

                        <div className="col-sm-2"></div>

                        <div className="col-sm-4">
                            <h3 className="footer-heading">We would love to hear from you</h3>
                            <FooterForm/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <p className="footer-text"> &copy; expression media digital agency 2019 </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
