import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";

const CastsList = (props) => {
   const { category } = useParams();
   const [casts, setCasts] = useState([]);

   useEffect(() => {
      const getCredits = async () => {
         try {
            let res = await tmdbApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 5));
         } catch (error) {
            console.log(error.message);
         }
      };

      getCredits();
   }, [category, props.id]);
   return (
      <div className="casts grid grid-cols-[repeat(auto-fill,minmax(90px,_1fr))] gap-[10px]">
         {casts?.length > 0 &&
            casts.map((item, i) => (
               <div key={i} className="cast__item ">
                  <div
                     className="casts__item__img mb-[0.5rem] aspect-[3/4] rounded-[15px] bg-cover bg-center"
                     style={{
                        backgroundImage: `url(${apiConfig.w500Image(
                           item.profile_path
                        )})`,
                     }}
                  ></div>
                  <span className="casts__item_name text-[0.8rem]">
                     {item?.name}
                  </span>
               </div>
            ))}
      </div>
   );
};

export default CastsList;
