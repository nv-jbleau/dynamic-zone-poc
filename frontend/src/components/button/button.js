import React from 'react';
import './button.css';

const Button = ({data}) => {
  
  const {theme, href, label, target} = data
  return (
    <button 
      className={`uk-button uk-button-${theme} `}
      type="button"
      href={href}
      target={target}
    >
      {label}
    </button>
  )
}

export default Button;