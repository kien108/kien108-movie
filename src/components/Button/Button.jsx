import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
   return (
      <button className={`${props.className} btn`} onClick={props.onClick}>
         {props.children}
      </button>
   );
};

export const OutlineButton = (props) => {
   return (
      <Button
         className={`${props.className} btn-outline`}
         onClick={props.onClick ? props.onClick : null}
      >
         {props.children}
      </Button>
   );
};

Button.propTypes = {
   onClick: PropTypes.func,
};
export default Button;
