import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import {
    Slide,
    Header,
    Content,
    SlideButton,
    ScrollToTopButton,
    SlideManagerContainer,
    ParallaxImage
} from "./styles"

import { actions as slidesActions, selectors as slidesSelectors } from "Redux/Slides"

class SlideManager extends React.Component {
    constructor() {
        super()
        this.state = {
            isAnimating: false
        }
    }
    handleClick() {
        this.setState({ isAnimating: true })
        this.props.nextSlideFinished()
    }
    render() {
        let {
            header1Top,
            header1Left,
            header2Top,
            header2Left,
            content1Top,
            content1Left,
            content2Top,
            content2Left,
            image1Top,
            image1Left,
            image2Top,
            image2Left,
            image3Top,
            image3Left,
            image4Top,
            image4Left
        } = this.props.currentStep

        // let header1Top = this.state.animateFirst ? "-100%" : 0
        // let header1Left = this.state.animateFirst ? 0 : 0

        // let header2Top = this.state.animateFirst ? 0 : "100%"
        // let header2Left = this.state.animateFirst ? 0 : 0

        // let content1Top = this.state.animateFirst ? "-100%" : 0
        // let content1Left = this.state.animateFirst ? 0 : 0

        // let content2Top = this.state.animateFirst ? 0 : "100%"
        // let content2Left = this.state.animateFirst ? 0 : 0

        // let image1Top = this.state.animateFirst ? "-100%" : 0
        // let image1Left = this.state.animateFirst ? 0 : 0

        // let image2Top = this.state.animateFirst ? 0 : 0
        // let image2Left = this.state.animateFirst ? 0 : 0

        // let image3Top = this.state.animateFirst ? 0 : "100%"
        // let image3Left = this.state.animateFirst ? 0 : 0

        // let image4Top = this.state.animateFirst ? "100%" : "100%"
        // let image4Left = this.state.animateFirst ? "100%" : "100%"

        console.log("header1Top:", header1Top,
"\nheader1Left:", header1Left,
"\nheader2Top:", header2Top,
"\nheader2Left:", header2Left,
"\ncontent1Top:", content1Top,
"\ncontent1Left:", content1Left,
"\ncontent2Top:", content2Top,
"\ncontent2Left:", content2Left,
"\nimage1Top:", image1Top,
"\nimage1Left:", image1Left,
"\nimage2Top:", image2Top,
"\nimage2Left:", image2Left,
"\nimage3Top:", image3Top,
"\nimage3Left:", image3Left,
"\nimage4Top:", image4Top,
"\nimage4Left:", image4Left)

        return (
            <SlideManagerContainer>
                <Slide src={ "/assets/images/background.png" }>
                    <Header isAnimating={ this.state.isAnimating }
                        top={ header1Top }
                        left={ header1Left }>This is the first Header Cheddar :D</Header>
                    <Content
                        isAnimating={ this.state.isAnimating }
                        top={ content1Top }
                        left={ content1Left }>
                        There once was a man who lived in a shoe. The shoe was cool
                        but the was more to do. So I went to the pool and took a stool and
                        said what a fool to not bring his tools.
                    </Content>
                    <ParallaxImage
                        src={ "/assets/images/young-left.png" }
                        isAnimating={ this.state.isAnimating }
                        top={ image1Top }
                        left={ image1Left } />
                    <ParallaxImage
                        src={ "/assets/images/young-right.png" }
                        isAnimating={ this.state.isAnimating }
                        top={ image2Top }
                        left={ image2Left } />
                    <SlideButton onClick={ () => this.handleClick() }>Next Slide</SlideButton>
                </Slide>
                <Slide src={ "/assets/images/background.png" }>
                    <Header
                        isAnimating={ this.state.isAnimating }
                        top={ header2Top }
                        left={ header2Left }>Ayyyy let me slide in here right quick</Header>
                    <Content isAnimating={ this.state.isAnimating }
                        top={ content2Top }
                        left={ content2Left }>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odio deleniti impedit soluta nostrum ipsa ea harum molestias, perspiciatis consectetur quibusdam, dolores voluptates quas vero. Odit itaque dicta illum consectetur.
                    </Content>
                    <ParallaxImage
                        src={ "/assets/images/old-left.png" }
                        isAnimating={ this.state.isAnimating }
                        top={ image3Top }
                        left={ image3Left } />
                    <ParallaxImage
                        src={ "/assets/images/young-right.png" }
                        isAnimating={ this.state.isAnimating }
                        top={ image4Top }
                        left={ image4Left } />
                    <SlideButton onClick={ () => this.handleClick() }>Next Slide</SlideButton>
                </Slide>
            </SlideManagerContainer>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentStep: slidesSelectors.selectCurrentStep(state)
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({...slidesActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideManager)
