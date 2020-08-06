import tw from "twin.macro"
import React from "react"
import Header from "./header"
import Footer from "./footer"
import Headroom from "react-headroom"

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

const SMNLayout = tw.div `
  pt-10 md:pt-12
`

export default function Layout({ children }) {
  return (
    <div>

    <Headroom>
      <Header></Header>
    </Headroom>  
     
        
        <SMNLayout>
          {children}
        </SMNLayout>  

        <Footer></Footer>

    </div>
  )
}