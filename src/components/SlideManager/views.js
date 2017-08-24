import React from "react"
import $ from "jquery"

import {
    Header,
    MainHeader,
    NextHeader,
    PreviousHeader,
    Content,
    SlideButton,
    ParallaxImage
} from "./styles"

export class SlideComponent extends React.Component {
    componentDidMount() {
        let { name, type, setComponentsPosition } = this.props
        let $this = $(this.component)
        let position = $this.position()
        let top = position.top + "px"
        let left = position.left + "px"

        this.props.setComponentsPosition({name, type, position: { top, left } })
    }
}

export class HeaderView extends SlideComponent {
    render() {
        let HeaderComponent
        if (this.props.type === "main") {

            if (this.props.name === "nextHeader") {
                HeaderComponent = NextHeader            
            } else if (this.props.name === "previousHeader") {
                HeaderComponent = PreviousHeader
            } else {
                HeaderComponent = MainHeader
            }

        } else {
            HeaderComponent = Header
        }
        
        return (
            <HeaderComponent
                innerRef={ (component) => {this.component = component} }
                onTransitionEnd={() => console.log(`Header transitionFinished`)}
                { ...this.props } />
        )
    }
}

export class ContentView extends SlideComponent {
    render() {
        return (
            <Content
                innerRef={ (component) => {this.component = component} }
                onTransitionEnd={() => console.log(`Content transitionFinished`)}
                { ...this.props } />
        )
    }
}

export class SlideButtonView extends SlideComponent {
    render() {
        let { type, top, left, name } = this.props
        console.log(`Button ${name}: ${top}, ${left}`)

        return (
            <SlideButton
                innerRef={ (component) => {this.component = component} }
                onTransitionEnd={() => console.log(`SlideButton transitionFinished`)}
                { ...this.props } />
        )
    }
}

export class ParallaxImageView extends SlideComponent {
    render() {
        return (
            <ParallaxImage
                innerRef={ (component) => {this.component = component} }
                onTransitionEnd={() => console.log(`ParallaxImage transitionFinished`)}
                { ...this.props } />
        )
    }
}
