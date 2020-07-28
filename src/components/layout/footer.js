import tw from "twin.macro"
import React from "react"
import { Link } from "gatsby"

const Wrapper = tw.div`
  bg-black 
  pb-12 md:pb-48 
  text-white
`

const Grid = tw.div`
  container 
  md:mx-auto 
  grid 
  gap-4
  md:grid-cols-3 
  text-lg md:text-2xl 
  leading-relaxed 
  font-light
  py-16
`

const CTA = tw.div`
  hidden
  bg-gray-400 
  w-auto 
  py-16 
  mb-16 
  text-black 
  text-3xl 
  text-center
`

export default function Footer () {

    return (
        <Wrapper>

          <CTA>
            Something More Near / Real / Serious / Social / Practical
          </CTA>

          <Grid>

            <div>
              <p>Something More Near</p>
            </div>

            <div>
             <p> <Link to={'/about'}>About</Link></p>
              <p><Link to={'/changework'}>Changework</Link></p>
              <p><Link to={'/blog'}>Blog</Link></p>
              <p><Link to={'/'}>Team</Link></p>
              <p><Link to={'/contact'}>Contact</Link></p>
            </div>

            <div>
              <p>Something More Near</p>
              <p>114–118 Lower Marsh</p>
              <p>Waterloo</p>
              <p>London</p>
              <p>SE1 7AE</p>
            </div>

          </Grid>

        </Wrapper>
    )

}