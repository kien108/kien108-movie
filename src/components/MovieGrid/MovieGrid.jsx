import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";
import Button, { OutlineButton } from "../Button/Button";

import MovieCard from "../MovieCard/MovieCard";
import Input from "../Input/Input";
const MovieGrid = (props) => {
   const [items, setItems] = useState([]);
   const [page, setPage] = useState(1);
   const [totalPage, setTotalPage] = useState(0);

   const { keyword } = useParams();
   useEffect(() => {
      const getListVideos = async () => {
         let res = null;

         try {
            if (keyword === undefined) {
               let params = {};
               switch (props.category) {
                  case category.movie:
                     res = await tmdbApi.getMoviesList(
                        movieType.upcoming,
                        params
                     );
                     break;
                  default:
                     res = await tmdbApi.getTvList(tvType.popular, params);
                     break;
               }
            } else {
               const params = {
                  query: keyword.trim(),
               };
               res = await tmdbApi.search(props.category, params);
            }
            setItems(res.results);
            setTotalPage(res.total_pages);
         } catch (error) {
            console.log(error.message);
         }
      };

      getListVideos();
   }, [props.category, keyword]);

   const loadMore = async () => {
      let res = null;
      try {
         if (keyword === undefined) {
            let params = {
               page: page + 1,
            };
            switch (props.category) {
               case category.movie:
                  res = await tmdbApi.getMoviesList(movieType.upcoming, params);
                  break;
               default:
                  res = await tmdbApi.getTvList(tvType.popular, params);
                  break;
            }
         } else {
            const params = {
               page: page + 1,
               query: keyword.trim(),
            };
            res = await tmdbApi.search(props.category, params);
         }
         setItems([...items, ...res.results]);
         setPage(page + 1);
      } catch (error) {
         console.log(error.message);
      }
   };
   return (
      <>
         <div className="section mb-[3rem]">
            <MovieSearch category={props.category} keyword={keyword} />
         </div>
         <div className="movie-grid ap-[20px] mb-[3rem] grid grid-cols-[repeat(auto-fill,minmax(150px,_1fr))] gap-y-[30px] gap-x-[15px] md:grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] md:gap-y-[40px]">
            {items?.length > 0 &&
               items.map((item, index) => (
                  <MovieCard
                     key={index}
                     category={props.category}
                     item={item}
                  />
               ))}
         </div>
         {page < totalPage ? (
            <div className="movie-grid-loadmore text-center">
               <OutlineButton className="btn--small" onClick={loadMore}>
                  Load More
               </OutlineButton>
            </div>
         ) : null}
      </>
   );
};

const MovieSearch = (props) => {
   const navigate = useNavigate();

   const [keyword, setKeyWord] = useState("");

   const goToSearch = useCallback(() => {
      if (keyword.trim().length > 0) {
         navigate(`/${props.category}/search/${keyword}`);
      }
   }, [keyword, props.category, navigate]);

   useEffect(() => {
      setKeyWord("");
   }, [props.category]);

   useEffect(() => {
      const enterEvent = (e) => {
         e.preventDefault();
         if (e.keyCode === 13) {
            goToSearch();
         }
      };
      document.addEventListener("keyup", enterEvent);

      return () => document.removeEventListener("keyup", enterEvent);
   }, [keyword, goToSearch]);

   return (
      <div className="movie-search flex select-none items-center gap-[20px]">
         <Input
            className="md:max-w-auto w-full max-w-[300px] ring-1 ring-gray-100/10 focus:border-0 focus:ring-1 focus:ring-main-color md:w-[300px]"
            type="text"
            placeholder="Enter keyword"
            value={keyword}
            onChange={(e) => setKeyWord(e.target.value)}
         />
         <Button className="btn--small hidden md:block" onClick={goToSearch}>
            Search
         </Button>
      </div>
   );
};

export default MovieGrid;
