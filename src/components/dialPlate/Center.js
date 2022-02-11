import React from "react";

// component imports
import CloudOutlined from '@mui/icons-material/CloudOutlined'
import TwoSidedArrow from "./TwoSidedArrow";

// styling imports
import "./Center.css"

let top = {
    position: "absolute",
    top: 0,
    marginLeft: "auto",
    marginRight: "auto",
    transform: "rotate(90deg)"
}

let left = {
    position: "absolute",
    left: 0,
    marginTop: "auto",
    marginBottom: "auto"
}

let right = {
    position: "absolute",
    right: 0,
    marginTop: "auto",
    marginBottom: "auto"
}

let bottom = {
    position: "absolute",
    bottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    transform: "rotate(90deg)"
}


let Center = ({ level }) => {
    return (
        <div className="center-circle">
            <TwoSidedArrow customStyle={top} />
            <TwoSidedArrow customStyle={left} />

            <div className="center">
                <CloudOutlined sx={{ fontSize: 80 }} />
            </div>
            
            <TwoSidedArrow customStyle={bottom} />
            <TwoSidedArrow customStyle={right} />
        </div>
    )
}

export default Center