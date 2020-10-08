import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

const Block = tw.div `
    py-16 md:py-24
    bg-blue 
    flex 
    items-center
`

const Wrapper = tw.div `
    container 
    md:mx-auto
`

const QuoteBody = tw.div `
    text-3xl md:text-5xl 
    text-white 
    leading-tight 
    font-sans 
    font-bold
    border-b-8
    border-white
    pb-12
`

const QuoteCaption = tw.div `
    text-lg md:text-xl 
    text-white 
    mt-6 
    tracking-wide
`


export default function ProjectQuote ( {data} ) {

    return (
    <>

    <Block>
        <Wrapper>

            <QuoteBody>
                <RichText render={data.primary.quote_body} />
            </QuoteBody>

            <QuoteCaption>
                <RichText render={data.primary.caption_name} />
            </QuoteCaption>

        </Wrapper>
    </Block>
    
    </>

    )

}