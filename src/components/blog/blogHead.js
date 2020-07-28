import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
    mx-auto my-24 flex w-full
`

const PostMain = tw.div `
    flex-grow
`

const Title = tw.div `
    font-bold text-6xl leading-none font-display font-extrabold
`

const SubHead = tw.div `
text-3xl leading-none mt-6 font-light
`

const PostMeta = tw.div `
    font-light text-gray-500 border-l pl-12 ml-24 pr-12
`

const PostType = tw.div `
    mt-8
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
        <p>Author</p>
        <p>Date posted</p>
        <p>Social sharing buttons</p>

        <PostType>
            Part of Fieldnotes
        </PostType>

        </PostMeta>
    
    </Wrapper>

    )

}