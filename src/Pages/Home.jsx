import React from "react";
import { OutlineButton } from "../components/Button/Button";
import HeroSlide from "../components/Hero-Slide/HeroSlide";
import MoviesList from "../components/Movies-List/MoviesList";

import { Link } from "react-router-dom";
import { category, movieType, tvType } from "../api/tmdbApi";
const Home = () => {
   return (
      <section>
         <HeroSlide />
         <div className="container">
            <div className="section mb-[3rem]">
               <div className="section__header mb-[2rem]">
                  <div className="mb-[2rem] flex items-center justify-between">
                     <h2 className="min-w-max text-[16px] font-semibold md:text-[24px]">
                        Trending Movies
                     </h2>
                     <Link to={`/movie`}>
                        <OutlineButton className="btn--small">
                           View More
                        </OutlineButton>
                     </Link>
                  </div>

                  <MoviesList
                     category={category.movie}
                     type={movieType.popular}
                  />
               </div>
            </div>
         </div>

         <div className="container">
            <div className="section mb-[3rem]">
               <div className="section__header mb-[2rem]">
                  <div className="mb-[2rem] flex items-center justify-between">
                     <h2 className="min-w-max text-[16px] font-semibold md:text-[24px]">
                        Top Rated Movies
                     </h2>
                     <Link to={`/movie`}>
                        <OutlineButton className="btn--small">
                           View More
                        </OutlineButton>
                     </Link>
                  </div>

                  <MoviesList
                     category={category.movie}
                     type={movieType.top_rated}
                  />
               </div>
            </div>
         </div>

         <div className="container">
            <div className="section mb-[3rem]">
               <div className="section__header mb-[2rem]">
                  <div className="mb-[2rem] flex items-center justify-between">
                     <h2 className="min-w-max text-[16px] font-semibold md:text-[24px]">
                        Trending TV
                     </h2>
                     <Link to={`/movie`}>
                        <OutlineButton className="btn--small">
                           View More
                        </OutlineButton>
                     </Link>
                  </div>

                  <MoviesList category={category.tv} type={tvType.popular} />
               </div>
            </div>
         </div>

         <div className="container">
            <div className="section mb-[3rem]">
               <div className="section__header mb-[2rem]">
                  <div className="mb-[2rem] flex items-center justify-between">
                     <h2 className="min-w-max text-[16px] font-semibold md:text-[24px]">
                        Top Rated TV
                     </h2>
                     <Link to={`/movie`}>
                        <OutlineButton className="btn--small">
                           View More
                        </OutlineButton>
                     </Link>
                  </div>

                  <MoviesList category={category.tv} type={tvType.top_rated} />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Home;
