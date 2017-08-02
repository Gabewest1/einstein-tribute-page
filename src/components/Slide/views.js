import React from "react"

import { 
    Slide,
    Header,
    Content,
    NextSlideButton,
    ScrollToTopButton,
    ParallaxImage
} from "./styles"

const HeaderContent = "This is the Important Stuff!!!"
const ContentContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const DefaultSlide = ({ index, gotoNextSlide }) => {
    return (
        <Slide index={ index }>
            <Header>{ HeaderContent }</Header>
            <Content>{ ContentContent }</Content>
            <div>
                <NextSlideButton onClick={ () => gotoNextSlide(index) }>Next</NextSlideButton>
            </div>
        </Slide>
    )
}

const LastSlide = ({ index, gotoNextSlide }) => {
    return (
        <Slide index={ index }>
            <Header>{ HeaderContent }</Header>
            <Content>{ ContentContent }</Content>
            <div>
                <ScrollToTopButton onClick={ () => gotoNextSlide(index) }>Back to Top</ScrollToTopButton>
            </div>
        </Slide>
    )
}

export const SlideView = (props) => {
    let { numSlides, index } = props

    if (index === numSlides - 1) {
        return (
            <LastSlide key={ index } { ...props } />
        )
    } else {
        return (
            <DefaultSlide key={ index } { ...props } />
        )
    }
}

