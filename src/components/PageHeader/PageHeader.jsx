import React from "react";

import bg from "../../assets/footer-bg.jpg";
const PageHeader = (props) => {
   return (
      <div
         className="page-header relative mb-[2rem] bg-gradient-to-t from-body-bg to-black/0 bg-cover bg-top bg-no-repeat pt-header pb-[2rem] text-center after:absolute after:bottom-0 after:left-0 after:block after:h-full after:w-full"
         style={{ backgroundImage: `url(${bg})` }}
      >
         <h2 className="relative z-50 text-[1.5rem] font-bold md:text-[2rem]">
            {props.children}
         </h2>
      </div>
   );
};

export default PageHeader;
