import React, { Fragment } from 'react';
import Button from '../button/button';
import Hero from '../hero';
import ImageParagraph from '../image-paragraph/image-paragraph';

const DynamicZone = ({data}) => {
  console.log('dynamic content', data);
  return (
    <Fragment>
      {data.map((contentItem) => {

        switch(contentItem.strapi_component) {
          case 'blocks.hero' : {
            return <Hero key={`${contentItem.strapi_component}_${contentItem.id}`} data={contentItem}/>
          }
          case 'shared.buttons' :{
            return <Button key={`${contentItem.strapi_component}_${contentItem.id}`} data={contentItem} />
          }
          case 'blocks.image-paragraph' : {
            return <ImageParagraph key={`${contentItem.strapi_component}_${contentItem.id}`} data={contentItem} />
          }
        }

      })}
    </Fragment>
  )
  

}

export default DynamicZone;