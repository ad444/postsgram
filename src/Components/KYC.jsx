import React from 'react';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import logo from '../Images/logo.png';
import '../CSS/kyc.css';
const KYC = () => {

    let history = useHistory();

        const connectWithBlockpass = () => {
            try{
            const blockpass = new window.BlockpassKYCConnect(
                'testing_491a8',
                {
                    env: 'prod',
                    refId: JSON.parse(localStorage.getItem('user')).email
                })
    
            blockpass.startKYCConnect()
    
            blockpass.on('KYCConnectSuccess', () => {
                //add code that will trigger when data have been sent. ex:
                alert('Success!');
            })
    
            blockpass.on('KYCConnectClose', () => {
                //add code that will trigger when the workflow is finished. ex:
                alert('Finished!');
            })
    
            blockpass.on('KYCConnectCancel', () => {
                //add code that will trigger when the workflow is aborted. ex:
                alert('Cancelled!');
            })}catch(error){
                console.log(error);
            }
        }
    
        const goBack = () =>{
           history.goBack();
        }
    return (
        <>
            <div className='row'>
            <i onClick={goBack} id='backArrow' className='fas fa-arrow-left'></i>
                <div id='dashboardHeader' className='col-12'>
                    <div id='imgBrandNameContainer'>
                        <Link to='/postsgram'><img id='brandLogo' src={logo} alt="brand_logo" /></Link>
                        <span id='brandName'>Postsgram</span>
                    </div>
                    <p id='kycText'>Complete Your KYC {JSON.parse(localStorage.getItem('user')).name}</p>
                </div>
            </div>
            <button className='kycBtn' id="blockpass-kyc-connect" onClick={connectWithBlockpass}>Complete Your KYC</button>
            <p id='kycPageGoBackLink'>
              <span onClick={goBack}>Go Back</span>
            </p>
        </>
    )
};

export default KYC;
