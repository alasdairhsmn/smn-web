import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
    bg-gray-200 mt-8 py-16
`

const Row = tw.div `
    container mx-auto
`

const Title = tw.div `
    text-2xl border-b pb-4 mb-8
`

const Grid = tw.div `
    grid grid-cols-3 gap-12
`

const PostBlock = tw.div `
    py-32 bg-white
`



export default function BlogEnd ( {data} ) {

    return (
    
    <Wrapper>

        <Row>

        <Title>
            More from the blog
        </Title>

        <Grid>

            <PostBlock></PostBlock>
            <PostBlock></PostBlock>
            <PostBlock></PostBlock>

        </Grid>

        </Row>

    </Wrapper>

    )

}