import "./App.scss";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RoutesBody from "./config/RoutesBody";
function App() {
   return (
      <BrowserRouter>
         <div className="mobile:mb-[1.8rem] overflow-y-auto scroll-smooth bg-body-bg font-mon font-[400] leading-6 text-txt-color">
            <Header />
            <RoutesBody />
            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;
