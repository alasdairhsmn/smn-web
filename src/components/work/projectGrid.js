import tw from "twin.macro"
import React from "react"
import Fade from 'react-reveal/Fade'

import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"

const WorkGrid = tw.div `
    
`

const Container = tw.div`
    container 
    md:mx-auto 
    md:flex
    min-h-screen80
    space-x-6
    py-12 md:py-24
    grid
    grid-cols-12
`

const Major = tw.div `
  col-span-12 md:col-span-7
  md:border-r-2
  border-black
  md:pr-6
  flex
  flex-wrap
  items-end
  h-full
`

const Minor = tw.div `
  col-span-12 md:col-span-5
  md:flex
  md:items-center
`

const TextBlock = tw.div `
    md:pr-16
`

const Title = tw.div `
    text-5xl md:text-8xl 
    font-title
    font-bold 
    uppercase
    leading-extra-tight
    mb-10
`

const Subhead = tw.div `
    text-xl md:text-2xl 
    font-sans 
    leading-tight
    mb-6
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

const ItemImage = tw.img `
    h-med md:h-lg
    w-full
    object-cover
`

export default function ProjectGrid ( {data} ) {

    const blocks = data.map(function(block){
    
        return (

        <Fade delay={300}>
            <Link to={`/changework/${block.project._meta.uid}`}>
            
        <Container>

            <Major>
                <ImageBlock>
                    <ItemImage src={block.project.lead_image.url}></ItemImage>
                </ImageBlock>
            </Major>

            <Minor>
                <TextBlock>
                    <Title>
                        <RichText render={block.project.title} />
                    </Title>

                    <Subhead>
                        <RichText render={block.project.challenge} />
                    </Subhead>

                    <MoreLink>
                        <Link to={`/changework/${block.project._meta.uid}`}>Learn More &rarr;</Link>   
                    </MoreLink>
                </TextBlock>
            </Minor>

        </Container>

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