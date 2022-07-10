import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import Button from "../Button/Button";

import apiConfig from "../../api/apiConfig";
const MovieCard = (props) => {
   const { item, category } = props;

   const link = `/${category}/${item.id}`;
   const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
   return (
      <Link to={link}>
         <div
            className="movie-card group relative aspect-[3/4] w-full rounded-[10px] !bg-cover !bg-top !bg-no-repeat before:absolute before:inset-0 before:block before:rounded-[10px] before:bg-black before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-80 md:rounded-default before:md:rounded-default"
            style={{ background: `url(${bg})` }}
         >
            <Button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-0 !rounded-full !py-[10px] !px-[12px] transition-all duration-300 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:scale-100">
               <i className="bx bx-play"></i>
            </Button>
         </div>
         <h3 className="max-lines mt-[4px] text-[15px] font-semibold md:text-[16px]">
            {item.title || item.name}
         </h3>
      </Link>
   );
};

MovieCard.propTypes = {
   item: PropTypes.object.isRequired,
   category: PropTypes.string,
};

export default MovieCard;
