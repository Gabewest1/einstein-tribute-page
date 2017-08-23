import { all, takeEvery, select } from "redux-saga/effects"
import { actions } from "./reducers"
import selectors from "./selectors"

import scrollPageTo from "Lib/scrollPageTo"

export default function* rootSaga() {
    yield all([

    ])
}

// export function* watchSlideTransitionFinished() {
//     yield takeEvery(actions.transitionFinished, )
// }

