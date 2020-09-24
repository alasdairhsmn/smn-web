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
  col-span-5
  md:border-r-2
  border-white
  md:pr-4
  h-full
  w-1/4 md:w-full
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
  mb-8
  pb-8 md:pb-0
  border-b-2 md:border-b-0
  border-white
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


            <InnerText>
              <p>Contact Us</p>
              <a href="mailto:hello@somethingmorenear.com">hello@somethingmorenear.com</a>
            </InnerText>

            <InnerText>
              <p><a href="https://www.linkedin.com/company/something-more-near" target="_blank">Linkedin</a></p>
              <p><a href="https://www.instagram.com/somethingmorenear" target="_blank">Instagram</a></p>
            </InnerText>  

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