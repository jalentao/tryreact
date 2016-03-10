/**
 * Created by jf on 15/10/27.
 */

import React from 'react'
import classNames from 'classnames'
import './index.less'

export default class Tab extends React.Component {
    static propTypes = {
        img: React.PropTypes.string,
        activeImg: React.PropTypes.string,
        text: React.PropTypes.string,
        value: React.PropTypes.string,
        active: React.PropTypes.bool,
        onChoose: React.PropTypes.func
    }

    onTouchEnd = () => {
        this.props.onChoose(this.props.value)
    }

    render() {
        const {text, img, activeImg, value, active} = this.props
        const className = classNames({
            'tab': true,
            'active': active
        })
        return (
            <a href="javascript:void(0)" className={className} onTouchEnd={this.onTouchEnd}>
                <img src={active?activeImg:img}/>
                <p>{text}</p>
            </a>
        )
    }
}
