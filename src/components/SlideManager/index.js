import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PropTypes from "prop-types"

import {
    SlideManagerContainer,
    Slide,
    CurrentSlide
} from "./styles"

import {
    HeaderView,
    ContentView,
    SlideButtonView,
    ParallaxImageView
} from "./views"

import { actions as slidesActions, selectors as slidesSelectors } from "Redux/Slides"

class SlideManager extends React.Component {
    handleClick() {
        this.setState({ isAnimating: true })
        this.props.nextSlideFinished()
    }
    render() {
        let { 
            currentSlide, nextSlide, previousSlide, setComponentsPosition,
            isTransitioningSlides, isTransitioningForwards, isTransitioningBackwards,
            isTransitionCanceled 
        } = this.props

        return (
            <SlideManagerContainer>
                <CurrentSlide src={ "/assets/images/background.png" }>
                    <HeaderView
                        name="header"
                        type="current"
                        isAnimating={ isTransitioningSlides }
                        top={ currentSlide.header.top }
                        left={ currentSlide.header.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { currentSlide.header.content }
                    </HeaderView>
                    <HeaderView
                        name="nextHeader"
                        type="current"
                        isAnimating={ isTransitioningSlides }
                        top={ nextSlide.header.start.top }
                        left={ nextSlide.header.start.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { nextSlide.header.content }
                    </HeaderView>
                    <HeaderView
                        name="previousHeader"
                        type="current"
                        isAnimating={ isTransitioningSlides }
                        top={ previousSlide.header.end.top }
                        left={ previousSlide.header.end.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { previousSlide.header.content }
                    </HeaderView>
                    <ContentView
                        name="content"
                        type="current"
                        isAnimating={ isTransitioningSlides }
                        top={ currentSlide.body.left }
                        left={ currentSlide.body.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { currentSlide.body.content }
                    </ContentView>
                    <ContentView
                        name="nextContent"
                        type="current"
                        isAnimating={ isTransitioningSlides }
                        top={ nextSlide.body.start.top }
                        left={ nextSlide.body.start.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { nextSlide.body.content }
                    </ContentView>
                    <ContentView
                        name="previousContent"
                        type="current"
                        isAnimating={ isTransitioningSlides }
                        top={ previousSlide.body.end.top }
                        left={ previousSlide.body.end.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { previousSlide.body.content }
                    </ContentView>
                    <ParallaxImageView
                        name="image1"
                        type="current"
                        src={ currentSlide.image1.src }
                        isAnimating={ isTransitioningSlides }
                        top={ currentSlide.image1.top }
                        left={ currentSlide.image1.left }
                        setComponentsPosition={ setComponentsPosition } />
                    <ParallaxImageView
                        name="image2"
                        type="current"
                        src={ currentSlide.image2.src }
                        isAnimating={ isTransitioningSlides }
                        top={ currentSlide.image2.top }
                        left={ currentSlide.image2.left }
                        setComponentsPosition={ setComponentsPosition } />
                    <ParallaxImageView
                        name="nextImage1"
                        type="current"
                        src={ nextSlide.image1.src }
                        isAnimating={ isTransitioningSlides }
                        top={ nextSlide.image1.start.top }
                        left={ nextSlide.image1.start.left }
                        setComponentsPosition={ setComponentsPosition } />
                    <ParallaxImageView
                        name="nextImage2"
                        type="current"
                        src={ nextSlide.image2.src }
                        isAnimating={ isTransitioningSlides }
                        top={ nextSlide.image2.start.top }
                        left={ nextSlide.image2.start.left }
                        setComponentsPosition={ setComponentsPosition } />
                    <ParallaxImageView
                        name="previousImage1"
                        type="current"
                        src={ previousSlide.image1.src }
                        isAnimating={ isTransitioningSlides }
                        top={ previousSlide.image1.end.top }
                        left={ previousSlide.image1.end.left }
                        setComponentsPosition={ setComponentsPosition } />
                    <ParallaxImageView
                        name="previousImage2"
                        type="current"
                        src={ previousSlide.image2.src }
                        isAnimating={ isTransitioningSlides }
                        top={ previousSlide.image2.end.top }
                        left={ previousSlide.image2.end.left }
                        setComponentsPosition={ setComponentsPosition } />
                    <SlideButtonView
                        onClick={ () => this.handleClick() }
                        name="button"
                        type="current"
                        top={ currentSlide.button.top }
                        left={ currentSlide.button.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { currentSlide.button.content }
                    </SlideButtonView>
                    <SlideButtonView
                        onClick={ () => this.handleClick() }
                        name="nextButton"
                        type="current"
                        top={ nextSlide.button.start.top }
                        left={ nextSlide.button.start.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { nextSlide.button.content }
                    </SlideButtonView>
                    <SlideButtonView
                        onClick={ () => this.handleClick() }
                        name="previousButton"
                        type="current"
                        top={ previousSlide.button.end.top }
                        left={ previousSlide.button.end.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { previousSlide.button.content }
                    </SlideButtonView>
                </CurrentSlide>
                <Slide gridStyle={ nextSlide.gridStyle } style={{opacity: 0}}>
                    <HeaderView
                        name="header"
                        type="next"
                        top={ nextSlide.header.top }
                        left={ nextSlide.header.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { nextSlide.header.content }
                    </HeaderView>
                    <ContentView
                        name="content"
                        type="next"
                        top={ nextSlide.body.top }
                        left={ nextSlide.body.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { nextSlide.body.content }
                    </ContentView>
                    <ParallaxImageView
                        name="image1"
                        type="next"
                        src={ nextSlide.image1.src }
                        top={ nextSlide.image1.top }
                        left={ nextSlide.image1.left }
                        setComponentsPosition={ setComponentsPosition } />
                    <ParallaxImageView
                        name="image2"
                        type="next"
                        src={ nextSlide.image2.src }
                        top={ nextSlide.image2.top }
                        left={ nextSlide.image2.left }
                        setComponentsPosition={ setComponentsPosition } />
                    <SlideButtonView
                        onClick={ () => this.handleClick() }
                        name="button"
                        type="next"
                        top={ nextSlide.button.top }
                        left={ nextSlide.button.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { nextSlide.button.content }
                    </SlideButtonView>
                </Slide>
                <Slide gridStyle={ previousSlide.gridStyle } style={{opacity: 0}}>
                    <HeaderView
                        name="header"
                        type="previous"
                        top={ previousSlide.header.top }
                        left={ previousSlide.header.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { previousSlide.header.content }
                    </HeaderView>
                    <ContentView
                        name="content"
                        type="previous"
                        top={ previousSlide.body.top }
                        left={ previousSlide.body.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { previousSlide.body.content }
                    </ContentView>
                    <ParallaxImageView
                        name="image1"
                        type="previous"
                        src={ previousSlide.image1.src }
                        top={ previousSlide.image1.top }
                        left={ previousSlide.image1.left }
                        setComponentsPosition={ setComponentsPosition } />
                    <ParallaxImageView
                        name="image2"
                        type="previous"
                        src={ previousSlide.image2.src }
                        top={ previousSlide.image2.top }
                        left={ previousSlide.image2.left }
                        setComponentsPosition={ setComponentsPosition } />
                    <SlideButtonView
                        onClick={ () => this.handleClick() }
                        name="button"
                        type="previous"
                        top={ previousSlide.button.top }
                        left={ previousSlide.button.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { previousSlide.button.content }
                    </SlideButtonView>
                </Slide>
            </SlideManagerContainer>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentSlide: slidesSelectors.selectCurrentSlide(state),
        nextSlide: slidesSelectors.selectNextSlide(state),
        previousSlide: slidesSelectors.selectPreviousSlide(state),
        isTransitioningSlides: slidesSelectors.isTransitioningSlides(state),
        isTransitioningForwards: slidesSelectors.isTransitioningForwards(state),
        isTransitioningBackwards: slidesSelectors.isTransitioningBackwards(state),
        isTransitionCanceled: slidesSelectors.isTransitionCanceled(state)
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({...slidesActions}, dispatch)
}

SlideManager.propTypes = {
    currentSlide: PropTypes.object.isRequired,
    nextSlide: PropTypes.object.isRequired,
    previousSlide: PropTypes.object.isRequired,
    isTransitioningSlides: PropTypes.bool.isRequired,
    isTransitioningForwards: PropTypes.bool.isRequired,
    isTransitioningBackwards: PropTypes.bool.isRequired,
    isTransitionCanceled: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideManager)
