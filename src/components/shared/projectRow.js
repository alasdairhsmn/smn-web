import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"


const WorkGrid = tw.div `
    md:grid 
    grid-cols-1 md:grid-cols-3 
    gap-8 md:gap-20 
    container 
    mx-8 md:mx-auto 
    mb-32 
    mt-24
`

const RowTitle = tw.div `
    col-span-3 text-4xl mb-12 font-display font-extrabold
`

const WorkBlock = tw.div`
    container 
    mx-auto 
    hover:opacity-75 
`

const WorkImage = tw.div`
    bg-gray-200 mb-6 overflow-hidden
`

const Image = tw.img `
    w-auto md:w-full 
    
    object-cover
`

const WorkTitle = tw.div`
    text-3xl font-display font-extrabold leading-none font-bold
`

const WorkSub = tw.div `
    font-light text-lg leading-snug mt-3
`

const WorkTags = tw.div`
    font-mono mt-4 uppercase tracking-widest text-gray-500
`


export default function ProjectRow ({data}) {

    const blocks = data.map(function(block){

        return (

            <Link to={`/changework/${block.node._meta.uid}`}>

            <WorkBlock>

            <WorkImage>
                <Image src={block.node.lead_image.url}></Image>
            </WorkImage>
           
            <WorkTitle>
                <RichText render={block.node.title} />
            </WorkTitle>

            <WorkSub>
                <RichText render={block.node.subheading} />
            </WorkSub>

            <WorkTags>project tag</WorkTags>
            </WorkBlock>
            </Link>

        )

    })

    return (
    <>
            <WorkGrid>

            <RowTitle>Our Changework</RowTitle>

                { blocks }

            </WorkGrid>
    
    </>

    )

}