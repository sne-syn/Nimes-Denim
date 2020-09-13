import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className='form'>
      <input className='form__input' onChange={handleChange} {...otherProps} />
      {label ? (
        <label className={`${
          otherProps.value.length ? 'shrink' : ''
          } form__label`}
        >
          {label}
        </label>
      )
        : null}
    </div>
  )
}

export default FormInput;
