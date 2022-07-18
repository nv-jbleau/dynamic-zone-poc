import React from 'react'
import Markdown from 'react-markdown'
import './image-paragraph.css'

const ImageParagraph = ({data}) => {
  const {markdown, alignment, image} = data

  return (
    <div>
      <div className='block' style={{float: alignment}}></div>
      <Markdown source={markdown} escapeHtml={false} />
    </div>
  )
}



export default ImageParagraph;

