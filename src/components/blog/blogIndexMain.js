import tw from "twin.macro"
import React from "react"
import { Link } from "gatsby"

import { RichText } from 'prismic-reactjs'

const Wrapper = tw.div `
    w-auto
    mb-16
    mt-32
`

const Container = tw.div `
    container
    mx-auto
    grid
    grid-cols-12
    gap-4
    w-full
`

const ImageBlock = tw.div `
    col-span-7
    w-full
    h-lg
    bg-white
    overflow-hidden
`

const ItemImage = tw.img `
    h-full
    w-full
    object-cover
`

const TextBlock = tw.div `
    col-span-5
`

const Title = tw.div `
    text-4xl md:text-8xl 
    font-title
    font-bold 
    uppercase
    leading-extra-tight
    mb-12
`

const Subhead = tw.div `
    text-lg md:text-xl 
    font-sans 
    leading-tight
    mb-2
`

const MoreLink = tw.div `
    font-sans
    uppercase
    tracking-widest
    text-lg
    hover:underline
`



export default function BlogIndexMain ( {data} ) {

    return (
    
    <Wrapper>

    <Link to={`/blog/${data.node._meta.uid}`}>
        <Container>

        <TextBlock>

            <Title>
                <RichText render={data.node.title} />
            </Title>

            <Subhead>
                <RichText render={data.node.subhead} />
            </Subhead>

            <MoreLink>
                <Link to={`/blog/${data.node._meta.uid}`}>Read More &rarr;</Link>   
            </MoreLink>

        </TextBlock>

        <ImageBlock>
            <ItemImage src={data.node.lead_image.url}></ItemImage>
        </ImageBlock>

        </Container>
    </Link>    

    </Wrapper>

    )

}