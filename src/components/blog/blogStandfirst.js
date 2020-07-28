import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"
import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
    mx-auto flex w-full
`

const Text = styled.div `
   
    ${tw`   
    md:w-2/3
    mx-auto
    font-bold
    font-display
    text-3xl
    leading-normal
    mb-8
    `}
    p     {
            margin-bottom: 1em;
            }
`


export default function BlogStandfirst ( {data} ) {

    if(data) { 
        
    return (
    
    <Wrapper>
        
        <Text>
            <RichText render={data} />
        </Text>

    </Wrapper>
    
    )

    } else return null

}