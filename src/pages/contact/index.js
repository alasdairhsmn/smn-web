import tw from "twin.macro"
import React from "react"

import Layout from "../../components/layout/layout"
import PageTitle from "../../components/shared/pageTitle"


const Placeholder = tw.div `
    w-auto 
    min-h-screen
    py-32 
    px-32 
    bg-gray-200 
    text-2xl md:text-5xl 
    text-center
`


export default function Contact () {

    return (
       <Layout>

           <PageTitle></PageTitle>

           <Placeholder>
               <div>Contact</div>
               <div>hello@somethingmorenear.com</div>
               <div>Get in touch</div>
           </Placeholder>



       </Layout>
    )

}