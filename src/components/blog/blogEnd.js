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
`

const AuthorBlock = tw.div `
    flex
    space-x-8
    items-end
`

const AuthorImage = tw.img `
    flex-grow
    h-sm
    w-auto
    object-cover
`

const TextBlock = tw.div `
    w-2/3
`

const NameTitle = tw.div `
    text-xl
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