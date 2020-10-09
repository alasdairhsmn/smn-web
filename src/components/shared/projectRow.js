import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"

const Wrapper = tw.div `
    py-8 md:py-16
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
    mb-2 md:mb-4 
    overflow-hidden
`

const Image = tw.img `
    h-sm md:h-sm
    object-cover
`

const WorkTitle = tw.div`
    text-2xl md:text-3xl 
    font-title
    font-bold 
    uppercase
    mb-2 md:mb-4 
    leading-none
`

const WorkSub = tw.div `
    font-light 
    text-xl 
    leading-snug 
    mt-3
    text-midgrey
`

const WorkTags = tw.div`
    mt-4 
    uppercase 
    tracking-widest 
    border
    border-black
    rounded-md
    inline-block
    px-3
    py-2
    text-sm
`


export default function ProjectRow ({data, id}) {

    const blocks = data.filter(block => block.project._meta.uid != id).map(function(block, i){

        return (

            <Link to={`/changework/${block.project._meta.uid}`}>

            <WorkBlock>

            <WorkImage>
                <Image src={block.project.lead_image.url}></Image>
            </WorkImage>
           
                <WorkTitle>
                    <RichText render={block.project.title} />
                </WorkTitle>

                <WorkSub>
                    <RichText render={block.project.challenge} />
                </WorkSub>

            </WorkBlock>
            </Link>

        )

    })

    return (
    <Wrapper>

        <RowTitle>

            <RowTitleMain>Changework Projects</RowTitleMain>
            <RowTitleLink>
                <Link to={`/changework`}>See all &rarr;</Link>     
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