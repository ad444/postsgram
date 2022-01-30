import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import logo from '../Images/logo.png';
import Dashboard from '../Images/dashboard.jpg';
import KYC from '../Images/KYC.jpg';
import '../CSS/home.css';

const Home = () => {
  let history = useHistory();
  
  const goBack = () =>{
    history.goBack();
  }
  return (
      <>
        <div className='row'>
         <i onClick={goBack} id='backArrow' className='fas fa-arrow-left'></i>
            <div id='homeHeader' className='col-12'>
                <div id='imgBrandNameContainer'>
                    <Link to='/'><img id='brandLogo' src={logo} alt="brand_logo" /></Link>
                    <span id='brandName'>Postsgram</span>
                </div>
                <p id='welcomeText'>Hello {JSON.parse(localStorage.getItem('user')).name}!!</p>
            </div>
        </div>
        <div className='row'>
           
            <div id='card' className='col-10 col-xs-10 col-sm-10 col-md-5 col-lg-5 mx-auto'>
              <Link className='routingLinks' to='/dashboard'>
                <p className='cardTitle'>Dashboard</p>
                <div className='cardImgContainer'>
                    <img src={Dashboard} alt="dashboard_image" />
                </div>
              </Link>
            </div>
           
         
            <div id='card' className='col-10 col-xs-10 col-sm-10 col-md-5 col-lg-5 mx-auto'>
              <Link className='routingLinks' to='/kyc'>
                <p className='cardTitle'>KYC</p>
                <div className='cardImgContainer'>
                    <img src={KYC} alt="KYC_image" />
                </div>
              </Link>
            </div>
           
        </div>
      </>
  )
};

export default Home;
