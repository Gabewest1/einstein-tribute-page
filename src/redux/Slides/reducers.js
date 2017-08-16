import { createActions, handleActions } from "redux-actions"
import { combineReducers } from "redux"
import slidesInitialState from "./slidesInitialState"

const {
    gotoNextSlide,
    startNextSlide,
    nextSlideFinished,
    startPreviousSlide,
    previousSlideFinished,
    setComponentsPosition,
    startTransitionForwards,
    startTransitionBackwards,
    transitionFinished,
    transitionCanceled
} = createActions(
    "GOTO_NEXT_SLIDE",
    "START_NEXT_SLIDE",
    "NEXT_SLIDE_FINISHED",
    "START_PREVIOUS_SLIDE",
    "PREVIOUS_SLIDE_FINISHED",
    "SET_COMPONENTS_POSITION",
    "START_TRANSITION_FORWARDS",
    "START_TRANSITION_BACKWARDS",
    "TRANSITION_FINISHED",
    "TRANSITION_CANCELED"
)

export const actions = {
    gotoNextSlide,
    startNextSlide,
    nextSlideFinished,
    startPreviousSlide,
    previousSlideFinished,
    setComponentsPosition,
    startTransitionForwards,
    startTransitionBackwards,
    transitionFinished,
    transitionCanceled
}

//Create reducer to handle the state of the slides transitions
const transitionReducerInitialState = {
    isTransitioningSlides: false,
    isTransitioningForwards: false,
    isTransitioningBackwards: false,
    isTransitionCanceled: false
}
const transitionsReducer = handleActions({
    [startTransitionForwards]: (state, action) => ({...state, isTransitioningSlides: true, isTransitioningForwards: true }),
    [startTransitionBackwards]: (state, action) => ({...state, isTransitioningSlides: true, isTransitioningBackwards: true}),
    [transitionFinished]: (state, action) => transitionReducerInitialState,
    [transitionCanceled]: (state, action) => ({...state, isTransitionCanceled: true})
}, transitionReducerInitialState)

const positionsReducer = handleActions({
    [setComponentsPosition]: (state, {payload: { name, type, position }}) =>
        ({...state, [type]: {...state[type], [name]: position}}),
    [nextSlideFinished]: (state, action) => ({previous: {}, current: {}, next: {}})
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
    positions: positionsReducer,
    transition: transitionsReducer
})
