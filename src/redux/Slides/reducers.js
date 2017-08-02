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

    ],
    currentStep: 0
})

export default combineReducers({offsetsReducer, slideTrackerReducer})
