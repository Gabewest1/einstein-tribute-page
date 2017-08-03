import { createSelector } from "reselect"

const selectCurrentSlideIndex = (state) => state.slidesReducer.slides.currentSlideIndex
const selectSlides = (state) => state.slidesReducer.slides.slides

const selectCurrentSlide = createSelector(
    selectSlides,
    selectCurrentSlideIndex,
    (slides, currentStepIndex) => slides[currentStepIndex % slides.length]
)

export default {
    selectCurrentSlideIndex,
    selectSlides,
    selectCurrentSlide
}
