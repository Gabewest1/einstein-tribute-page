import { createActions, handleActions } from "redux-actions"
import { combineReducers } from "redux"
import slidesInitialState from "./slidesInitialState"

const {
    startNextSlide,
    nextSlideFinished,
    startPreviousSlide,
    previousSlideFinished,
    setComponentsPosition,
    startTransitionForwards,
    startTransitionBackwards,
    resetTransitions,
    transitionFinished,
    transitionCanceled
} = createActions(
    "START_NEXT_SLIDE",
    "NEXT_SLIDE_FINISHED",
    "START_PREVIOUS_SLIDE",
    "PREVIOUS_SLIDE_FINISHED",
    "SET_COMPONENTS_POSITION",
    "START_TRANSITION_FORWARDS",
    "START_TRANSITION_BACKWARDS",
    "RESET_TRANSITIONS",
    "TRANSITION_FINISHED",
    "TRANSITION_CANCELED"
)

export const actions = {
    startNextSlide,
    nextSlideFinished,
    startPreviousSlide,
    previousSlideFinished,
    setComponentsPosition,
    startTransitionForwards,
    startTransitionBackwards,
    resetTransitions,
    transitionFinished,
    transitionCanceled
}

//Create reducer to handle the state of the slides transitions
const transitionReducerInitialState = {
    isTransitioningSlides: false,
    isTransitioningForwards: false,
    isTransitioningBackwards: false,
    isTransitionCanceled: false,
    isTransitionFinished: false,
    wasTransitioningForwards: false,
    wasTransitioningBackwards: false,
}
const transitionsReducer = handleActions({
    [startTransitionForwards]: (state, action) => ({...state, isTransitioningSlides: true, isTransitioningForwards: true, wasTransitioningForwards: true }),
    [startTransitionBackwards]: (state, action) => ({...state, isTransitioningSlides: true, isTransitioningBackwards: true, wasTransitioningBackwards: true}),
    [transitionFinished]: (state, action) => ({...state, isTransitionFinished: true, isTransitioningSlides: false, isTransitioningForwards: false, isTransitioningBackwards: false}),
    [transitionCanceled]: (state, action) => ({...state, isTransitionCanceled: true}),
    [resetTransitions]: (state, action) => transitionReducerInitialState
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
