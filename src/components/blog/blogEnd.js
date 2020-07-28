import tw from "twin.macro"
import React from "react"

const Wrapper = tw.div `
    md:w-2/3 
    mx-auto 
    border-t 
    pt-8 
    mb-32 
    mt-16 
    text-xl
`



export default function BlogEnd ( {data} ) {

    return (
    
    <Wrapper>

        <div>More on the author goes here</div>
    
    </Wrapper>

    )

}