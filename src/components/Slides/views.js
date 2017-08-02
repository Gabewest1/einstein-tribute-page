import React from "react"
import Slide from "Components/Slide"

export const SlidesView = ({ numSlides }) => {
    let Slides = []

    for (var i = 0; i < numSlides; i++) {
        Slides.push(
            <Slide key={ i } index={ i } />
        )
    }

    return (
        <div>
            { Slides }
        </div>
    )
}