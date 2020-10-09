import tw from "twin.macro"
import React from "react"
import { Link } from "gatsby"

import SMN from "../../assets/SomethingMoreNear.svg"

const Wrapper = tw.div`
  bg-black 
  pb-6 md:pb-6 
  text-white
`

const Grid = tw.div`
  container 
  md:mx-auto 
  md:grid 
  gap-4
  grid-cols-2 md:grid-cols-12 
  text-lg md:text-2xl 
  leading-relaxed 
  font-light
  py-8 md:py-16
  min-h-screen80
`

const LogoBlock = tw.div `
  col-span-12 md:col-span-5
  md:border-r-2
  border-white
  md:pr-4
  h-full
  w-1/2 md:w-full
  mb-12 md:mb-0
`

const TextBlock = tw.div `
  col-span-6
  col-start-7
  md:flex
  justify-end
  flex-wrap
`

const InnerText = tw.div `
  w-auto
  mt-12
  mb-8
  pb-8 md:pb-0
  border-b-2 md:border-b-0
  border-white
`

const MetaLink = tw.a `
    py-2
    flex
    items-center
    hover:underline
`

const MetaIcon = tw.div `
    w-4
    h-4
    mr-3
    float-left
`


export default function Footer () {

    return (
        <Wrapper>

          <Grid>

            <LogoBlock>

              <Link to={'/'}>
                <SMN css={tw`fill-current text-white`} />
              </Link>

            </LogoBlock>

            <TextBlock>


            <div> 

            <MetaLink href="mailto:hello@somethingmorenear.com">
                    <MetaIcon><img src={'../icons/email.svg'} /></MetaIcon>
                    <a className={'inline'} >hello@somethingmorenear.com</a>
                </MetaLink>
                    
                <MetaLink target="_blank" href="https://www.linkedin.com/company/something-more-near/">
                    <MetaIcon><img src={'../icons/linkedin.svg'} /></MetaIcon>
                    <a className={'inline'} >LinkedIn</a>
                </MetaLink>

                <MetaLink target="_blank" href="https://www.instagram.com/somethingmorenear/">
                    <MetaIcon><img src={'../icons/instagram.svg'} /></MetaIcon>
                    <a className={'inline'} >Instagram</a>
                </MetaLink>


            <InnerText>
              <p>114–118 Lower Marsh</p>
              <p>London</p>
              <p>SE1 7AE</p>
            </InnerText> 

            </div>  


            </TextBlock>

          </Grid>



        </Wrapper>
    )

}