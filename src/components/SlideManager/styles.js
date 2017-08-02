import styled from "styled-components"
import colors from "Lib/colors"

export const SlideManagerContainer = styled.div`
    position: relative;
    overflow: hidden;
    height: ${window.innerHeight}px;    
`
export const CurrentSlide = styled.div`
    ${({ src }) => src && `background: url(${src});`}
    height: ${window.innerHeight}px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const NextSlide = styled(CurrentSlide)``

export const CurrentHeader = styled.h1`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top};`}
    position: relative;
`
export const NextHeader = styled(CurrentHeader)``

export const CurrentContent = styled.p`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top};`}
    position: relative;
`
export const NextContent = styled(CurrentContent)``

export const CurrentSlideButton = styled.button`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top};`}
    position: relative;
`
export const NextSlideButton = styled(CurrentSlideButton)``

export const ScrollToTopButton = styled.button`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top};`}
    position: relative;
`

export const CurrentParallaxImage = styled.div`
    ${({ isAnimating }) => isAnimating && "transition: all 1s ease-in-out;" }
    ${({ left, top }) => `left: ${left}; top: ${top};`}
    background: url(${({ src }) => src});
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
`
export const NextParallaxImage = styled(CurrentParallaxImage)`
    ${({ left, top }) => `left: ${left}; top: ${top};`}    
`
