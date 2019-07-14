import React from 'react';
import Link from 'next/link';

interface ICreateSolutionProps {

}

const CreateSolution: React.SFC<ICreateSolutionProps> = ({}) => {
    return (
        <div>
            <section className="solution">
            <div className="container">
                <div className="row">
                <div className="col-sm-9">
                    <h4 className="heading">Need to Create a Solution? <p className="paragraph-one">Lets discuss your next project</p></h4>
                    <p className="paragraph-two">Our team of creatives are ready to help, you can click on
    the button to get started.</p>
                </div>
                <div className="col-sm-3">
                    <Link href="/contact">
                    <a className="btn-get-started-two hvr-shadow-radial">
                        Get Started
                    </a>
                    </Link>
                    
                </div>
                </div>
            </div>
            </section>
        </div>
    );
};

export default CreateSolution;
