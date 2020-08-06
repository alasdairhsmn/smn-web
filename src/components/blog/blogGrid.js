import tw from "twin.macro"
import React from "react"
import Fade from 'react-reveal/Fade'
import { Link } from "gatsby"
import { RichText } from 'prismic-reactjs'


const WorkGrid = tw.div `
    container
    mx-auto
    grid
    grid-cols-3
    gap-16
    mb-48
`

const BlogItem = tw.div`
    hover:opacity-75
`

const TextBlock = tw.div `
    pr-16
`

const Title = tw.div `
    text-2xl md:text-4xl 
    font-title
    font-bold 
    uppercase
    leading-extra-tight
    my-4
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

const ImageBlock = tw.div `
    mt-0
`

const Item = tw.div `
    overflow-hidden
    mt-8
`

const ItemImage = tw.img `
    h-med md:h-sm
    w-full
    object-cover
`

const BlogTags = tw.div`
    font-mono mt-4 uppercase tracking-widest text-gray-500
`



export default function BlogGrid ( {data} ) {

    const blocks = data.map(function(post, i){

        if (i === 0) { return null }

        else return (

        <Fade delay={300}>
        <Link to={`/blog/${post.node._meta.uid}`}>
            
        <BlogItem>

        <ImageBlock>
            <ItemImage src={post.node.lead_image.url}></ItemImage>
        </ImageBlock>

        <TextBlock>

            <Title>
                <RichText render={post.node.title} />
            </Title>

            <Subhead>
                <RichText render={post.node.subhead} />
            </Subhead>

            <MoreLink>
                <Link to={`/blog/${post.node._meta.uid}`}>Read More &rarr;</Link>   
            </MoreLink>

        </TextBlock>

        </BlogItem>

        </Link>
        </Fade>
        )   
    })

    return (
        <>
        <WorkGrid>
    
            { blocks }
    
        </WorkGrid>
        </>
    
        )

}