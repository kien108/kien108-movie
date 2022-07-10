import React from "react";

const Input = (props) => {
   return (
      <input
         {...props}
         className={`rounded-default border-0 bg-black px-[1.5rem] py-[0.5rem] font-mon text-txt-color ${props.className}`}
      />
   );
};

export default Input;
