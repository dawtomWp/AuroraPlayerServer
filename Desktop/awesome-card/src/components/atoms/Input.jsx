import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputField = styled.input`
    border:none;
    background:${({theme})=>theme.glass};
    border-radius: 30px;
    color:${({theme})=> theme.altTextColor};
    width:210px;
    height:40px;
    text-align:center;
    outline:${({theme})=> theme.outline};
    backdrop-filter: blur(5px);  
    &::placeholder {color:${({theme})=>theme.altTextColor}};
  
`

const Input = ({placeholder,type,value,onChange}) => {
    return ( 
        <InputField
           placeholder={placeholder}
           type={type}
           value={value}
           onChange={onChange}
        />
       
     );
}

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    value:PropTypes.oneOfType([
       PropTypes.string,
       PropTypes.number
    ])
}
 
export default Input;
