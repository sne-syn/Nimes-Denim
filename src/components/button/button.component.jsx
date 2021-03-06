import React from 'react';
import './button.styles.scss';

const Button = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button className={`${isGoogleSignIn ? 'button--google-sign-in' : ''} button`} {...otherProps}>
      {children}
    </button>
  )
}

export default Button;
