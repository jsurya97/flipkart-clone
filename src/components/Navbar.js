import  {React , useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

import { IoSearch } from "react-icons/io5";
import LoginModel from "./LoginModel/LoginModel";
import { useDispatch, useSelector } from "react-redux";
import supabase from "../supabase";
import { removeUser } from "../slices/userSlice";

const Navbar = () => {

    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false)

    const user = useSelector((state)=>state.userData.user)

    const signOut = async ()=>{
        const {error} = await supabase.auth.signOut()
        if(!error){
            dispatch(removeUser())
        }
    }

    useEffect(()=>{
        if(user){
            setIsOpen(false)
        }
    },[user])
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <Link to={"/"}>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="Flipcartlogo"
              className="navbar-logo"
            />
          </Link>
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search for Products,brands and more"
              className="navbar-searchbox"
            />
            <button className="searchbtn">
              <IoSearch />
            </button>
          </div>
         {user?(<h3 onClick={signOut}>@{user?.email.slice(0,10)}</h3>): (<button className="navbar-btn" onClick={()=>setIsOpen(true)}>Login</button>)}
          <div className="navbar-bcs">
            <h3>Become a Seller</h3>
          </div>
          <div className="navbar-more">
            <h3>
              More
              <i className="moredown">
                <MdKeyboardArrowDown />
              </i>
            </h3>
          </div>
          <div className="navbar-cart">
            <div className="cart-icon">
              <FaShoppingCart />
            </div>
            <Link to={"/cart"} className="cart">Cart</Link>
          </div>
        </div>
        <LoginModel isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    </>
  );
};

export default Navbar;
