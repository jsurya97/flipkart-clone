import  {React , useEffect, useState} from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Products from "./pages/Products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import supabase from "./supabase";
import { setUser } from "./slices/userSlice";
import Cart from "./pages/Cart/Cart";


const App = () => {

  const dispatch = useDispatch();
  const getUser = async()=>{
    const {data,error} = await supabase.auth.getSession();
    if(data.session){

      dispatch(setUser(data.session.user));
    }
  }

    useEffect(() => {
      getUser()
    }, []);

  return (
    
    <div>
     
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
};

export default App;
