import React from "react"
import sizeMe from "react-sizeme"

import {
    Slide,
    CurrentSlide,
    Header,
    Content,
    SlideButton,
    ParallaxImage
} from "./styles"

export class SlideComponent extends React.Component {
    componentDidMount() {
        let { name, nextOrPrev, setComponentsPosition } = this.props
        let top = window.getComputedStyle(this.component).getPropertyValue("top")
        let left = window.getComputedStyle(this.component).getPropertyValue("left")

        this.props.setComponentsPosition(name, nextOrPrev, {top, left})
    }
    render() {
        let { Component } = this.props

        return (
            <Component { ...this.props } />
        )
    }
}
