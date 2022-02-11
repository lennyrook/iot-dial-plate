import React from "react"

// component imports
import Center from "./Center"
import DevicesCircle from "./DevicesCircle"

// styling imports
import "./DialPlate.css"
import ProtocolsCircle from "./ProtocolsCircle"

class DialPlate extends React.Component {
    render() {
        let level = 1

        return (
            <div className="dial-plate">
                <DevicesCircle level={level++} />
                <ProtocolsCircle level={level++} />
                <Center level={level++} />
            </div>
        )
    }
}

export default DialPlate