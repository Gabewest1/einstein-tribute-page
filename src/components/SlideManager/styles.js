import styled from "styled-components"
import colors from "Lib/colors"

export const SlideManagerContainer = styled.div`
    position: relative;
    overflow: hidden;
    height: ${window.innerHeight}px;    
`
export const Slide = styled.div`
    ${({ src }) => src && `background: url(${src});`}
    background-size: 100% 100%;
    height: ${window.innerHeight}px;
    position: absolute;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    flex-direction: column;
    justify-content: space-between;
    grid-template-areas: ${({ gridStyle }) => gridStyle };

    > * {
        z-index: 5;
    }
`
export const CurrentSlide = styled(Slide)`
    display: block;
    z-index: 6;
`

export const Header = styled.h1`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top};`}
    position: relative;
    grid-area: header;
`

export const Content = styled.p`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top};`}
    position: relative;
    grid-area: content;
`

export const SlideButton = styled.button`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top};`}
    position: relative;
    grid-area: button;
`

export const ScrollToTopButton = styled.button`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top};`}
    position: relative;
`

export const ParallaxImage = styled.div`
    ${({ isAnimating }) => isAnimating && "transition: all 500ms linear;" }
    ${({ left, top }) => `left: ${left}; top: ${top};`}
    background: url(${({ src }) => src}) no-repeat;
    background-size: 100%;
    background-position: center;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
`