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
    position: absolute;
    height: ${window.innerHeight}px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    flex-direction: column;
    justify-content: space-between;
    grid-template-areas: ${({ gridStyle }) => gridStyle };
    opacity: 0;

    > * {
        z-index: 5;
    }
`
export const CurrentSlide = styled(Slide)`
    display: block;
    opacity: 1;
    z-index: 6;

    > * {
        position: absolute !important;
    }
`

export const Header = styled.h1`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: calc(${left}); top: calc(${top});`}
    position: relative;
    grid-area: header;
`
export const MainHeader = styled(Header)`
    ${(props) => {
        let { 
            start, nextTop, nextLeft,  isTransitionCanceled, isTransitionFinished, 
            isTransitioningForwards, isTransitioningBackwards, wasTransitioningForwards,
            wasTransitioningBackwards
        } = props
        
        if (isTransitionFinished) {
            if (wasTransitioningForwards) {
                return `left: calc(${finishNext.left}); top: calc(${finishNext.top});`         
            } else if (wasTransitioningBackwards) {
                return `left: calc(${finishPrevous.left}); top: calc(${finishPrevous.top});`                         
            }
        } else if (isTransitioningForwards) {
            return `left: calc(${next.left}); top: calc(${next.top});`            
        } else if (isTransitioningBackwards) {
            return `left: calc(${previous.left}); top: calc(${previous.top});`            
        } else {
            return `left: calc(${start.left}); top: calc(${start.top});`
        }
    }}
`
export const NextHeader = styled(Header)`
    ${(props) => {
        let { isTransitionFinished, isTransitioningForwards, start, finish } = props
        
        if (isTransitioningForwards) {
            return `left: calc(${finish.left}); top: calc(${finish.top});`
        } else {
            return `left: calc(${start.left}); top: calc(${start.top});`
        }        
    }}
`
export const PreviousHeader = styled(Header)`
    ${(props) => {
        let { isTransitionFinished, isTransitioningBackwards, start, finish } = props
        
        if (isTransitioningBackwards) {
            return `left: calc(${finish.left}); top: calc(${finish.top});`
        } else {
            return `left: calc(${start.left}); top: calc(${start.top});`
        }        
    }}
`

export const Content = styled.p`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: calc(${left}); top: calc(${top});`}
    position: relative;
    grid-area: content;
`

export const SlideButton = styled.button`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: calc(${left}); top: calc(${top});`}
    position: relative;
    grid-area: button;
`

export const ScrollToTopButton = styled.button`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: calc(${left}); top: calc(${top});`}
    position: relative;
`

export const ParallaxImage = styled.div`
    ${({ isAnimating }) => isAnimating && "transition: all 500ms linear;" }
    ${({ left, top }) => `left: calc(${left}); top: calc(${top});`}
    background: url(${({ src }) => src}) no-repeat;
    background-size: 100%;
    background-position: center;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
`
