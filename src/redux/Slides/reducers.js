import { createActions, handleActions } from "redux-actions"
import { combineReducers } from "redux"

const {
    setSlidesOffsetTop,
    gotoNextSlide,
    scrollPageTo,
    startNextSlide,
    nextSlideFinished,
    startPreviousSlide,
    previousSlideFinished
} = createActions(
    "SET_SLIDES_OFFSET_TOP",
    "GOTO_NEXT_SLIDE",
    "SCROLL_PAGE_TO",
    "START_NEXT_SLIDE",
    "NEXT_SLIDE_FINISHED",
    "START_PREVIOUS_SLIDE",
    "PREVIOUS_SLIDE_FINISHED"
)

export const actions = {
    setSlidesOffsetTop,
    gotoNextSlide,
    scrollPageTo,
    startNextSlide,
    nextSlideFinished,
    startPreviousSlide,
    previousSlideFinished
}

const offsetsReducer = handleActions({
    [setSlidesOffsetTop]: (state, action) => {
        state[action.payload.index] = action.payload.amount

        return state
    }
}, {})


const slideTrackerReducer = handleActions({
    [nextSlideFinished]: (state, action) => ({...state, currentStep: state.currentStep + 1}),
    [previousSlideFinished]: (state, action) => ({...state, currentStep: state.currentStep - 1})
}, {
    steps: [
        {
            header1Top: 0,
            header1Left: 0,
            header2Top: "100%",
            header2Left: "100%",
            content1Top: 0,
            content1Left: 0,
            content2Top: "100%",
            content2Left: "100%",
            image1Top: 0,
            image1Left: 0,
            image2Top: 0,
            image2Left: 0,
            image3Top: "100%",
            image3Left: 0,
            image4Top: "100%",
            image4Left: "100%"
        },
        {
            header1Top: "-100%",
            header1Left: 0,
            header2Top: 0,
            header2Left: 0,
            content1Top: "-100%",
            content1Left: 0,
            content2Top: 0,
            content2Left: 0,
            image1Top: "-100%",
            image1Left: 0,
            image2Top: 0,
            image2Left: 0,
            image3Top: 0,
            image3Left: 0,
            image4Top: "100%",
            image4Left: "100%"
        }
    ],
    currentStep: 0
})

export default combineReducers({offsetsReducer, slideTrackerReducer})
