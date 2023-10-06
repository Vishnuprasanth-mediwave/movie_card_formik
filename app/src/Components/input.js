import React from "react";

function Input(
   { label,
    type,
    name,
    placeholder,
    onChange}
){
    return <>
            <label>{label}</label>
            <input type={type}  placeholder={placeholder} name={name} onChange={onChange} />
    </>
}



export default Input