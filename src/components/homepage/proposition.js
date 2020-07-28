import tw from "twin.macro"
import React from "react"

import mol from "../../images/sample/molgroup.jpg"

const Hero = tw.div `
    bg-black flex items-center text-white bg-cover py-32
`

const Block = tw.div`
    container mx-auto flex items-center
`

const ImageFrame = tw.div `
    mx-24 w-full
`

const Image = tw.img `
    h-lg object-cover rounded-full
`

const Subhead = tw.div`
    text-3xl font-light
`

export default function HomeProp ( {data} ) {

    return (
        
    <Hero>
      
        <Block>

            <ImageFrame>
               <Image src={mol}></Image>
            </ImageFrame>
                        
            <Subhead>
                <p>We deliver social changework</p>
                <p>We help organisations evolve in imaginative and effective ways to bring a better future closer.</p> 
                <p>Explore our work &rarr;</p>
            </Subhead>
  
        </Block>
    
    </Hero>

    )

}