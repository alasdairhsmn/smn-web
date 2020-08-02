import tw from "twin.macro"
import React from "react"
import { RichText } from 'prismic-reactjs'

const Gallery = tw.div `
    grid
    grid-cols-4
    gap-12
    h-med
    py-16
    mb-16
`

const GalleryItem = tw.div `
    
`

const GalleryTitle = tw.div `
    font-display
    text-xl
    leading-none
    opacity-50
`

const GalleryImage = tw.div `
    h-sm
    bg-lightgrey
    w-auto
    mb-4
`


export default function AboutExperience ( ) {

    return (
    
    <Gallery>

        <GalleryItem>
            <GalleryImage></GalleryImage>
            <GalleryTitle>Brought together 1000 Londoners to re-imagine the Museum of London</GalleryTitle>
        </GalleryItem>

        <GalleryItem>
            <GalleryImage></GalleryImage>
            <GalleryTitle>Designed a university course for mass collaboration</GalleryTitle>
        </GalleryItem>

        <GalleryItem>
            <GalleryImage></GalleryImage>
            <GalleryTitle>Set a new course for a real estate giant</GalleryTitle>
        </GalleryItem>

        <GalleryItem>
            <GalleryImage></GalleryImage>
            <GalleryTitle>Created a mass membership model for climate action</GalleryTitle>
        </GalleryItem>

    </Gallery>

    )

}