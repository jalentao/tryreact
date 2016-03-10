/**
 * Created by jf on 15/10/27.
 */

import React from 'react'
import classNames from 'classnames'
import Tab from './Tab'

export default class TabBar extends React.Component {
    static propTypes = {
        defaultValue: React.PropTypes.string,
        tabs: React.PropTypes.array,
        onChange: React.PropTypes.func
    }

    static defaultProps = {
        defaultValue: ''
    }

    onChange = (value) => {
        this.props.onChange(value)
    }

    renderTabs = () => {
        return this.props.tabs.map(function (item, key) {
            return <Tab key={key} text={item.text} img={item.img} activeImg={item.activeImg} value={item.value} active={item.active} onChoose={this.onChange}/>
        }.bind(this))
    }

    render() {
        const {onChange} = this.props
        return (
            <div className="weui_tabbar">
                {this.renderTabs()}
            </div>
        )
    }
}

