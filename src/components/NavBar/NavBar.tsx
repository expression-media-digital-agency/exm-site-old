import React from 'react';
import { Router } from 'routes';
import Link from 'next/link';
export interface INavBarProps {
  
}

const NavBar: React.SFC<INavBarProps> = ({

}) => {

  return (
    <div>
        <nav className="navbar navbar-expand-lg animated fadeInDown delay-1s">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand animated fadeInLeft delay-1s"><img className="img-fluid-logo exm-logo" src="/static/img/png/primarysingle.png" alt="exm-logo"/></a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav animated fadeInDown delay-2s">
                    <li className="nav-item active">
                        <Link href="/story">
                            <a className="nav-link hvr-bob">Our Story</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link hvr-bob">Services</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact">
                            <a className="nav-link hvr-bob">Contact</a>
                        </Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default NavBar;
