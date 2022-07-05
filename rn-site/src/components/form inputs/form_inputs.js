import React, {useState} from 'react'
import './form_inputs.css'

function FormInput(props) {
  const [focused, setFocused] = useState(false)
  const {label, errorMessage, onChange, id, ...inputProps} = props;

  const handleFocus = (e) =>{
    setFocused(true);
  };
  return (
    <div className='form_input'>
        <label htmlFor="">{label}</label>
        <input {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus} 
        focused={focused.toString()}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput