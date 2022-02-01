import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/index.css';
import BrandImgNameContainer from './BrandImgNameContainer';
const Index = () => {
    return (

        <div id='signUpLogInRow' className='row'>
            <div id='signUpLogInColumn' className='col-xs-10 col-sm-10 col-md-8 col-lg-6 mx-auto'>
                <BrandImgNameContainer text='Welcome!'/>
                <div id='signUpLogInBtnContainer'>
                    <button id='indexSignUpBtn' className='btns'><Link className='linkRoutes' to='/postsgram/signup'>SignUp <i className='fas fa-user-plus'></i></Link></button>
                    <button id='indexLogInBtn' className='btns'><Link className='linkRoutes' to='/postsgram/login'>LogIn <i className="fas fa-sign-in-alt"></i></Link></button>
                </div>
            </div>
        </div>
    )
};

export default Index;
