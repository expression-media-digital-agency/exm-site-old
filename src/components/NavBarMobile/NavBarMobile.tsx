import React from 'react';
import { Router } from 'routes';
import Link from 'next/link';
interface INavBarMobileState {
  
}

const NavBarMobile: React.SFC<INavBarMobileState> = ({

}) => {

  return (
    <div>
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon">
                    
                </span>
            </label>

            <div className="navigation__background">
                &nbsp;
            </div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <Link href="/story" >
                        <a className="navigation__link">Our Story</a>

                        </Link>
                    </li>

                    <li className="navigation__item">
                        <Link href="/portfolio" >
                        <a className="navigation__link">Portfolio</a>

                        </Link>
                    </li>

                    <li className="navigation__item">
                        <Link href="/services">
                        <a  className="navigation__link">Services</a>
                        
                        </Link>
                    </li>

                    <li className="navigation__item"> 
                        <Link href="/about">
                        <a  className="navigation__link">About</a>
                        </Link>
                             
                    </li>

                    <li className="navigation__item">
                        <Link href="/contact">
                            <a className="navigation__link">Contact</a>
                        
                        </Link>
                    </li>
                        
                </ul>
            </nav>
        </div>
    </div>
  );
};

export default NavBarMobile;
