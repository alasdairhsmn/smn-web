import tw from "twin.macro"
import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

const SMNLayout = tw.div `
  pt-0 md:pt-0
`

export default function Layout({ children }) {
  return (
    <div>

      <Header />

        <SMNLayout>
          {children}
        </SMNLayout>  

        <Footer></Footer>

    </div>
  )
}
