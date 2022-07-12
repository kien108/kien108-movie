import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import tmdbApi from "../api/tmdbApi";
import apiConfig from "../api/apiConfig";
import CastsList from "../components/CastsList/CastsList";
import VideosLists from "../components/VideosList/VideosLists";
import MoviesList from "../components/Movies-List/MoviesList";

const Detail = (props) => {
   const { category, id } = useParams();
   const [item, setItem] = useState(null);

   useEffect(() => {
      const getDetail = async () => {
         let params = {};
         try {
            let res = await tmdbApi.detail(category, id, params);
            setItem(res);
            window.scrollTo(0, 0);
         } catch (error) {
            console.log(error.message);
         }
      };
      getDetail();
   }, [category, id]);

   return (
      <>
         {item && (
            <>
               <div
                  className="banner ${props.className} relative h-[50vh] w-full bg-cover bg-center bg-no-repeat py-[7rem] before:absolute before:top-0 before:left-0 before:block before:h-full before:w-full before:bg-black/40 after:absolute after:bottom-0 after:left-0 after:block after:h-full after:w-full after:bg-gradient-to-t after:from-body-bg after:to-black/0 md:h-[50vh] lg:py-[10rem] super-sm:h-[43vh]"
                  style={{
                     backgroundImage: `url(${apiConfig.originalImage(
                        item.backdrop_path || item.poster_path
                     )})`,
                  }}
               ></div>
               <div className="movie-content container  relative mb-[3rem] mt-[-100px] flex w-[1260px] items-center lg:mt-[-200px]">
                  <div className="movie-content__poster hidden flex-1 md:block">
                     <div
                        className="movie-content__poster__img aspect-[3/4.3] w-full rounded-default bg-cover bg-center bg-no-repeat"
                        style={{
                           backgroundImage: `url(${apiConfig.originalImage(
                              item.backdrop_path || item.poster_path
                           )})`,
                        }}
                     ></div>
                  </div>
                  <div className="movie-content__info relative flex w-[100%] flex-col gap-[2rem] pl-0  md:pl-[2rem] lg:w-[70%]">
                     <h1 className="title text-[2.5rem] leading-[2rem] md:text-[4rem] md:leading-[4rem]">
                        {item?.title || item?.name}
                     </h1>
                     <div className="genres flex flex-wrap items-center gap-[10px]">
                        {item?.genres?.length > 0 &&
                           item.genres.slice(0, 5).map((genre, i) => (
                              <span
                                 key={i}
                                 className="block rounded-default border-[2px] border-white bg-body-bg px-[1.5rem] py-[0.5rem] text-[0.8rem] font-semibold"
                              >
                                 {genre?.name}
                              </span>
                           ))}
                     </div>
                     <p className="overview max-lines text-[14px] text-gray-100 line-clamp-5 lg:text-[16px]">
                        {item?.overview}
                     </p>
                     <div className="cast justify-self-end">
                        <div className="section__header">
                           <h2 className="mb-[10px] font-semibold">Casts</h2>
                        </div>
                        <CastsList id={id} />
                     </div>
                  </div>
               </div>
               <div className="container mt-0 md:mt-[100px] lg:max-w-[70%]">
                  <div className="section mb-[3rem]">
                     <VideosLists id={id} />
                  </div>
               </div>
               <div className="container mb-[3rem] w-[1260px]">
                  <div className="section__header mb-[2rem]">
                     <h2 className="min-w-max text-[16px] font-semibold md:text-[24px]">
                        Similar
                     </h2>
                  </div>
                  <MoviesList category={category} type="similar" id={id} />
               </div>
            </>
         )}
      </>
   );
};

export default Detail;
