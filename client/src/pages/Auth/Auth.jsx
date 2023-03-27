import React, { useState } from 'react';
import './Auth.css';
import {useDispatch, useSelector} from 'react-redux'; 
import { logIn, signUp } from '../../Actions/AuthAction';


const Auth = () => {
    const dispatch=useDispatch()
    const loading=useSelector((state)=>state.authReducer.loading)
    const [isSignUp,setIsSignUp]=useState(true);
    console.log(loading);
    const [data,setData]=useState({firstname:"",lastname:"",password:"",confirmpassword:"",username:""});
    const[confirmpass,setConfirmpass]=useState(true);
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(isSignUp){
            data.password===data.confirmpassword ? dispatch(signUp(data)):setConfirmpass(false);
        }else{
            dispatch(logIn(data));
        }
    }
    const resetForm=()=>{
        setConfirmpass(true);
        setData(
            {firstname:"",lastname:"",password:"",confirmpassword:"",username:""}
        )
    }
    return (
    <div className='Auth'>
        {/*Left SIde*/}
        <div className="left">
            <div className="appname">
                <h1>Let's Social</h1> 
                <h6>Explore the world</h6>
            </div>
        </div>
        {/*Right Side*/}
        <div className="auth-right">
            <form className='infoform auth-form' onSubmit={handleSubmit}>
                <h3>{isSignUp ? "Sign Up":"Log In"}</h3>
                {isSignUp && <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstname'onChange={handleChange} value={data.firstname}/>
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastname'onChange={handleChange} value={data.lastname}/>

                </div>
                }
                
                <div>
                <input type="text" placeholder='Username' className='infoInput user' name='username'onChange={handleChange} value={data.username}/>
                </div>
                <div>
                <input type="password" placeholder='Password' className='infoInput' name='password'onChange={handleChange} value={data.password}/>
                {isSignUp && <input type="password" placeholder='Confirm Password' className='infoInput' name='confirmpassword'onChange={handleChange} value={data.confirmpassword}/>}
                </div>
                <div>
                    <span style={{display: confirmpass? 'none':"block",color:"red",fontSize:"12px",alignSelf:"flex-end",marginLeft:"5px"}}>
                        * Confirm Password is not same
                    </span>
                </div>
                <div>
                    <span style={{fontSize:'12px',cursor:"pointer"}} onClick={()=>{setIsSignUp((prev)=>!prev);resetForm()}}> {isSignUp ? "Already Have an account. Login":"Don't have an account. SignUp"} </span>
                </div>
                <button className='button i-button' type='submit' disabled={loading}>
                    {loading? 'Loading ...': isSignUp ? "SignUp":"Login"}
                </button>
            </form>
        </div>
       
    </div>
  )
}



export default Auth