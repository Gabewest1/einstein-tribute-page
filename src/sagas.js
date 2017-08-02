import { all } from "redux-saga/effects"
import { sagas as slidesSagas } from "Redux/Slides"

export default function* rootSaga() {
    yield all([
        slidesSagas()
    ])
}
