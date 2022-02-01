import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import dashboard from '../Images/dashboard.jpg';
import kyc from '../Images/kyc.jpg';
import '../CSS/home.css';
import BrandImgNameContainer from './BrandImgNameContainer';

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
              <BrandImgNameContainer text='Welcome,' userName={JSON.parse(localStorage.getItem('user')).name + '!'}/>
            </div>
        </div>
        <div className='row'>
           
            <div id='card' className='col-10 col-xs-10 col-sm-10 col-md-5 col-lg-5 mx-auto'>
              <Link className='routingLinks' to='/postsgram/dashboard'>
                <p className='cardTitle'>Dashboard</p>
                <div className='cardImgContainer'>
                    <img src={dashboard} alt="dashboard_image" />
                </div>
              </Link>
            </div>
           
         
            <div id='card' className='col-10 col-xs-10 col-sm-10 col-md-5 col-lg-5 mx-auto'>
              <Link className='routingLinks' to='/postsgram/kyc'>
                <p className='cardTitle'>KYC</p>
                <div className='cardImgContainer'>
                    <img src={kyc} alt="KYC_image" />
                </div>
              </Link>
            </div>
           
        </div>
      </>
  )
};

export default Home;
