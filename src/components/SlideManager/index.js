import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import {
    SlideManagerContainer    
} from "./styles"

import {
    SlideView,
    CurrentSlideView,
    HeaderView,
    ContentView,
    SlideButtonView,
    ParallaxImageView
} from "./views"

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
                <CurrentSlideView src={ "/assets/images/background.png" }>
                    <HeaderView isAnimating={ this.state.isAnimating }
                        top={ header1Top }
                        left={ header1Left }>This is the first Header Cheddar :D
                    </HeaderView>
                    <HeaderView isAnimating={ this.state.isAnimating }
                        top={ header2Top }
                        left={ header2Left }>This is the first Header Cheddar :D
                    </HeaderView>
                    <ContentView
                        isAnimating={ this.state.isAnimating }
                        top={ content2Top }
                        left={ content2Left }>
                        There once was a man who lived in a shoe. The shoe was cool
                        but the was more to do. So I went to the pool and took a stool and
                        said what a fool to not bring his tools.
                    </ContentView>
                    <ContentView
                        isAnimating={ this.state.isAnimating }
                        top={ content1Top }
                        left={ content1Left }>
                        There once was a man who lived in a shoe. The shoe was cool
                        but the was more to do. So I went to the pool and took a stool and
                        said what a fool to not bring his tools.
                    </ContentView>
                    <ParallaxImageView
                        src={ image1Src }
                        isAnimating={ this.state.isAnimating }
                        top={ image1Top }
                        left={ image1Left } />
                    <ParallaxImageView
                        src={ image2Src }
                        isAnimating={ this.state.isAnimating }
                        top={ image2Top }
                        left={ image2Left } />
                    <ParallaxImageView
                        src={ image3Src }
                        isAnimating={ this.state.isAnimating }
                        top={ image3Top }
                        left={ image3Left } />
                    <ParallaxImageView
                        src={ image4Src }
                        isAnimating={ this.state.isAnimating }
                        top={ image4Top }
                        left={ image4Left } />
                    <SlideButtonView onClick={ () => this.handleClick() }>Next Slide</SlideButtonView>
                </CurrentSlideView>
                <SlideView gridStyle={ gridStyle } src={ "/assets/images/background.png" }>
                    <HeaderView isAnimating={ this.state.isAnimating }
                        top={ header1Top }
                        left={ header1Left }>This is the first Header Cheddar :D
                    </HeaderView>
                    <ContentView
                        isAnimating={ this.state.isAnimating }
                        top={ content1Top }
                        left={ content1Left }>
                        There once was a man who lived in a shoe. The shoe was cool
                        but the was more to do. So I went to the pool and took a stool and
                        said what a fool to not bring his tools.
                    </ContentView>
                    <ParallaxImageView
                        src={ image1Src }
                        isAnimating={ this.state.isAnimating }
                        top={ image1Top }
                        left={ image1Left } />
                    <ParallaxImageView
                        src={ image2Src }
                        isAnimating={ this.state.isAnimating }
                        top={ image2Top }
                        left={ image2Left } />
                    <SlideButtonView onClick={ () => this.handleClick() }>Next Slide</SlideButtonView>
                </SlideView>
                <SlideView gridStyle={ gridStyle } src={ "/assets/images/background.png" }>
                    <HeaderView isAnimating={ this.state.isAnimating }
                        top={ header1Top }
                        left={ header1Left }>This is the first Header Cheddar :D
                    </HeaderView>
                    <ContentView
                        isAnimating={ this.state.isAnimating }
                        top={ content1Top }
                        left={ content1Left }>
                        There once was a man who lived in a shoe. The shoe was cool
                        but the was more to do. So I went to the pool and took a stool and
                        said what a fool to not bring his tools.
                    </ContentView>
                    <ParallaxImageView
                        src={ image1Src }
                        isAnimating={ this.state.isAnimating }
                        top={ image1Top }
                        left={ image1Left } />
                    <ParallaxImageView
                        src={ image2Src }
                        isAnimating={ this.state.isAnimating }
                        top={ image2Top }
                        left={ image2Left } />
                    <SlideButtonView onClick={ () => this.handleClick() }>Next Slide</SlideButtonView>
                </SlideView>
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
