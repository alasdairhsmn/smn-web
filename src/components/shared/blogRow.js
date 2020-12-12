import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"

const Wrapper = tw.div `
    bg-blue
    py-6 md:py-12
    text-white
`

const WorkGrid = tw.div `
    md:grid 
    md:grid-cols-3 
    col-gap-12 
    container
    mx-auto
    mb-8
`

const RowTitle = tw.div `
    container 
    mx-auto
    border-b-4
    border-white
    mb-4 md:mb-8
    flex
    pb-4
    items-center
`

const RowTitleMain = tw.div `
    font-title
    font-semibold
    text-2xl md:text-4xl
    flex-grow
`

const RowTitleLink = tw.div `
    pt-2 md:pt-4
    text-lg 
    md:text-xl
    hover:underline
`

const WorkBlock = tw.div`
    mb-6 md:mb-12 
    md:mb-0
    hover:opacity-75 
`

const WorkImage = tw.div`
    mb-3 md:mb-6 
    overflow-hidden
`

const Image = tw.img `
    w-full
    h-auto
`

const WorkTitle = tw.div`
    text-xl md:text-xl 
    font-semibold 
    mb-2
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


export default function BlogRow ({data, id}) {

    const blocks = data.filter(block => block.node._meta.uid !== id).map(function(block, i){ 

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
                { blocks[0] }
                { blocks[1] }
                { blocks[2] }
        </WorkGrid>
    
    </Wrapper>

    )

}
