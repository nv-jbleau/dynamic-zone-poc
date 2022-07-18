import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
// TODO image

const Hero = ({data}) => {
  console.log('hero data', data)
  const {text, image} = data
  return (
    <div style={{ display: "grid" }}>
      <GatsbyImage
        style={{
          gridArea: "1/1",
        }}
        image={image}
        layout="fullWidth"
        alt=""
      /> 
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        <h1 style={{ color: `gray` }}>{text}</h1>
      </div>
    </div>
    // <h1 style={{ color: `black` }}>{data.text}</h1>

    
  )
}

export default Hero