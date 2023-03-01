import React from "react";
import Input from '@mui/material/Input';

const MyInput = (props) => {
    return (
        <Input onKeyDown={props.event} placeholder= {props.placeholder}/>
    )
}

export default MyInput;