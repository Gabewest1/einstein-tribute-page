import styled from "styled-components"
import colors from "Lib/colors"

export const Slide = styled.div`
    background: ${({ index }) => {
        let options = ["#f12727", "#2c28eb", "teal"]
        
        return options[index % 3]
    }};
    height: ${window.innerHeight/1.5}px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Header = styled.h1`

`

export const Content = styled.p`

`

export const NextSlideButton = styled.button`

`

export const ScrollToTopButton = styled.button`

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