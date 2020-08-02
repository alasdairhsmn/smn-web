import tw from "twin.macro"
import React from "react"
import { Link } from "gatsby"

import paypal from "../../images/sample/paypal.png"
import allianz from "../../images/sample/allianz.png"
import ce from "../../images/sample/clientearth.png"
import franco from "../../images/sample/francomanca.png"
import mol from "../../images/sample/mol.png"
import ted from "../../images/sample/ted.png"

const Hero = tw.div`
  min-h-screen 
  flex 
  items-center 
`

const Block = tw.div`
    container 
    md:mx-auto 
    md:flex 
    space-x-16
    md:flex-row-reverse
    items-center
`

const LogoGrid = tw.div `
    grid 
    grid-cols-2 
    items-center 
    gap-12 
    overflow-hidden
    flex-grow
    w-1/2
`

const Logo = tw.div `

`

const LogoImage = tw.img `
    w-40
    mx-12
    h-auto
`

const Subhead = tw.div`
    text-xl md:text-2xl 
    font-light
    leading-snug
    w-1/2
`

const SubTitle = tw.div `
    font-display
    font-light
    my-6
    text-3xl md:text-6xl
    leading-tight
`

const Button = tw.div `
    p-4
    inline-block
    rounded
    border
    border-black
    font-display
    text-xl
    my-8
`

export default function HomeClients ( {data} ) {

    return (
        
    <Hero>
      
        <Block>

            <LogoGrid>

                <Logo>
                    <LogoImage src={ted} alt=''></LogoImage>
                </Logo>  

                <Logo>
                    <LogoImage src={mol} alt=''></LogoImage>
                </Logo> 

                <Logo>
                    <LogoImage src={paypal} alt=''></LogoImage>
                </Logo>  

                <Logo>
                    <LogoImage src={allianz} alt=''></LogoImage>
                </Logo>  

                <Logo>
                    <LogoImage src={ce} alt=''></LogoImage>
                </Logo> 

                <Logo>
                    <LogoImage src={franco} alt=''></LogoImage>
                </Logo>  

            </LogoGrid>


            <Subhead>

                <p>Who we work with</p>

                <SubTitle>Partners for change</SubTitle>

                <p>We work with the ambitious disruptors and evolutionaries to bring together different minds and move organisations forwards together, quicker.</p>
                <br />
                <p>We work with leaders and founders across international corporates, cultural and non-profits</p> 

                <Link to={`/about`}>
                    <Button>About us &rarr;</Button> 
                </Link>

            </Subhead>

  
        </Block>
    
    </Hero>

    )

}