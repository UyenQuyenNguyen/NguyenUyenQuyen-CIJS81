import React from "react";
import Checkbox from '@mui/material/Checkbox';
import styled from "@emotion/styled";

const MyCheckbox = (props) => {
    return (
        <p><Checkbox/>{props.content}</p>
    )
 }
export default MyCheckbox;