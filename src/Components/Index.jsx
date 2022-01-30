import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import '../CSS/index.css';
const Index = () => {
    return (

        <div id='signUpLogInRow' className='row'>
            <div id='signUpLogInColumn' className='col-xs-10 col-sm-10 col-md-8 col-lg-6 mx-auto'>
                <div id='imgBrandNameContainer'>
                    <Link to='/'><img id='brandLogo' src={logo} alt="brand_logo" /></Link>
                    <span id='brandName'>Postsgram</span>
                </div>
                <p id='welcomeText'>Welcome!</p>
                <div id='signUpLogInBtnContainer'>
                    <button id='indexSignUpBtn' className='btns'><Link className='linkRoutes' to='signup'>SignUp <i className='fas fa-user-plus'></i></Link></button>
                    <button id='indexLogInBtn' className='btns'><Link className='linkRoutes' to='/login'>LogIn <i className="fas fa-sign-in-alt"></i></Link></button>
                </div>
            </div>
        </div>
    )
};

export default Index;
