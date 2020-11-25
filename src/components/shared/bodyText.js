import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"
import { RichText } from 'prismic-reactjs'

const Text = styled.div `
   
    ${tw`   
    md:w-2/3
    md:mx-auto
    font-light
    text-lg md:text-2xl
    leading-normal
    tracking-wide
    transition-colors
    duration-300 
    ease-in-out
    `}
    p     {
            margin-bottom: 1em;
            }
    h1, h2, h3, h4 {
        font-weight: bold;
    }
    strong {
        font-weight: bold;
    } 
    a, a:link, a:active, a:visited {
        text-decoration: underline;
    }  
    a:hover {
        color: #05FABD;
    }     
`

export default function BodyText ({data}) {

    return (
    <>

   <Text>

   <RichText render={data} />

   </Text>
    
    </>

    )

}