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

    state = {
        tabs: []
    }

    componentDidMount() {
        const defaultValue = this.props.defaultValue;
        let tabs = this.props.tabs.map(function (item, key) {
            item.active = defaultValue === item.value ? true : false
            return item
        })
        this.setState({
            tabs: tabs
        })
    }

    onChange(tab) {
        let tabs = this.state.tabs.map(function (item, key) {
            item.active = item.value === tab.value ? true : false
            return item
        })
        this.setState({
            tabs: tabs
        })
        this.props.onChange(tab)
    }

    renderTabs() {
        return this.state.tabs.map(function (item, key) {
            return <Tab key={key} tab={item} onChoose={this.onChange}/>
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

