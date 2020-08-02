import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

import workshop from "../../images/sample/workshop.jpg"
import elephant from "../../images/sample/elephant_west.jpg"
import mol from "../../images/sample/residency.jpg"

const Gallery = tw.div `
    grid
    grid-cols-3
    gap-12
    py-24
    mb-16
    bg-black
    text-white
`

const BlockTitle = tw.div `
    container
    mx-auto
    text-5xl
    font-display
    mb-8
    col-span-3
`

const GalleryItem = tw.div `
    
`

const GalleryTitle = tw.div `
    font-title
    text-3xl
    leading-none
`

const GalleryImage = tw.img `
    h-med
    w-auto
    mb-4
    object-cover
`


export default function AboutExperience ( ) {

    return (
    
    <Gallery>

        <BlockTitle>
            We have...
        </BlockTitle>

        <GalleryItem>
            <GalleryImage src={workshop} />
            <GalleryTitle>Brought together 1000 Londoners to re-imagine the Museum of London</GalleryTitle>
        </GalleryItem>

        <GalleryItem>
            <GalleryImage src={elephant} />
            <GalleryTitle>Designed a university course for mass collaboration</GalleryTitle>
        </GalleryItem>

        <GalleryItem>
            <GalleryImage src={mol} />
            <GalleryTitle>Set a new course for a real estate giant</GalleryTitle>
        </GalleryItem>

    </Gallery>

    )

}