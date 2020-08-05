import tw from "twin.macro"
import styled from "@emotion/styled"
import React from "react"


const Heading = tw.div`
    text-6xl md:text-12xl 
    font-title
    font-bold
    uppercase 
    leading-extra-tight 
    tracking-tight
    col-span-12
    border-b-4
    border-black
    pb-10
`

const Aligner = styled.p `
::before {
    content: '';
    display: block;
    height: 0;
    width: 0;
    margin-bottom: -25px;
  }
`


export default function HomeAnimation () {

    return (
      
    <>

        <Heading>
            
        <Aligner>SOMETHING</Aligner>
            <p>MORE</p>
            <p>NEAR</p>

        </Heading>

    </>

    )

}