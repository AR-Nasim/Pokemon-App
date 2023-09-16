import React from 'react';
import './Header.css';
import bgImage from '../../images/bg-image.jpg'; //importing for background image

const Header = () => {
    return (
        // Header starts here
        <div className="header" style={{backgroundImage: `url(${bgImage})`}} alt="Background Image">
            <div className="img-opacity"></div>
            <div className="heading">
                <h1 className="text-custom title">Pokemon World</h1>
                <h4>Gotta catch 'em all!</h4>
                <p>Build your pokemon army with all the greatest pokemon cards and win amazing prizes every week.</p>
                <h3>Maximum Value: <span className="text-custom">$100</span></h3>
            </div>
        </div>
    );
};

export default Header;