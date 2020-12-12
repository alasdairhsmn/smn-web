import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
    md:w-2/3 
    mx-auto 
    border-t-2
    border-black
    pt-8 
    mb-32 
    mt-16 
    text-xl
    leading-normal
`

const AuthorBlock = tw.div `
    md:flex
    md:space-x-8
    items-end
`

const AuthorImage = tw.img `
    flex-grow
    h-sm
    w-full md:w-auto
    object-cover
    mb-4 md:mb-0
`

const TextBlock = tw.div `
    w-full md:w-2/3
`

const NameTitle = tw.div `
    text-xl
    leading-normal
`

const Summary = tw.div `
    text-midgrey
`



export default function BlogEnd ( {data} ) {

    return (
    
    <Wrapper>

        <AuthorBlock>
        
        <AuthorImage src={data.author.image.url} alt={RichText.asText(data.author.name)} />
        
        <TextBlock>

        <NameTitle>
            <RichText render={data.author.name} />
        </NameTitle>

        <Summary>
            <RichText render={data.author.in_brief} />
        </Summary>

        </TextBlock>

        </AuthorBlock>
        
    
    </Wrapper>

    )

}