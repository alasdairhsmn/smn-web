import tw from "twin.macro"
import React from "react"
import Fade from 'react-reveal/Fade'

import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"

const WorkGrid = tw.div `
    container
    mx-auto
    grid
    grid-cols-2
    gap-12
    py-12
`

const Item = tw.div `
    col-span-1
`

const Container = tw.div`
    container 
    md:mx-auto 
    md:flex
    md:min-h-screen80
    md:space-x-6
    py-6 md:py-24
    mt-6 md:mt-0
`

const Major = tw.div `
  md:border-r-2
  border-black
  md:pr-6
  flex
  flex-wrap
  items-end
  h-full
  md:w-7/12
  flex-1
`

const Minor = tw.div `
  md:flex
  md:items-center
  mt-4 md:mt-0
  md:w-5/12
  flex-1
`

const TextBlock = tw.div `
    md:pr-16
    mt-4
`

const Title = tw.div `
    text-2xl md:text-4xl 
    font-title
    font-bold 
    uppercase
    leading-extra-tight
    mb-2 md:mb-4
`

const Subhead = tw.div `
    text-lg md:text-xl 
    font-sans 
    leading-tight
    mb-3 md:mb-6
`

const MoreLink = tw.div `
    font-sans
    uppercase
    tracking-widest
    text-lg
    leading-normal
    hover:underline
`

const ImageBlock = tw.div `
    
`

const ItemImage = tw.img `
    h-sm md:h-med
    w-full
    object-cover
`

export default function ProjectGridTwo ( {data} ) {

    const blocks = data.map(function(block){
    
        return (

        <Link to={`/changework/${block.project._meta.uid}`}>

            <Item>

            <ImageBlock>
                <ItemImage src={block.project.lead_image.url}></ItemImage>
            </ImageBlock>

            <TextBlock>

                <Title>
                    <RichText render={block.project.title} />
                </Title>

                <Subhead>
                    <RichText render={block.project.challenge} />
                </Subhead>

            </TextBlock>

            </Item>  

        </Link>

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