import React from "react"
import $ from "jquery"

import {
    Header,
    Content,
    SlideButton,
    ParallaxImage
} from "./styles"

export class SlideComponent extends React.Component {
    componentDidMount() {
        console.log("SLIDECOMPONENT:", this.component)
        let { name, type, setComponentsPosition } = this.props
        let $this = $(this.component)
        let { top, left } = $this.position()

        this.props.setComponentsPosition({name, type, position: {top, left}})
    }
}

export class HeaderView extends SlideComponent {
    render() {
        return (
            <Header innerRef={ (component) => {this.component = component} } { ...this.props } />
        )
    }
}

export class ContentView extends SlideComponent {
    render() {
        return (
            <Content innerRef={ (component) => {this.component = component} } { ...this.props } />
        )
    }
}

export class SlideButtonView extends SlideComponent {
    render() {
        return (
            <SlideButton innerRef={ (component) => {this.component = component} } { ...this.props } />
        )
    }
}

export class ParallaxImageView extends SlideComponent {
    render() {
        return (
            <ParallaxImage innerRef={ (component) => {this.component = component} } { ...this.props } />
        )
    }
}
