
import React from 'react';
import { Router } from 'routes';
import Link from 'next/link';

const MobileLogo: React.SFC<> = ({}) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-1 mobile-logo">
                        <Link href="/">
                            <img src="/static/img/svg/EXM Pry Logo.svg" className="img-fluid" alt=""/>
                        
                        </Link>
                    </div>
                    <div className="col-sm-11"></div>

                </div>
            </div>
              
        </div>
    );
};

export default MobileLogo;