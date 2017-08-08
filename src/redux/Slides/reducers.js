import { createActions, handleActions } from "redux-actions"
import { combineReducers } from "redux"
import slidesInitialState from "./slidesInitialState"

const {
    gotoNextSlide,
    startNextSlide,
    nextSlideFinished,
    startPreviousSlide,
    previousSlideFinished,
    setComponentsPosition
} = createActions(
    "GOTO_NEXT_SLIDE",
    "START_NEXT_SLIDE",
    "NEXT_SLIDE_FINISHED",
    "START_PREVIOUS_SLIDE",
    "PREVIOUS_SLIDE_FINISHED",
    "SET_COMPONENTS_POSITION"
)

export const actions = {
    gotoNextSlide,
    startNextSlide,
    nextSlideFinished,
    startPreviousSlide,
    previousSlideFinished,
    setComponentsPosition
}

const positionsReducer = handleActions({
    [setComponentsPosition]: (state, {payload: { name, type, position }}) =>
        ({...state, [type]: {...state[type], [name]: position}})
}, {previous: {}, current: {}, next: {}})

const slideTrackerReducer = handleActions({
    [nextSlideFinished]: (state, action) => ({...state, currentSlideIndex: state.currentSlideIndex + 1}),
    [previousSlideFinished]: (state, action) => ({...state, currentSlideIndex: state.currentSlideIndex - 1})
}, {
    slides: slidesInitialState,
    currentSlideIndex: 0
})

export default combineReducers({
    slides: slideTrackerReducer,
    positions: positionsReducer
})
