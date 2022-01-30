import React, {useState} from 'react';
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom';
import '../CSS/signup.css';
import logo from '../Images/logo.png';
import ErrorDisplayBox from './ErrorDisplayBox';

const SignUp = () => {
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

    //state for errorDisplay box
    const [errorBoxDisplay, seterrorBoxDisplay] = useState(false);

    const setData = (e)=>{
        setdata((prev)=>{
           return {
               ...prev,
               [e.target.name]:e.target.value
           }
        })
    }

    const checkIndividualValueValidation = (e) =>{
        let value = e.target.value;
        let name = e.target.name;
        
        let pattName = /^[A-z]+\s[A-z]+$/;
        let pattEmail = /^\w+@[a-z.A-Z]+\.[a-zA-Z]{2,3}$/;
        let pattPassword = /^[A-z]{6}[0-9]{4}\W{2}$/;
        
        if(name === 'name'){
            if(!pattName.test(value) || value ===''){
                seterrorMessage((prev)=>{
                    return {
                       ...prev,
                       nameMessage:'Enter valid name'
                    }
                })
             }else{
                 seterrorMessage((prev)=>{
                     return {
                        ...prev,
                        nameMessage:''
                     }
                 })
             }
        }
        if(name === 'email'){
            if(!pattEmail.test(value) || value === ''){
                seterrorMessage((prev)=>{
                    return {
                       ...prev,
                       emailMessage:'Enter valid email for ex:abc@gmail.com'
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
                       passwordMessage:'Password must contain 6 characters, 4 digits & 2 special characters'
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

    const Validator = (name, email, password)=>{
        let nameerror, emailerror, passworderror = false;

        let pattName = /^[A-z]+\s[A-z]+$/;
        let pattEmail = /^\w+@[a-z.A-Z]+\.[a-zA-Z]{2,3}$/;
        let pattPassword = /[A-z]{6}[0-9]{4}\W{2}/;
        
        if(!pattName.test(name) || name===''){
           seterrorMessage((prev)=>{
               return {
                  ...prev,
                  nameMessage:'Enter valid name'
               }
           })
           nameerror = true;
        }else{
            seterrorMessage((prev)=>{
                return {
                   ...prev,
                   nameMessage:''
                }
            })
            nameerror = false;
        }
        if(!pattEmail.test(email) || email===''){
           seterrorMessage((prev)=>{
               return {
                  ...prev,
                  emailMessage:'Enter valid email for ex:abc@gmail.com'
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
                  passwordMessage:'Password must contain 6 characters, 4 digits & 2 special characters'
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

        if(nameerror === false && emailerror === false && passworderror === false){
           let userData = JSON.parse(localStorage.getItem('user'));
           if(userData.email !== null && userData.email === data.email){
             seterrorBoxDisplay(true);
           }else{
            localStorage.setItem('user', JSON.stringify(data));
            history.push('/postsgram/home');
           }
        }
    }

    const submitData = (e)=>{
        e.preventDefault();
        Validator(data.name, data.email, data.password);
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
                    <p id='signUpFormTitleText'>SignUp</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-xs-10 col-sm-8 col-md-8 col-lg-6 mx-auto'>
                    <form onSubmit={submitData}>
                        <div className="form-group">
                            <label htmlFor="exampleInputName1">Name</label>
                            <input onChange={setData} onBlur={checkIndividualValueValidation} name='name' type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter your name" />
                            <div className="validationMessage" id="userNameValidationMessage">{errorMessage.nameMessage}</div>
                        </div>
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
                        <button type="submit" className='btns'>Sign Up</button><span id="loginQuestion">Already a user?</span><Link to="/postsgram/login" id="loginLink">Log In</Link>
                    </form>
                    {/* Error display box */}
                    {
                        errorBoxDisplay === true &&
                        <ErrorDisplayBox message={'There is already a user with these information'} closeDisplayBox={closeDisplayBox} navigate={'login'}/>
                    }
                </div>
            </div>
            
        </>
    )
};

export default SignUp;
