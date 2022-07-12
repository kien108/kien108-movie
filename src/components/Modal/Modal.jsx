import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

const Modal = (props) => {
   const [active, setActive] = useState(false);
   const modalRef = useRef(null);

   const closeModal = () => {
      modalRef.current.classList.remove("active");
      if (props.onClose) props.onClose();
   };

   useEffect(() => {
      setActive(props.active);
   }, [props.active]);
   return (
      <div
         ref={modalRef}
         onClick={closeModal}
         id={props.id}
         className={`modal ${
            active ? "active" : ""
         } invisible fixed inset-0 flex items-center justify-center overflow-auto bg-black/40 opacity-0`}
      >
         {props.children}
      </div>
   );
};

Modal.propTypes = {
   active: PropTypes.bool,
   id: PropTypes.string,
   onClose: PropTypes.func,
};

export const ModalContent = (props) => {
   const contentRef = useRef(null);
   const closeModal = () => {
      contentRef.current.parentNode.classList.remove("active");
      if (props.onClose) props.onClose();
   };
   return (
      <div className="modal__content" ref={contentRef}>
         {props.children}
         <div
            className="r-[5px] absolute top-[2px] right-2 cursor-pointer text-[2rem] hover:text-main-color lg:right-4"
            onClick={closeModal}
         >
            <i className="bx bx-x"></i>
         </div>
      </div>
   );
};

ModalContent.propTypes = {
   onClose: PropTypes.func,
};
export default Modal;
