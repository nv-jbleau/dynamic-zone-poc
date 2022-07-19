import React from 'react'
import Markdown from 'react-markdown'
import './image-paragraph.css'

import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-plugin-image"

const ImageParagraph = ({data}) => {
  const {markdown, alignment, image} = data
  console.log('image path', image)
  const path = `http://localhost:1337${image.url}`

  // http://localhost:1337/uploads/we_love_pizza_b7252e0438.jpg
  return (
    <div className='section'>
      <img className='image' style={{float: alignment}} src={path} alt="A kitten"  />
      <Markdown source={markdown} escapeHtml={false} />
    </div>
  )
}



export default ImageParagraph;

