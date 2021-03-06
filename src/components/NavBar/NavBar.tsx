import React from 'react';
import { Router } from 'routes';
import Link from 'next/link';
import NavBarMobile from 'components/NavBarMobile';
interface INavBarState {
  
}

const NavBar: React.SFC<INavBarState> = ({

}) => {

  return (
    <div>
        <nav className="navbar navbar-expand-lg fixed-top animated fadeInDown delay-1s">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand animated fadeInLeft delay-1s"><img className="img-fluid-logo exm-logo" src="/static/img/svg/EXM Pry Logo.svg" alt="exm-logo"/></a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">menu</span>
                </button>

                <div className="collapse topnav navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto animated fadeInDown delay-2s">
                    <li className="nav-item active">
                        <Link href="/story">
                            <a className="nav-link hvr-bob">Our Story</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/portfolio">
                            <a className="nav-link hvr-bob">Portfolio</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/services">
                            <a className="nav-link hvr-bob">Services</a>
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link href="/about">
                            <a className="nav-link hvr-bob">About</a>
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
        <div className="navbar-mobile">
            <NavBarMobile/>
        </div>
    </div>
  );
};

export default NavBar;
