import React from "react";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer
         className="footer relative bg-cover bg-top bg-no-repeat px-[2rem] py-[6rem]"
         style={{ backgroundImage: `url(${bg})` }}
      >
         <div className="footer__content container w-[1000px]">
            <div className="footer__content__logo">
               <Link
                  style={{ display: "inline-flex" }}
                  to="/"
                  className="flex w-full items-center justify-center text-[28px] font-semibold md:text-[30px] lg:text-[2.3rem]"
               >
                  <div className="relative top-[-10px] mr-[-10px] w-[100px]">
                     <img className="object-cover" src={logo} alt="" />
                  </div>
                  <span>kMovies</span>
               </Link>
            </div>
            <div className="footer__content__menus grid grid-cols-2 gap-[20px] md:grid-cols-3 md:gap-0">
               <div className="footer__content__menu mt-[1rem] flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] font-semibold md:gap-[1rem] md:text-[1.5rem]">
                  <Link to="/">Home</Link>
                  <Link to="/">Contact us</Link>
                  <Link to="/">Term of services</Link>
                  <Link to="/">About us</Link>
               </div>
               <div className="footer__content__menu mt-[1rem] flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] font-semibold md:gap-[1rem] md:text-[1.5rem]">
                  <Link to="/">Live</Link>
                  <Link to="/">FAQ us</Link>
                  <Link to="/">Premium</Link>
                  <Link to="/">Private policy</Link>
               </div>
               <div className="footer__content__menu mt-[1rem] flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] font-semibold md:gap-[1rem] md:text-[1.5rem]">
                  <Link to="/">You must watch</Link>
                  <Link to="/">Recent release</Link>
                  <Link to="/">Top IMOB</Link>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
