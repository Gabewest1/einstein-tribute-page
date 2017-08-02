import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import {
    Slide,
    Header,
    Content,
    NextSlideButton,
    ScrollToTopButton,
    SlideManagerContainer,
    ParallaxImage
} from "./styles"


class SlideManager extends React.Component {
    constructor() {
        super()
        this.state = {
            isAnimating: false,
            animateFirst: false
        }
    }
    handleClick() {
        this.setState({ isAnimating: true, animateFirst: !this.state.animateFirst })
    }
    render() {
        return (
            <Slide>
                <Header isAnimating={ this.state.isAnimating } top={ this.state.animateFirst ? "100%" : 0 } left={ this.state.animateFirst ? "100%" : 0 }>This is the first Header Cheddar :D</Header>
                <Header isAnimating={ this.state.isAnimating } top={ this.state.animateFirst ? 0 : "100%" } left={ this.state.animateFirst ? 0 : "100%" }>Ayyyy let me slide in here right quick</Header>
                <Content isAnimating={ this.state.isAnimating } top={ this.state.animateFirst ? "100%" : 0 } left={ this.state.animateFirst ? "100%" : 0 }>
                        There once was a man who lived in a shoe. The shoe was cool
                        but the was more to do. So I went to the pool and took a stool and
                        said what a fool to not bring his tools.
                </Content>
                <Content isAnimating={ this.state.isAnimating } top={ this.state.animateFirst ? 0 : "100%" } left={ this.state.animateFirst ? 0 : "100%" }>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odio deleniti impedit soluta nostrum ipsa ea harum molestias, perspiciatis consectetur quibusdam, dolores voluptates quas vero. Odit itaque dicta illum consectetur.
                </Content>
                <div>
                    <NextSlideButton onClick={ () => this.handleClick() }>Next Slide</NextSlideButton>
                </div>
            </Slide>
        )
    }
}

function mapStateToProps(state) {
    return {}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideManager)
