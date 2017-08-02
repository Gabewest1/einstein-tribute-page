import styled from "styled-components"
import colors from "Lib/colors"

export const SlideManagerContainer = styled.div`
    position: absolute;
`
export const Slide = styled.div`
    background: ${({ index }) => {
        let options = ["#f12727", "#2c28eb", "teal"]
        
        return options[index % 3]
    }};
    height: ${window.innerHeight}px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
`

export const Header = styled.h1`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top}};`}
    position: absolute;
`

export const Content = styled.p`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top}};`}
    position: absolute;
`

export const NextSlideButton = styled.button`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top}};`}
    position: absolute;
`

export const ScrollToTopButton = styled.button`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top}};`}
    position: absolute;
`

export const ParallaxImage = styled.div`
    background: url(${({ src }) => src});
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 0;
`
