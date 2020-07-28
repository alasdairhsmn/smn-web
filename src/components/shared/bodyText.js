import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"
import { RichText } from 'prismic-reactjs'

const Text = styled.div `
   
    ${tw`   
    md:w-2/3
    mx-8 md:mx-auto
    font-light
    text-lg md:text-2xl
    leading-normal
    `}
    p     {
            margin-bottom: 1em;
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