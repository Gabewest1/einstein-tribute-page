import { createActions, handleActions } from "redux-actions"
import { combineReducers } from "redux"

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
    slides: [
        {
            gridStyle: `"header header header header header header header header"
                       "header header header header header header header header"
                       ". . . . . . . ."
                       "content content content content content content content content"
                       "content content content content content content content content"
                       "content content content content content content content content"
                       ". . . . . . . ."
                       "button button button . . . . ."`,
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
            image1Src: "/assets/images/young-left.png",
            image2Top: 0,
            image2Left: 0,
            image2Src: "/assets/images/young-right.png",
            image3Top: "100%",
            image3Left: 0,
            image3Src: "/assets/images/old-left.png",
            image4Top: "100%",
            image4Left: "100%",
            image4Src: "/assets/images/young-right.png"
        },
        {
            gridStyle: `"content content content content content content content content"
                       "content content content content content content content content"
                       "content content content content content content content content"
                       ". . . . . . . ."
                       ". . . . . . . ."
                       "header header header header header header header header"
                       "header header header header header header header header"
                       "button button button . . . . ."`,
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
            image1Src: "/assets/images/young-left.png",
            image2Top: 0,
            image2Left: 0,
            image2Src: "/assets/images/young-right.png",
            image3Top: 0,
            image3Left: 0,
            image3Src: "/assets/images/old-left.png",
            image4Top: "100%",
            image4Left: "100%",
            image4Src: "/assets/images/young-right.png"
        },
        {
            gridStyle: `"content content content content content content content content"
                       "content content content content content content content content"
                       "content content content content content content content content"
                       ". . . . . . . ."
                       ". . . . . . . ."
                       "header header header header header header header header"
                       "header header header header header header header header"
                       "button button button . . . . ."`,
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
            image1Src: "/assets/images/young-left.png",
            image2Top: 0,
            image2Left: 0,
            image2Src: "/assets/images/young-right.png",
            image3Top: 0,
            image3Left: 0,
            image3Src: "/assets/images/old-left.png",
            image4Top: "100%",
            image4Left: "100%",
            image4Src: "/assets/images/young-right.png"
        }
    ],
    currentSlideIndex: 0
})

export default combineReducers({
    slides: slideTrackerReducer,
    positions: positionsReducer
})
