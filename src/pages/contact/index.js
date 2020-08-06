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

           <PageTitle title={'Get in Touch'} sub={'We always want to hear from ambitious organisations and people'} />

           <Placeholder>
               <div>Contact</div>
               <div>hello@somethingmorenear.com</div>
               <div>Get in touch</div>
           </Placeholder>



       </Layout>
    )

}