import tw from "twin.macro"
import React from "react"
import Layout from "../../components/layout/layout"


const Hero = tw.div`
    bg-blue text-white h-screen flex items-center text-6xl font-display font-extrabold leading-tight
`

const Placeholder = tw.div `
    w-auto py-48 px-32 bg-gray-200 text-5xl text-center
`

const Block = tw.div `
    container mx-auto
`

const Experience = tw.div `
    bg-purple text-white text-5xl py-32 font-display font-extrabold min-h-screen flex items-center
`

const Editorial = tw.div `
    flex items-center min-h-screen bg-lightgrey
`

const EditorialBlock = tw.div `
    container mx-auto w-3/4 flex items-center
`

const EditorialTitle = tw.div `
    font-display font-extrabold text-5xl
`
const EditorialBody = tw.div `
    text-2xl font-light
`

const EditorialImage = tw.div `
    w-full h-med bg-white m-16
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