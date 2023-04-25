import { React, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlice";
import supabase from "../../supabase";
import "./LoginModel.css"

const LoginModel = ({ isOpen, setIsOpen }) => {

    const dispatch = useDispatch()
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loginType, setLoginType] = useState(true);

  const signup = async()=>{
    const {data,error}=await supabase.auth.signUp({
        email,
        password
    })
    if(data.user){
        alert("Account created please verify your email.")
    }
    console.log(data,error)
  }

  const login = async()=>{
    const {data,error}=await supabase.auth.signInWithPassword({
        email,
        password
    })
    console.log(data,error);
    if(error){
        alert(error?.message);
        return
    }
    dispatch(setUser(data.user))
  }

  return isOpen ? (
    
    <div className="overlay">
      <div className="LoginModel">
        <div className="left">
          <div className="left-container">
            <p className="Login-title">Login</p>
            <p className="Login-des">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
        </div>
        <div className="right">
          <input
            type="email"
            className="Login-input"
            placeholder="Enter Email "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="Login-input"
            placeholder="Enter Password "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="termsandcon">By continuing, you agree to Flipkart's 
          <span style={{color:"blue"}}>Terms of Use</span> and <span style={{color:"blue"}}>Privacy Policy.</span>
          </p>
          {loginType?(<button className="Login-btn" onClick={login}>Login</button>):<button onClick={signup} className="Login-btn">Sign Up</button>}
          {loginType ? (
            <p className="Login-signup" onClick={()=>setLoginType(false)} >
              New to Flipkart? Create an account
            </p>
          ) : (
            <p className="Login-signup" onClick={()=>setLoginType(true)}>
              Already an user? Login to an account
            </p>
          )}
        </div>
        <div className="close" onClick={()=>setIsOpen(false)}><RxCross2 /></div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default LoginModel;
