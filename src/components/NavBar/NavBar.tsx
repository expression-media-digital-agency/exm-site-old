import React from 'react';
import { Router } from 'routes';
import Link from 'next/link';
export interface INavBarProps {
  
}

const NavBar: React.SFC<INavBarProps> = ({

}) => {

  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand"><img className="img-fluid exm-logo" src="/static/img/png/exmlogo.png" alt="exm-logo"/></a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link href="/our-story">
                            <a className="nav-link">Our Story</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">Services</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact">
                            <a className="nav-link">Contact</a>
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
