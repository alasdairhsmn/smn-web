import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
    mx-auto 
    mt-20
    w-2/3
`

const PostMain = tw.div `
    
`

const Title = tw.div `
    font-bold text-6xl leading-none font-display font-extrabold
`

const SubHead = tw.div `
    text-3xl 
    leading-none 
    mt-0 md:mt-6 
    mb-8 md:mb-0
    font-light
`

const PostMeta = tw.div `
    mt-4
    font-light text-gray-500 
`



export default function BlogHead ( {data} ) {

    return (
    
    <Wrapper>

        <PostMain>

        <Title>
            <RichText render={data.title} />
        </Title>

        <SubHead>
            <RichText render={data.subhead} />
        </SubHead>

        </PostMain>

        <PostMeta>
            <p>Author Name / Date posted / Social Links / Category</p>
        </PostMeta>
    
    </Wrapper>

    )

}