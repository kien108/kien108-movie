import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";

import tmdbApi from "../../api/tmdbApi";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = (props) => {
   const { category, type, id } = props;

   const [items, setItems] = useState([]);

   useEffect(() => {
      let res = null;
      let params = {};
      const fetchListVideos = async () => {
         try {
            if (type !== "similar") {
               switch (category) {
                  case "movie": {
                     res = await tmdbApi.getMoviesList(type, params);
                     break;
                  }

                  default:
                     res = await tmdbApi.getTvList(type, params);
                     break;
               }
            } else {
               res = await tmdbApi.similar(category, id);
            }
            setItems(res.results);
         } catch (error) {
            console.log(error.message);
         }
      };

      fetchListVideos();
   }, []);
   return (
      <div className="movie-list">
         <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
            {items?.length > 0 &&
               items.map((item, index) => (
                  <SwiperSlide
                     key={index}
                     className="!w-[40%] overflow-hidden md:!w-[30%] lg:!w-[16.6667%]"
                  >
                     <MovieCard item={item} category={category} />
                  </SwiperSlide>
               ))}
         </Swiper>
      </div>
   );
};

MoviesList.propTypes = {
   category: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
};

export default MoviesList;
