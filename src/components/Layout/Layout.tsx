import {Header} from "../Header/Header";
import { Outlet} from "react-router-dom";

import React from "react";
import {Footer} from "../Footer/Footer";

export const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}