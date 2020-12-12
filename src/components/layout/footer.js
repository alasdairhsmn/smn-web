import tw from "twin.macro"
import React from "react"
import { Link } from "gatsby"

import SMN from "../../assets/SomethingMoreNear.svg"

import LI from "../../assets/icons/linkedin.svg"
import EM from "../../assets/icons/email.svg"
import IG from "../../assets/icons/instagram.svg"

const Wrapper = tw.div`
  bg-darkblue
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
  md:border-r-3
  border-white
  md:pr-4
  h-full
  w-1/2 md:w-full
  mb-12 md:mb-0
  flex items-end
  max-w-29
  justify-self-end
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
    w-6
    h-6
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

              <Link css={tw`w-full`} to={'/'}>
                <SMN css={tw`fill-current text-white`} />
              </Link>

            </LogoBlock>

            <TextBlock>


            <div css={tw`w-full lg:max-w-24`}> 

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

            </div>  

            <div css={tw`lg:max-w-24 mt-auto`}>
              <p css={tw`mb-3 leading-none`}>
                “The quickest way to find out how something works is to try to change it”
              </p>
              <p>Nabeel Hamdi</p>
            </div>


            </TextBlock>

          </Grid>



        </Wrapper>
    )

}