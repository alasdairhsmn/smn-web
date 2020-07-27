import tw from "twin.macro"
import React from "react"

const Wrapper = tw.div`
  bg-black pb-48 text-white
`

const Grid = tw.div`
  container mx-auto grid grid-cols-3 text-2xl leading-relaxed font-light
`

const CTA = tw.div`
  bg-gray-400 w-auto py-16 mb-16 text-black text-3xl text-center
`

export default function Footer () {

    return (
        <Wrapper>

          <CTA>
            Something More Near / Real / Serious / Social / Practical
          </CTA>

          <Grid>

            <div>
              <p>About</p>
              <p>Changework</p>
              <p>Team</p>
              <p>Blog</p>
              <p>Contact</p>
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