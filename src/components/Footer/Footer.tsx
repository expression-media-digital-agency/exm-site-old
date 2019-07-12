import React from 'react';
import Link from 'next/link';
import FooterForm from '../Footer-form';

interface IFooterProps {

}

const Footer: React.SFC<IFooterProps> = ({}) => {
    return (
        <footer className="footer">
            <div className="container footer-padding-top">
                <div className="row">
                    <div className="col-sm-3 footer-text-white">
                        <h3>Explore</h3>
                        <div className="footer-explore">
                            <div className="d-block">
                                <Link href="#">
                                    <a>Portfolio</a>
                                </Link>
                            </div>
                            <div className="d-block">
                                <Link href="#">
                                    <a>Careers</a>
                                </Link>
                            </div>
                            <div className="d-block">
                                <Link href="/about">
                                    <a>About Us</a>
                                </Link>
                            </div>
                            <div className="d-block">
                                <Link href="#">
                                    <a>Term of Service</a>
                                </Link>
                            </div>
                            <div>
                                <Link href="d-block">
                                    <a>Help</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 footer-text-white">
                        <h3>Contact Us</h3>
                        <div className="d-block">
                            hi@expressionmedia.com
                        </div>
                        <div className="d-block">
                            +234 500 500 5000
                        </div>
                        <div className="d-block">
                            +234 500 500 5000
                        </div>
                        <div className="d-block">
                            {/*icons*/}
                        </div>
                    </div>

                    <div className="col-sm-3"></div>

                    <div className="col-sm-3">
                        <span>We would love to hear from you</span>
                        <FooterForm/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
