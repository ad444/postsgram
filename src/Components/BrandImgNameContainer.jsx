import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';

const BrandImgNameContainer = (props) => {
    return (
        <>
            <div id='imgBrandNameContainer'>
                <Link to='/postsgram'><img id='brandLogo' src={logo} alt="brand_logo" /></Link>
                <span id='brandName'>Postsgram</span>
            </div>
            <p id='welcomeText'>{props.text} {props.userName}</p>
        </>
    )
};

export default BrandImgNameContainer;
