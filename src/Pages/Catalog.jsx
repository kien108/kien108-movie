import React from "react";

import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader/PageHeader";

import { category as cate } from "../api/tmdbApi";
import MovieGrid from "../components/MovieGrid/MovieGrid";

const Catalog = (props) => {
   const { category } = useParams();

   return (
      <>
         <PageHeader>
            {category === cate.movie ? "Movies" : "TV Series"}
         </PageHeader>
         <div className="container">
            <div className="section mb-[3rem]">
               <MovieGrid category={category} />
            </div>
         </div>
      </>
   );
};

export default Catalog;
