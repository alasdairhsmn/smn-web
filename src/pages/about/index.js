import tw from "twin.macro"
import React from "react"
import Layout from "../../components/layout/layout"


const Hero = tw.div`
    bg-blue 
    text-white 
    py-12
    min-h-screen 
    flex 
    items-center 
    text-3xl md:text-6xl 
    font-display 
    font-extrabold 
    leading-tight
`

const Placeholder = tw.div `
    w-auto 
    min-h-screen
    py-32 
    px-32 
    bg-gray-200 
    text-2xl md:text-5xl 
    text-center
`

const Block = tw.div `
    container mx-auto
`

const Experience = tw.div `
    bg-purple 
    text-white 
    text-3xl md:text-5xl 
    py-12 
    font-display 
    font-extrabold 
    min-h-screen 
    flex 
    items-center
`

const Editorial = tw.div `
    flex items-center min-h-screen bg-lightgrey
`

const EditorialBlock = tw.div `
    container 
    mx-auto 
    w-full md:w-3/4 
    md:flex 
    md:space-x-16
    items-center
`

const EditorialTitle = tw.div `
    font-display 
    font-extrabold 
    text-2xl md:text-5xl
`
const EditorialBody = tw.div `
    text-lg 
    md:text-2xl 
    font-light
`

const EditorialImage = tw.div `
    w-full 
    h-sm md:h-med 
    bg-white 
`


export default function AboutIndex () {

    return (
       <Layout>
           
           <Hero>
               <Block>
               Change is hard. But you can make it happen when you bring people together in the right way. It’s what we call social changework
               </Block>
           </Hero>

           <Experience>
                <Block>
                    <p>We have… brought together 1000 Londoners to re-imagine the Museum of London / designed a university course for mass collaboration / re-positioned a real estate giant / created a mass membership model for climate action….</p>
                </Block>
           </Experience>

           <Editorial>
            <EditorialBlock>
               <div>
               <EditorialTitle>Engage and inspire your teams</EditorialTitle>
               <EditorialBody>You already have a lot of the answer. We can help you find the ways to unlock it and communicate it through your organisation</EditorialBody>
               </div>
                <EditorialImage></EditorialImage>
            </EditorialBlock>
           </Editorial>

           <Editorial>
            <EditorialBlock>

            <EditorialImage></EditorialImage>

               <div>
               <EditorialTitle>Bring audiences into the process</EditorialTitle>
               <EditorialBody>We create the moments that engage people online, offline and in between. Beyond consultation into co-creation and harnessing mass audiences. Sprints, workshops, residencies, and a methodology to help you make the most of it.</EditorialBody>
               </div>

            </EditorialBlock>
           </Editorial>


           <Editorial>
            <EditorialBlock>
               <div>
               <EditorialTitle>Collaborate with diverse talents</EditorialTitle>
               <EditorialBody>We don’t pretend we have all the answers or expertise – tough challenges need diverse perspectives. </EditorialBody>
               </div>
                <EditorialImage></EditorialImage>
            </EditorialBlock>
           </Editorial>


           <Placeholder>
               <div>Meet our team</div>
               <div>See our work</div>
               <div>Get in touch</div>
           </Placeholder>



       </Layout>
    )

}