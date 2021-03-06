import { createSelector } from "reselect"

const selectCurrentSlideIndex = (state) => state.slidesReducer.slides.currentSlideIndex
const selectSlides = (state) => state.slidesReducer.slides.slides

const selectCurrentSlide = createSelector(
    selectSlides,
    selectCurrentSlideIndex,
    (slides, currentSlideIndex) => slides[currentSlideIndex % slides.length]
)

const selectNextSlide = createSelector(
    selectSlides,
    selectCurrentSlideIndex,
    (slides, currentSlideIndex) => currentSlideIndex + 1 < slides.length ? slides[currentSlideIndex + 1] : null
)

const selectPreviousSlide = createSelector(
    selectSlides,
    selectCurrentSlideIndex,
    (slides, currentSlideIndex) => {
        // let index = Math.max(0, currentSlideIndex - 1)
        let index = Math.max(0, currentSlideIndex - 1)

        return slides[index]
    }
)

const selectCurrentPositions = (state) => state.slidesReducer.positions.current
const selectTransitionForwardPositions = (state) => state.slidesReducer.positions.next
const selectTransitionBackwardPositions = (state) => state.slidesReducer.positions.previous

const isTransitioningSlides = (state) => state.slidesReducer.transition.isTransitioningSlides
const isTransitioningForwards = (state) => state.slidesReducer.transition.isTransitioningForwards
const isTransitioningBackwards = (state) => state.slidesReducer.transition.isTransitioningBackwards
const isTransitionCanceled = (state) => state.slidesReducer.transition.isTransitionCanceled
const isTransitionFinished = (state) => state.slidesReducer.transition.isTransitionFinished

const wasTransitioningForwards = (state) => state.slidesReducer.transition.wasTransitioningForwards
const wasTransitioningBackwards = (state) => state.slidesReducer.transition.wasTransitioningBackwards

const isRenderingNextSlide = (state) => state.slidesReducer.rendering.isRenderingNextSlide

export default {
    selectCurrentSlideIndex,
    selectSlides,
    selectCurrentSlide,
    selectNextSlide,
    isTransitioningSlides,
    isTransitioningForwards,
    isTransitioningBackwards,
    isTransitionCanceled,
    selectPreviousSlide,
    selectCurrentPositions,
    selectTransitionForwardPositions,
    selectTransitionBackwardPositions,
    isTransitionFinished,
    wasTransitioningForwards,
    wasTransitioningBackwards,
    isRenderingNextSlide
}
