const selectNumSlides = (state) => {
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

const selectCurrentStep = (state) => {
    let { steps, currentStep } = state.slidesReducer.slideTrackerReducer

    return steps[currentStep % steps.length]
}

export default {
    selectNumSlides,
    selectCurrentStep
}
