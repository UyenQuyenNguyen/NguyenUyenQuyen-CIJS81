import React from "react";



const MyCirle = (props) => {

    return (
        <div className="circle" style={{borderRadius: "100%" , backgroundColor: props.color, width :"100px", height: "100px", boxShadow:'8px 8px 35px ' + props.color }}></div>
    )
}

export default MyCirle;