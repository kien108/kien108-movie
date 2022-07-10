import React from "react";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";

import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button, { OutlineButton } from "../Button/Button";
import Modal, { ModalContent } from "../Modal/Modal";

const $ = document.querySelector.bind(document);

const HeroSlide = () => {
   const [movieItems, setMovieItems] = useState([]);

   useEffect(() => {
      const fetchMovies = async () => {
         const params = {
            page: 1,
         };
         try {
            const res = await tmdbApi.getMoviesList(movieType.popular, params);
            setMovieItems(res.results.splice(1, 4));
         } catch (error) {
            console.log(error.message);
         }
      };
      fetchMovies();
   }, []);

   return (
      <div className="hero-slide mb-[1.8rem] md:mb-[2.4rem] lg:mb-[3rem] ">
         <Swiper
            modules={[Autoplay]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={true}
         >
            {movieItems?.length > 0 &&
               movieItems.map((item, index) => (
                  <SwiperSlide key={index}>
                     {({ isActive }) => (
                        <HeroSlideItem
                           item={item}
                           className={`${isActive ? "active" : ""}`}
                        />
                     )}
                  </SwiperSlide>
               ))}
         </Swiper>
         {movieItems?.length > 0 &&
            movieItems.map((item, index) => (
               <TrailerModal key={index} item={item} />
            ))}
      </div>
   );
};

const HeroSlideItem = (props) => {
   const navigate = useNavigate();
   const item = props.item;
   const background = apiConfig.originalImage(
      item.backdrop_path ? item.backdrop_path : item.poster_path
   );

   const setModalActive = async () => {
      const modal = $(`#modal_${item.id}`);

      try {
         let videos = await tmdbApi.getVideos(category.movie, item.id);

         if (videos.results.length > 0) {
            const videoSrc = `https://www.youtube-nocookie.com/embed/${videos.results[0].key}`;
            modal
               .querySelector(".modal__content > iframe")
               .setAttribute("src", videoSrc);
         } else {
            modal.querySelector(".modal__content > iframe").innerHTML =
               "No Trailer";
         }
         modal.classList.toggle("active");
      } catch (error) {
         console.log(error.message);
      }
   };
   return (
      <div
         className={`hero-slide__item relative h-screen w-full bg-center py-[7rem] lg:py-[10rem] ${props.className} bg-cover bg-no-repeat before:absolute before:top-0 before:left-0 before:block before:h-full before:w-full before:bg-black/40 after:absolute after:bottom-0 after:left-0 after:block after:h-full after:w-full after:bg-gradient-to-t after:from-body-bg after:to-black/0`}
         style={{ backgroundImage: `url(${background}) ` }}
      >
         <div className="hero-slide__item__content absolute left-[50%] top-[50%] z-50 my-[1rem] flex w-full translate-x-[-50%] translate-y-[-50%] items-center justify-center lg:px-[2rem]">
            <div className="hero-slide__item__content__info z-50 w-full px-[1rem] md:px-[1.5rem] lg:w-[55%] lg:px-[3rem]">
               <h2 className="title slide-appear text-[3rem] font-bold leading-[1] md:text-[5rem] lg:text-start">
                  {item.title}
               </h2>
               <div className="overview slide-appear mt-[2rem] font-semibold text-gray-300 md:mt-[3rem] md:max-w-[90%]">
                  {item.overview}
               </div>
               <div className="btns slide-appear mt-[2rem] flex w-full items-center gap-4 lg:mt-[3rem]">
                  <Button
                     className="text-[18px]"
                     onClick={() => navigate(`/movie/${item.id}`)}
                  >
                     Watch now
                  </Button>
                  <OutlineButton
                     className="text-[18px]"
                     onClick={setModalActive}
                  >
                     Watch trailer
                  </OutlineButton>
               </div>
            </div>
            <div className="hero-slide__item__content__poster relative z-50 hidden flex-1  items-center justify-center md:flex">
               <img
                  className="block w-[400px] scale-0 rounded-default shadow-sm transition-all duration-700"
                  src={apiConfig.w500Image(item.poster_path)}
                  alt=""
               />
            </div>
         </div>
      </div>
   );
};

const TrailerModal = (props) => {
   const { item } = props;
   const modal = document.querySelector(`#modal_${item.id}`);
   const iframeRef = useRef(null);
   const onClose = () => {
      modal?.classList?.toggle("active");
      iframeRef.current.setAttribute("src", "");
   };

   return (
      <Modal active={false} id={`modal_${item.id}`} onClose={onClose}>
         <ModalContent onClose={onClose}>
            <iframe
               className="aspect-[16/9] max-h-[80vh] select-none"
               ref={iframeRef}
               width="100%"
               title="trailer"
            ></iframe>
         </ModalContent>
      </Modal>
   );
};
export default HeroSlide;
