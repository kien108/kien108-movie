import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Catalog from "../Pages/Catalog";
import Detail from "../Pages/Detail";
const RoutesBody = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />

         <Route path=":category" element={<Catalog />}>
            <Route path="search/:keyword" element={<Catalog />} />
         </Route>
         <Route path="/:category/:id" element={<Detail />} />
      </Routes>
   );
};

export default RoutesBody;
