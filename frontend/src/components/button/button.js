import React from 'react';

const Button = ({data}) => {
  
  const {theme, href, label, target} = data
  return (
    <button 
      className={`uk-button uk-button-${theme} uk-margin-right`}
      type="button"
      href={href}
      target={target}
    >
      {label}
    </button>
  )
}

export default Button;