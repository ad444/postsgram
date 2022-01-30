import React, {useState} from 'react';
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom';
import '../CSS/signup.css';
import logo from '../Images/logo.png';
import ErrorDisplayBox from './ErrorDisplayBox';

const LogIn = () => {
     //calling history api here..
     const history = useHistory();

    //setting user sign up data
    const [data, setdata] = useState({
        name:"",
        email:"",
        password:""
    })

    //error validation message
    const [errorMessage, seterrorMessage] = useState({
        nameMessage:'',
        emailMessage:'',
        passwordMessage:''
    })

    const setData = (e)=>{
        setdata((prev)=>{
           return {
               ...prev,
               [e.target.name]:e.target.value
           }
        })
    }

    //state for errorDisplay box
    const [errorBoxDisplay, seterrorBoxDisplay] = useState(false);

    const checkIndividualValueValidation = (e) =>{
        let value = e.target.value;
        let name = e.target.name;
        
        let pattEmail = /^\w+@[a-z.A-Z]+\.[a-zA-Z]{2,3}$/;
        let pattPassword = /^[A-z]{6}[0-9]{4}\W{2}$/;
        
        if(name === 'email'){
            if(!pattEmail.test(value) || value === ''){
                seterrorMessage((prev)=>{
                    return {
                       ...prev,
                       emailMessage:'Enter valid email'
                    }
                })       
             }else{
                 seterrorMessage((prev)=>{
                     return {
                        ...prev,
                        emailMessage:''
                     }
                 })
             }
        }
        if(name === 'password'){
            if(!pattPassword.test(value) || value ===''){
                seterrorMessage((prev)=>{
                    return {
                       ...prev,
                       passwordMessage:'Enter valid password'
                    }
                })
             }else{
                 seterrorMessage((prev)=>{
                     return {
                        ...prev,
                        passwordMessage:''
                     }
                 })
             }
        }
    }

    const Validator = (email, password)=>{
        let emailerror, passworderror = false;

        let pattEmail = /^\w+@[a-z.A-Z]+\.[a-zA-Z]{2,3}$/;
        let pattPassword = /[A-z]{6}[0-9]{4}\W{2}/;
        
        if(!pattEmail.test(email) || email===''){
           seterrorMessage((prev)=>{
               return {
                  ...prev,
                  emailMessage:'Enter valid email'
               }
           })       
           emailerror = true;
        }else{
            seterrorMessage((prev)=>{
                return {
                   ...prev,
                   emailMessage:''
                }
            })
            emailerror = false;
        }
        if(!pattPassword.test(password || password==='')){
          seterrorMessage((prev)=>{
               return {
                  ...prev,
                  passwordMessage:'Enter valid password'
               }
           })
           passworderror = true;
        }else{
            seterrorMessage((prev)=>{
                return {
                   ...prev,
                   passwordMessage:''
                }
            })
            passworderror = false;
        }

        if(emailerror === false && passworderror === false){
            
           let userData = JSON.parse(localStorage.getItem('user'));
           
           if(userData.email !== data.email || userData.password !== data.password || userData === null){
                seterrorBoxDisplay(true);
           }else{
            history.push('/postsgram/home');
           }
        }
    }

    const submitData = (e)=>{
        e.preventDefault();
        Validator(data.email, data.password);
    }

    //function to close errorDisplay box
    const closeDisplayBox = ()=>{
        seterrorBoxDisplay(false);
    }

    return (
        <>
            <div className='row'>
                <div id='signUpFormHeader' className='col-12'>
                    <div id='imgBrandNameContainer'>
                       <Link to='/postsgram'><img id='brandLogo' src={logo} alt="brand_logo" /></Link>
                        <span id='brandName'>Postsgram</span>
                    </div>
                    <p id='signUpFormTitleText'>Log In</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-xs-10 col-sm-8 col-md-8 col-lg-6 mx-auto'>
                    <form onSubmit={submitData}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input onChange={setData} onBlur={checkIndividualValueValidation} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                            <div className="validationMessage" id="userEmailValidationMessage">{errorMessage.emailMessage}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input onChange={setData} onBlur={checkIndividualValueValidation} name='password' type="password" className="form-control" id="exampleInputPassword1" placeholder="Create password here" />
                            <div className="validationMessage" id="userPasswordValidationMessage">{errorMessage.passwordMessage}</div>
                        </div>
                        <button type="submit" className='btns'>LogIn</button><span id="loginQuestion">Are you a new user?</span><Link to="/postsgram/signup" id="loginLink">Sign Up</Link>
                    </form>
                    {/* Error display box */}
                    {
                        errorBoxDisplay === true &&
                        <ErrorDisplayBox message={'Sorry, there is no user with these information'} closeDisplayBox={closeDisplayBox} navigate={'signup'}/>
                    }
                </div>
            </div>
        </>
    )
};

export default LogIn;

