import React from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
const headerNav = [
   {
      display: "Home",
      path: "/",
   },
   { display: "Movies", path: "/movie" },
   { display: "TV Series", path: "/tv" },
];
const Header = () => {
   const { pathname } = useLocation();
   const headerRef = useRef(null);

   const active = headerNav.findIndex((e) => e.path === pathname);

   useEffect(() => {
      const shrinkHeader = () => {
         if (
            document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100
         ) {
            headerRef.current.classList.add("header--shrink");
         } else {
            headerRef.current.classList.remove("header--shrink");
         }
      };

      window.addEventListener("scroll", shrinkHeader);

      return () => window.removeEventListener("scroll", shrinkHeader);
   }, []);

   return (
      <header
         ref={headerRef}
         className="fixed top-0 left-0 z-40 w-full py-[2rem]  transition duration-300 lg:py-[1rem]"
      >
         <div className="container flex items-center justify-center md:justify-between">
            <Link
               style={{ display: "inline-flex" }}
               to="/"
               className="inline-flex items-center text-[28px] font-semibold md:text-[30px] lg:text-[2.3rem] "
            >
               <div className="relative top-[-10px] mr-[-10px] w-[100px]">
                  <img className="object-cover" src={logo} alt="" />
               </div>
               <span>kMovies</span>
            </Link>
            <nav className="fixed bottom-0 left-0 flex w-full items-center justify-between gap-[2rem] bg-[#0f0f0f] p-3 shadow-sm md:static md:w-auto md:bg-transparent md:shadow-none">
               {headerNav.map((item, index) => (
                  <li
                     key={index}
                     className={`${
                        index === active ? "active" : ""
                     } relative block text-[15px] font-bold after:absolute after:bottom-0 after:left-[50%] after:block after:h-[2px] after:w-0 after:translate-x-[-50%] after:bg-main-color after:transition-all after:duration-500 hover:after:w-full md:text-[18px] lg:text-[1.5rem]`}
                  >
                     <Link className="block h-full p-[5px]" to={item.path}>
                        {item.display}
                     </Link>
                  </li>
               ))}
            </nav>
         </div>
      </header>
   );
};

export default Header;
