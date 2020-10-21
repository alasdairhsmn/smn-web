import tw from "twin.macro"
import React from "react"
import { Link } from "gatsby"

import SMN from "../../assets/SomethingMoreNear.svg"

import LI from "../../assets/icons/linkedin.svg"
import EM from "../../assets/icons/email.svg"
import IG from "../../assets/icons/instagram.svg"

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
    hover:underline
    mb-4
    flex
    items-center
`

const MetaIcon = tw.span `
    w-4
    h-4
    mr-3
    inline
    text-white
    fill-current
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
                      <MetaIcon>
                      <EM />
                      </MetaIcon>
                      <span>hello@somethingmorenear.com</span>
                </MetaLink>
                    
                <MetaLink target="_blank" href="https://www.linkedin.com/company/something-more-near/">
                    <MetaIcon>
                    <LI />
                    </MetaIcon>
                    <span>LinkedIn</span>
                </MetaLink>

                <MetaLink target="_blank" href="https://www.instagram.com/somethingmorenear/">
                    <MetaIcon>
                    <IG />
                    </MetaIcon>
                    <span>Instagram</span>
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