import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { SlideView } from "./views"
import $ from "jquery"

import { actions as slideActions } from "Redux/Slides"

class Slide extends React.Component {
    componentDidMount() {
        let { index } = this.props
        let amount = $(this.slide).offset().top
        console.log(amount)
        this.props.setSlidesOffsetTop({ index, amount })
    }
    render() {
        return (
            <div ref={ slide => this.slide = slide }>
                <SlideView { ...this.props } />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(slideActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Slide)
