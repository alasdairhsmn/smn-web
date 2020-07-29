import React from "react"
import Header from "./header"
import Footer from "./footer"



export default function Layout({ children }) {
  return (
    <div>
      <Header></Header>

        <div className={'pt-20'}>
          {children}
        </div>

        <Footer></Footer>

    </div>
  )
}