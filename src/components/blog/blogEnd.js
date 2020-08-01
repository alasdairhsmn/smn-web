import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
    md:w-2/3 
    mx-auto 
    border-t 
    pt-8 
    mb-32 
    mt-16 
    text-xl
`

const AuthorBlock = tw.div `
    grid
    grid-cols-2
    gap-16
`



export default function BlogEnd ( {data} ) {

    return (
    
    <Wrapper>

        <AuthorBlock>
        
        <div>
            <img src={data.author.image.url}></img>
        </div>
        
        <div>
            <div><RichText render={data.author.name} /></div>
            <div><RichText render={data.author.in_brief} /></div>
        </div>

        </AuthorBlock>
        
    
    </Wrapper>

    )

}