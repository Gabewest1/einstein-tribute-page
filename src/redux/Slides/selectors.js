export const selectNumSlides = (state) => {
    let { slidesReducer } = state
    let numSlides = 0

    while (true) {
        console.log(numSlides, slidesReducer)
        if (slidesReducer.hasOwnProperty(numSlides)) {
            numSlides++
        } else {
            break
        }
    }

    return numSlides
}

export default {
    selectNumSlides
}
