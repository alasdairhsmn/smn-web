import React from "react"
import Header from "./header"
import Footer from "./footer"
import Headroom from "react-headroom"

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"



export default function Layout({ children }) {
  return (
    <div>

    <Headroom>
      <Header></Header>
    </Headroom>  
     
        <div className={'pt-20'}>
          {children}
        </div>

        <Footer></Footer>

    </div>
  )
}