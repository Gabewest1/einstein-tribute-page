import React from "react"

import { SlidesView } from "./views"

export default class Slides extends React.Component {
    render() {
        return (
            <SlidesView { ...this.props } />
        )
    }
}
