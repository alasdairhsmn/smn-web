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
  grid 
  gap-4
  grid-cols-2 md:grid-cols-12 
  text-lg md:text-2xl 
  leading-relaxed 
  font-light
  py-8 md:py-16
  min-h-screen80
`

const Rule = tw.div `
  w-full
  border-b-8
  border-white
  my-8
  col-span-12
`

const LogoBlock = tw.div `
  col-span-5
  border-r-2
  border-white
  pr-4
  h-full
`

const TextBlock = tw.div `
  col-span-6
  col-start-7
  md:flex
`

const InnerText = tw.div `
  flex-grow
`


export default function Footer () {

    return (
        <Wrapper>

          <Grid>

            <LogoBlock>

              <Link to={'/'}>
                <SMN />
              </Link>

            </LogoBlock>

            <TextBlock>
              
            <InnerText>
              <p><Link to={'/about'}>About</Link></p>
              <p><Link to={'/changework'}>Changework</Link></p>
              <p><Link to={'/blog'}>Blog</Link></p>
              <p><Link to={'/contact'}>Contact</Link></p>
            </InnerText>  

            <InnerText>
              <p>hello@somethingmorenear.com</p>
              <p><Link to={'/about'}>About</Link></p>
              <p><Link to={'/changework'}>Changework</Link></p>
              <p><Link to={'/blog'}>Blog</Link></p>
              <p><Link to={'/contact'}>Contact</Link></p>
            </InnerText>  


            </TextBlock>

          </Grid>



        </Wrapper>
    )

}