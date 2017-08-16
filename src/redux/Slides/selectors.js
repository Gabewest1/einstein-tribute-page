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
    (slides, currentSlideIndex) => slides[(currentSlideIndex + 1) % slides.length]
)

const selectPreviousSlide = createSelector(
    selectSlides,
    selectCurrentSlideIndex,
    (slides, currentSlideIndex) => {
        let index = Math.max(0, currentSlideIndex - 1)

        return slides[index % slides.length]
    }
)
const isTransitioningSlides = (state) => state.slidesReducer.transition.isTransitioningSlides
const isTransitioningForwards = (state) => state.slidesReducer.transition.isTransitioningForwards
const isTransitioningBackwards = (state) => state.slidesReducer.transition.isTransitioningBackwards
const isTransitionCanceled = (state) => state.slidesReducer.transition.isTransitionCanceled

export default {
    selectCurrentSlideIndex,
    selectSlides,
    selectCurrentSlide,
    selectNextSlide,
    isTransitioningSlides,
    isTransitioningForwards,
    isTransitioningBackwards,
    isTransitionCanceled,
    selectPreviousSlide
}
