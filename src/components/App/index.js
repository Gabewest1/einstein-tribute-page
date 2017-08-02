import React from "react"

import Slides from "Components/Slides"
import SlideManager from "Components/SlideManager"
import styled from "styled-components"

let Div = styled.div`
    background: green;
    border: solid thin black;
    height: 200px;
    width: 200px;
    position: relative;
    ${({ left, top }) => `left: ${left}; top: ${top}};`}

`

export default class App extends React.Component {
    render() {
        return (
            // <div>
            //     <Div top={ "40%" } left={ "50%" }></Div>
            //     <Div top={ "40%" } left={ "90%" }></Div>
            // </div>
            <SlideManager />
        )
    }
}
