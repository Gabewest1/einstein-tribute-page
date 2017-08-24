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
        this.props.startTransitionForwards()
        setTimeout(() => {
            this.props.transitionFinished()
            setTimeout(() => {
                this.props.renderNextSlide()
                this.props.nextSlideFinished()
                setTimeout(() => {
                    this.props.resetTransitions()
                    this.props.renderNextSlideFinished()
                }, 2000)
            }, 2000)
            
        }, 2000)
    }
    render() {
        let { 
            currentSlide, nextSlide, previousSlide, currentPositions, nextPositions, previousPositions,
            setComponentsPosition, isTransitioningSlides, isTransitioningForwards,
            isTransitioningBackwards, isTransitionCanceled, isTransitionFinished,
            wasTransitioningForwards, wasTransitioningBackwards, isRenderingNextSlide
        } = this.props

        console.log("CURRENT POSITIONS:", currentPositions)
        return (
            <SlideManagerContainer>
                {currentPositions.header && <CurrentSlide src={ "/assets/images/background.png" }>
                    {<HeaderView
                        name="header"
                        type="main"
                        isAnimating={ isTransitioningSlides }
                        isTransitionCanceled={ isTransitionCanceled }
                        isTransitionFinished={ isTransitionFinished }
                        isTransitioningForwards={ isTransitioningForwards }
                        isTransitioningBackwards={ isTransitioningBackwards }
                        wasTransitioningForwards={ wasTransitioningForwards }
                        wasTransitioningBackwards={ wasTransitioningBackwards }
                        start={ {top: currentPositions.header.top, left: currentPositions.header.left} }
                        next={ {
                            top: `${currentPositions.header.top} + ${currentSlide.header.end.top}`,
                            left: `${currentPositions.header.left} + ${currentSlide.header.end.left}`
                        }}
                        previous={ {
                            top: `${currentPositions.header.top} + ${currentSlide.header.start.top}`,
                            left: `${currentPositions.header.left} + ${currentSlide.header.start.left}`
                        }}
                        finishNext={ {top: nextPositions.header.top, left: nextPositions.header.left}}
                        finishPrevious={ {top: previousPositions.header.top, left: previousPositions.header.left}}
                        setComponentsPosition={ setComponentsPosition }>
                        { isRenderingNextSlide ? currentSlide.header.content :
                          isTransitionFinished && wasTransitioningForwards ? nextSlide.header.content :
                          isTransitionFinished && wasTransitioningBackwards ? previousSlide.header.content :
                          currentSlide.header.content }
                    </HeaderView>}
                    {<HeaderView
                        name="nextHeader"
                        type="main"
                        isAnimating={ isTransitioningSlides }
                        isTransitionCanceled={ isTransitionCanceled }
                        isTransitionFinished={ isTransitionFinished }
                        isTransitioningForwards={ isTransitioningForwards }
                        start={ {
                            top: `${nextPositions.header.top} + ${nextSlide.header.start.top}`,
                            left: `${nextPositions.header.left} + ${nextSlide.header.start.left}`
                        } }
                        finish={ {top: nextPositions.header.top, left: nextPositions.header.left} }
                        setComponentsPosition={ setComponentsPosition }>
                        { nextSlide.header.content }
                    </HeaderView>}
                    {<HeaderView
                        name="previousHeader"
                        type="main"
                        isAnimating={ isTransitioningSlides }
                        isTransitionCanceled={ isTransitionCanceled }
                        isTransitionFinished={ isTransitionFinished }
                        isTransitioningBackwards={ isTransitioningBackwards }
                        start={ {
                            top: `${previousPositions.header.top} + ${previousSlide.header.end.top}`,
                            left: `${previousPositions.header.left} + ${previousSlide.header.end.left}`
                        } }
                        finish={ {top: previousPositions.header.top, left: previousPositions.header.left} }
                        setComponentsPosition={ setComponentsPosition }>
                        { previousSlide.header.content }
                    </HeaderView>}
                    {<ContentView
                        name="content"
                        type="main"
                        isAnimating={ isTransitioningSlides }
                        top={ isTransitionFinished && wasTransitioningForwards ? nextPositions.content.top :
                              isTransitionFinished && wasTransitioningBackwards ? previousPositions.content.top :
                              isTransitioningForwards ? `${currentPositions.content.top} + ${currentSlide.body.end.top}` :
                              isTransitioningBackwards ? `${currentPositions.content.top} + ${currentSlide.body.start.top}` :
                              currentPositions.content.top }
                        left={ isTransitionFinished && wasTransitioningForwards ? nextPositions.content.left :
                              isTransitionFinished && wasTransitioningBackwards ? previousPositions.content.left :
                              isTransitioningForwards ? `${currentPositions.content.left} + ${currentSlide.body.end.left}` :
                               isTransitioningBackwards ? `${currentPositions.content.left} + ${currentSlide.body.start.left}` :
                               currentPositions.content.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { isRenderingNextSlide ? currentSlide.body.content :
                          isTransitionFinished && wasTransitioningForwards ? nextSlide.body.content :
                          isTransitionFinished && wasTransitioningBackwards ? previousSlide.body.content :
                          currentSlide.body.content }
                    </ContentView>}
                    {<ContentView
                        name="nextContent"
                        type="main"
                        isAnimating={ isTransitioningSlides }
                        top={ isTransitioningForwards ? nextPositions.content.top : `${nextPositions.content.top} + ${nextSlide.body.start.top}` }
                        left={ isTransitioningForwards ? nextPositions.content.left : `${nextPositions.content.left} + ${nextSlide.body.start.left}` }
                        setComponentsPosition={ setComponentsPosition }>
                        { nextSlide.body.content }
                    </ContentView>}
                    {<ContentView
                        name="previousContent"
                        type="main"
                        isAnimating={ isTransitioningSlides }
                        top={ isTransitioningBackwards ? previousPositions.content.top : `${previousPositions.content.top} + ${previousSlide.body.end.top}` }
                        left={ isTransitioningBackwards ? previousPositions.content.left : `${previousPositions.content.left} + ${previousSlide.body.end.left}` }
                        setComponentsPosition={ setComponentsPosition }>
                        { previousSlide.body.content }
                    </ContentView>}
                    {<ParallaxImageView
                        name="image1"
                        type="main"
                        src={ currentSlide.image1.src }
                        isAnimating={ isTransitioningSlides }
                        top={ isTransitionFinished && wasTransitioningForwards ? nextPositions.image1.top :
                              isTransitionFinished && wasTransitioningBackwards ? previousPositions.image1.top :
                              isTransitioningForwards ? currentSlide.image1.end.top :
                              isTransitioningBackwards ? currentSlide.image1.start.top :
                              currentSlide.image1.top }
                        left={ isTransitionFinished && wasTransitioningForwards ? nextPositions.image1.left :
                              isTransitionFinished && wasTransitioningBackwards ? previousPositions.image1.left :
                              isTransitioningForwards ? currentSlide.image1.end.left :
                               isTransitioningBackwards ? currentSlide.image1.start.left :
                               currentSlide.image1.left }
                        setComponentsPosition={ setComponentsPosition } />}
                    {<ParallaxImageView
                        name="image2"
                        type="main"
                        src={ currentSlide.image2.src }
                        isAnimating={ isTransitioningSlides }
                        top={ isTransitionFinished && wasTransitioningForwards ? nextPositions.image2.top :
                              isTransitionFinished && wasTransitioningBackwards ? previousPositions.image2.top :
                              isTransitioningForwards ? currentSlide.image2.end.top :
                              isTransitioningBackwards ? currentSlide.image2.start.top :
                              currentSlide.image2.top }
                        left={ isTransitionFinished && wasTransitioningForwards ? nextPositions.image2.left :
                              isTransitionFinished && wasTransitioningBackwards ? previousPositions.image2.left :
                              isTransitioningForwards ? currentSlide.image2.end.left :
                               isTransitioningBackwards ? currentSlide.image2.start.left :
                               currentSlide.image2.left }
                        setComponentsPosition={ setComponentsPosition } />}
                    {nextSlide && <ParallaxImageView
                        name="nextImage1"
                        type="main"
                        src={ nextSlide.image1.src }
                        isAnimating={ isTransitioningSlides }
                        top={ isTransitioningForwards ? nextSlide.image1.top : nextSlide.image1.start.top }
                        left={ isTransitioningForwards ? nextSlide.image1.left : nextSlide.image1.start.left }
                        setComponentsPosition={ setComponentsPosition } />}
                    {nextSlide && <ParallaxImageView
                        name="nextImage2"
                        type="main"
                        src={ nextSlide.image2.src }
                        isAnimating={ isTransitioningSlides }
                        top={ isTransitioningForwards ? nextSlide.image2.top : nextSlide.image2.start.top }
                        left={ isTransitioningForwards ? nextSlide.image2.left : nextSlide.image2.start.left }
                        setComponentsPosition={ setComponentsPosition } />}
                    {previousSlide && <ParallaxImageView
                        name="previousImage1"
                        type="main"
                        src={ previousSlide.image1.src }
                        isAnimating={ isTransitioningSlides }
                        top={ isTransitioningBackwards ? previousSlide.image1.top : previousSlide.image1.end.top }
                        left={ isTransitioningBackwards ? previousSlide.image1.left : previousSlide.image1.end.left }
                        setComponentsPosition={ setComponentsPosition } />}
                    {previousSlide && <ParallaxImageView
                        name="previousImage2"
                        type="main"
                        src={ previousSlide.image2.src }
                        isAnimating={ isTransitioningSlides }
                        top={ isTransitioningBackwards ? previousSlide.image2.top : previousSlide.image2.end.top }
                        left={ isTransitioningBackwards ? previousSlide.image2.left : previousSlide.image2.end.left }
                        setComponentsPosition={ setComponentsPosition } />}
                    {<SlideButtonView
                        onClick={ () => this.handleClick() }
                        name="button"
                        type="main"
                        top={ isTransitionFinished && wasTransitioningForwards ? nextPositions.button.top :
                              isTransitionFinished && wasTransitioningBackwards ? previousPositions.button.top :
                              isTransitioningForwards ? currentSlide.button.end.top :                              
                              isTransitioningBackwards ? currentSlide.button.start.top :
                              currentSlide.button.top }
                        left={isTransitionFinished && wasTransitioningForwards ? nextPositions.button.left :
                              isTransitionFinished && wasTransitioningBackwards ? previousPositions.button.left :
                              isTransitioningForwards ? currentSlide.button.end.left :
                               isTransitioningBackwards ? currentSlide.button.start.left :
                               currentSlide.button.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { isTransitionFinished && wasTransitioningForwards ? nextSlide.button.content :
                          isTransitionFinished && wasTransitioningBackwards ? previousSlide.button.content :
                          currentSlide.button.content }
                    </SlideButtonView>}
                    {<SlideButtonView
                        onClick={ () => this.handleClick() }
                        name="nextButton"
                        type="main"
                        top={ isTransitioningForwards ? nextSlide.button.top : nextSlide.button.start.top }
                        left={ isTransitioningForwards ? nextSlide.button.left : nextSlide.button.start.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { nextSlide.button.content }
                    </SlideButtonView>}
                    {<SlideButtonView
                        onClick={ () => this.handleClick() }
                        name="previousButton"
                        type="main"
                        top={ isTransitioningBackwards ? previousSlide.button.top : previousSlide.button.end.top }
                        left={ isTransitioningBackwards ? previousSlide.button.left : previousSlide.button.end.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { previousSlide.button.content }
                    </SlideButtonView>}
                </CurrentSlide>}
                <Slide gridStyle={ currentSlide.gridStyle }>
                    <HeaderView
                        name="header"
                        type="current"
                        top={ currentSlide.header.top }
                        left={ currentSlide.header.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { currentSlide.header.content }
                    </HeaderView>
                    <ContentView
                        name="content"
                        type="current"
                        top={ currentSlide.body.top }
                        left={ currentSlide.body.left }
                        setComponentsPosition={ setComponentsPosition }>
                        { currentSlide.body.content }
                    </ContentView>
                    <ParallaxImageView
                        name="image1"
                        type="current"
                        src={ currentSlide.image1.src }
                        top={ currentSlide.image1.top }
                        left={ currentSlide.image1.left }
                        setComponentsPosition={ setComponentsPosition } />
                    <ParallaxImageView
                        name="image2"
                        type="current"
                        src={ currentSlide.image2.src }
                        top={ currentSlide.image2.top }
                        left={ currentSlide.image2.left }
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
                </Slide>
                {nextSlide && <Slide gridStyle={ nextSlide.gridStyle }>
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
                </Slide>}
                {previousSlide && <Slide gridStyle={ previousSlide.gridStyle }>
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
                </Slide>}
            </SlideManagerContainer>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentSlide: slidesSelectors.selectCurrentSlide(state),
        nextSlide: slidesSelectors.selectNextSlide(state),
        previousSlide: slidesSelectors.selectPreviousSlide(state),
        currentPositions: slidesSelectors.selectCurrentPositions(state),
        nextPositions: slidesSelectors.selectTransitionForwardPositions(state),
        previousPositions: slidesSelectors.selectTransitionBackwardPositions(state),
        isTransitioningSlides: slidesSelectors.isTransitioningSlides(state),
        isTransitioningForwards: slidesSelectors.isTransitioningForwards(state),
        isTransitioningBackwards: slidesSelectors.isTransitioningBackwards(state),
        isTransitionCanceled: slidesSelectors.isTransitionCanceled(state),
        isTransitionFinished: slidesSelectors.isTransitionFinished(state),
        wasTransitioningForwards: slidesSelectors.wasTransitioningForwards(state),
        wasTransitioningBackwards: slidesSelectors.wasTransitioningBackwards(state),
        isRenderingNextSlide: slidesSelectors.isRenderingNextSlide(state)
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({...slidesActions}, dispatch)
}

SlideManager.propTypes = {
    currentSlide: PropTypes.object.isRequired,
    nextSlide: PropTypes.object.isRequired,
    previousSlide: PropTypes.object.isRequired,
    currentPositions: PropTypes.object.isRequired,
    nextPositions: PropTypes.object.isRequired,
    previousPositions: PropTypes.object.isRequired,
    isTransitioningSlides: PropTypes.bool.isRequired,
    isTransitioningForwards: PropTypes.bool.isRequired,
    isTransitioningBackwards: PropTypes.bool.isRequired,
    isTransitionCanceled: PropTypes.bool.isRequired,
    isTransitionFinished: PropTypes.bool.isRequired,
    wasTransitioningForwards: PropTypes.bool.isRequired,
    wasTransitioningBackwards: PropTypes.bool.isRequired,
    isRenderingNextSlide: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideManager)
