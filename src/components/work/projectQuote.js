import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

const Block = tw.div `
    py-12 md:py-24
    md:min-h-screen
    bg-orange 
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
    leading-snug 
    font-display 
    font-extrabold
`

const QuoteCaption = tw.div `
    text-lg md:text-xl 
    text-white 
    mt-6 
    opacity-75
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