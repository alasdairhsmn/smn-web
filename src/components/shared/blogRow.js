import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"

const WorkGrid = tw.div `
    md:grid 
    md:grid-cols-3 
    col-gap-20 
    container 
    md:mx-auto 
    mb-16 md:mb-32 
    mt-12 md:mt-24
`

const RowTitle = tw.div `
    col-span-3 
    text-lg md:text-2xl 
    mb-6 md:mb-12 
    font-title 
`

const WorkBlock = tw.div`
    mb-12 md:mb-0
    hover:opacity-75 
`

const WorkImage = tw.div`
    bg-gray-200 mb-6 overflow-hidden
`

const Image = tw.img `
    w-auto md:w-full 
    h-64
    object-cover
`

const BlogCategory = tw.div `
    p-2
    mb-4
    inline-block
    mx-auto
    text-xs
    text-rose
    font-mono
    tracking-widest
    uppercase
    border
    border-rose
    rounded
`

const WorkTitle = tw.div`
    text-2xl md:text-3xl 
    font-display 
    font-bold 
    leading-none
`

const WorkSub = tw.div `
    font-light text-lg leading-snug mt-3
`

const WorkTags = tw.div`
    font-mono 
    text-xs
    mt-4 
    uppercase 
    tracking-widest 
    text-gray-500
`


export default function BlogRow ({data}) {

    const blocks = data.map(function(block){ 

        return (

            <Link to={`/blog/${block.node._meta.uid}`}>

            <WorkBlock>

            <WorkImage>
                <Image src={block.node.lead_image.url}></Image>
            </WorkImage>

            <BlogCategory>
                Fieldnotes
            </BlogCategory>

            <WorkTitle>
                <RichText render={block.node.title} />
            </WorkTitle>

            <WorkSub>
                <RichText render={block.node.subhead} />
            </WorkSub>

            <WorkTags>post date</WorkTags>
            </WorkBlock>
            </Link>

        )


    })

    return (
    <>
            <WorkGrid>

            <RowTitle>Blog posts</RowTitle>

            {blocks}

            </WorkGrid>
    
    </>

    )

}