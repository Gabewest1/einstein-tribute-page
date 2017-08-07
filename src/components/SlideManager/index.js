import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import {
    Slide,
    CurrentSlide,
    Header,
    Content,
    SlideButton,
    SlideManagerContainer,
    ParallaxImage
} from "./styles"

import { SlideComponent } from "./views"

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
            gridStyle,
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
            image1Src,
            image2Top,
            image2Left,
            image2Src,            
            image3Top,
            image3Left,
            image3Src,            
            image4Top,
            image4Left,
            image4Src            
        } = this.props.currentStep

        let { nextGridStyle } = this.props

        return (
            <SlideManagerContainer>
                <CurrentSlide src={ "/assets/images/background.png" }>
                    <Header isAnimating={ this.state.isAnimating }
                        top={ header1Top }
                        left={ header1Left }>This is the first Header Cheddar :D
                    </Header>
                    <Header isAnimating={ this.state.isAnimating }
                        top={ header2Top }
                        left={ header2Left }>This is the first Header Cheddar :D
                    </Header>
                    <Content
                        isAnimating={ this.state.isAnimating }
                        top={ content2Top }
                        left={ content2Left }>
                        There once was a man who lived in a shoe. The shoe was cool
                        but the was more to do. So I went to the pool and took a stool and
                        said what a fool to not bring his tools.
                    </Content>
                    <Content
                        isAnimating={ this.state.isAnimating }
                        top={ content1Top }
                        left={ content1Left }>
                        There once was a man who lived in a shoe. The shoe was cool
                        but the was more to do. So I went to the pool and took a stool and
                        said what a fool to not bring his tools.
                    </Content>
                    <ParallaxImage
                        src={ image1Src }
                        isAnimating={ this.state.isAnimating }
                        top={ image1Top }
                        left={ image1Left } />
                    <ParallaxImage
                        src={ image2Src }
                        isAnimating={ this.state.isAnimating }
                        top={ image2Top }
                        left={ image2Left } />
                    <ParallaxImage
                        src={ image3Src }
                        isAnimating={ this.state.isAnimating }
                        top={ image3Top }
                        left={ image3Left } />
                    <ParallaxImage
                        src={ image4Src }
                        isAnimating={ this.state.isAnimating }
                        top={ image4Top }
                        left={ image4Left } />
                    <SlideButton onClick={ () => this.handleClick() }>Next Slide</SlideButton>
                </CurrentSlide>
                <Slide gridStyle={ gridStyle } src={ "/assets/images/background.png" }>
                    <Header isAnimating={ this.state.isAnimating }
                        top={ header1Top }
                        left={ header1Left }>This is the first Header Cheddar :D
                    </Header>
                    <Content
                        isAnimating={ this.state.isAnimating }
                        top={ content1Top }
                        left={ content1Left }>
                        There once was a man who lived in a shoe. The shoe was cool
                        but the was more to do. So I went to the pool and took a stool and
                        said what a fool to not bring his tools.
                    </Content>
                    <ParallaxImage
                        src={ image1Src }
                        isAnimating={ this.state.isAnimating }
                        top={ image1Top }
                        left={ image1Left } />
                    <ParallaxImage
                        src={ image2Src }
                        isAnimating={ this.state.isAnimating }
                        top={ image2Top }
                        left={ image2Left } />
                    <SlideButton onClick={ () => this.handleClick() }>Next Slide</SlideButton>
                </Slide>
                <Slide gridStyle={ gridStyle } src={ "/assets/images/background.png" }>
                    <Header isAnimating={ this.state.isAnimating }
                        top={ header1Top }
                        left={ header1Left }>This is the first Header Cheddar :D
                    </Header>
                    <Content
                        isAnimating={ this.state.isAnimating }
                        top={ content1Top }
                        left={ content1Left }>
                        There once was a man who lived in a shoe. The shoe was cool
                        but the was more to do. So I went to the pool and took a stool and
                        said what a fool to not bring his tools.
                    </Content>
                    <ParallaxImage
                        src={ image1Src }
                        isAnimating={ this.state.isAnimating }
                        top={ image1Top }
                        left={ image1Left } />
                    <ParallaxImage
                        src={ image2Src }
                        isAnimating={ this.state.isAnimating }
                        top={ image2Top }
                        left={ image2Left } />
                    <SlideButton onClick={ () => this.handleClick() }>Next Slide</SlideButton>
                </Slide>
                <Slide gridStyle={ nextGridStyle } src={ "/assets/images/background.png" }>
                    <Header
                        isAnimating={ this.state.isAnimating }
                        top={ header2Top }
                        left={ header2Left }>Ayyyy let me slide in here right quick
                    </Header>
                    <Content isAnimating={ this.state.isAnimating }
                        top={ content2Top }
                        left={ content2Left }>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odio deleniti impedit soluta nostrum ipsa ea harum molestias, perspiciatis consectetur quibusdam, dolores voluptates quas vero. Odit itaque dicta illum consectetur.
                    </Content>
                    <ParallaxImage
                        src={ image3Src }
                        isAnimating={ this.state.isAnimating }
                        top={ image3Top }
                        left={ image3Left } />
                    <ParallaxImage
                        src={ image4Src }
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
    let slides = slidesSelectors.selectSlides(state)
    let curSlide = slidesSelectors.selectCurrentSlideIndex(state)
    let nextGridStyle = slides[(curSlide + 1) % slides.length].gridStyle

    return {
        currentStep: slidesSelectors.selectCurrentSlide(state),
        nextGridStyle
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({...slidesActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideManager)
