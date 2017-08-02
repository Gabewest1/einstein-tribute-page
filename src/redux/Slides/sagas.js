import { all, takeEvery, select } from "redux-saga/effects"
import { actions } from "./reducers"
import selectors from "./selectors"

import scrollPageTo from "Lib/scrollPageTo"

export default function* rootSaga() {
    yield all([
        watchGotoNextSlide()
    ])
}

export function* watchGotoNextSlide() {
    yield takeEvery(actions.gotoNextSlide, gotoNextSlide)
}

export function* gotoNextSlide(action) {
    let currentSlidesIndex = action.payload
    let state = yield select()
    let { slidesReducer } = state

    let numSlides = selectors.selectNumSlides(state)
    let nextSlidesIndex = (currentSlidesIndex + 1) % numSlides
    let nextSlide = slidesReducer[nextSlidesIndex]
    console.log(slidesReducer, nextSlidesIndex)

    scrollPageTo(nextSlide)
}
