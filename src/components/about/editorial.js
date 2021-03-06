import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'
import Fade from 'react-reveal/Fade'


const Editorial = tw.div `
    flex 
    flex-wrap md:flex
    container
    mx-auto
    items-center 
    py-20 md:py-40
    border-b-8
    border-black
    last:border-b-0
    md:grid 
    grid-cols-12
`

const ImageBlock = tw.div `
    col-span-5
    col-start-8
    h-full
    flex
    items-center
    md:pl-8
`

const Image = tw.img `
    w-full
    h-auto
`

const EditorialBlock = tw.div `
    mx-auto 
    items-center
    col-span-6
    mb-4 md:mb-0
`

const EditorialTitle = tw.div `
    font-title 
    font-bold 
    uppercase
    text-4xl md:text-8xl
    leading-extra-tight
    mb-4 md:mb-8
`
const EditorialBody = tw.div `
    text-lg 
    text-xl md:text-3xl 
    font-light
    leading-tight
`

export default function AboutEditorial ( {data} ) {

    const blocks = data.map(function(block){

        return (
        <Editorial>



        <EditorialBlock>
           
           <div>

           <EditorialTitle>
                <RichText render={block.primary.heading} />
            </EditorialTitle>

           <EditorialBody>
                <RichText render={block.primary.copy} />
            </EditorialBody>
           </div>

        </EditorialBlock>

            <ImageBlock>
                <Image src={block.primary.image.url}></Image>
            </ImageBlock>

        </Editorial>
        )

    })

    return (

        <Fade delay={300}>
            <div>
                { blocks }   
            </div> 
        </Fade>          

    )

}