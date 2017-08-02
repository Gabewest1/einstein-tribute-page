import styled from "styled-components"
import colors from "Lib/colors"

export const SlideManagerContainer = styled.div`
    position: relative;
    overflow: hidden;
    height: ${window.innerHeight}px;    
`
export const Slide = styled.div`
    ${({ src }) => src && `background: url(${src});`}
    height: ${window.innerHeight}px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Header = styled.h1`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top}};`}
    position: relative;
`

export const Content = styled.p`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top}};`}
    position: relative;
`

export const NextSlideButton = styled.button`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top}};`}
    position: relative;
`

export const ScrollToTopButton = styled.button`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top}};`}
    position: relative;
`

export const ParallaxImage = styled.div`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top}};`}
    background: url(${({ src }) => src});
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
`
