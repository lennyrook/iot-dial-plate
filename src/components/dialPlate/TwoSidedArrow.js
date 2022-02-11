import React from "react";

// component imports
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';

// styling imports

let leftArrowStyle = {
    fontSize: 41,
    transform: "scale(-1, 1)",
    marginRight: "-2rem"
}

let rightArrowStyle = {
    fontSize: 41
}

let TwoSidedArrow = ({customStyle}) => {
    return (
        <div className="two-sided-arrow" style={customStyle}>
            <ArrowRightAltSharpIcon sx={leftArrowStyle} shapeRendering="crispEdges"/>
            <ArrowRightAltSharpIcon sx={rightArrowStyle} shapeRendering="crispEdges" />
        </div>
    )
}

export default TwoSidedArrow

