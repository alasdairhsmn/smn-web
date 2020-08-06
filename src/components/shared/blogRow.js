import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"

const Wrapper = tw.div `
    bg-blue
    py-24
    text-white
`

const WorkGrid = tw.div `
    md:grid 
    md:grid-cols-3 
    col-gap-12 
    container
    px-0
    mx-0 md:mx-auto
`

const RowTitle = tw.div `
    container 
    mx-auto
    border-b-4
    border-white
    mb-8
    flex
    py-4
    items-center
`

const RowTitleMain = tw.div `
    font-title
    font-semibold
    text-4xl
    flex-grow
`

const RowTitleLink = tw.div `
    text-xl
    hover:underline
`

const WorkBlock = tw.div`
    mb-12 
    md:mb-0
    hover:opacity-75 
`

const WorkImage = tw.div`
    mb-6 
    overflow-hidden
`

const Image = tw.img `
    w-full md:w-full 
    h-sm md:h-sm
    object-cover
`

const WorkTitle = tw.div`
    text-2xl md:text-4xl 
    font-title
    font-semibold 
    uppercase
    mb-6
    leading-none
`

const WorkSub = tw.div `
    font-light 
    text-xl 
    leading-snug 
    mt-3
`

const WorkTags = tw.div`
    mt-4 
    uppercase 
    tracking-widest 
    border
    border-white
    rounded-md
    inline-block
    px-3
    py-2
    text-sm
`


export default function BlogRow ({data}) {

    const blocks = data.map(function(block){ 

        return (

            <Link to={`/blog/${block.node._meta.uid}`}>

            <WorkBlock>

            <WorkImage>
                <Image src={block.node.lead_image.url}></Image>
            </WorkImage>

            <WorkTitle>
                <RichText render={block.node.title} />
            </WorkTitle>

            <WorkSub>
                <RichText render={block.node.subhead} />
            </WorkSub>
            
            </WorkBlock>
            </Link>

        )


    })

    return (
    <Wrapper>

        <RowTitle>

            <RowTitleMain>The Blog</RowTitleMain>
            <RowTitleLink>
                <Link to={`/blog`}>See all &rarr;</Link>     
            </RowTitleLink>

        </RowTitle>

        <WorkGrid>
                { blocks }
        </WorkGrid>
    
    </Wrapper>

    )

}