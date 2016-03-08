/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
import classNames from 'classnames'

import Option from './Option'
import './index.less'

export default class ThemeList extends React.Component {

    static propTypes = {
        defaultValue: React.propTypes.string,
        options: React.propTypes.array,
        onChange: React.propTypes.func,
        collapsed: React.propTypes.bool
    }

    state = {
        collapsed: true
    }

    componentDidMount(){
        this.setState({
            collapsed: this.props.collapsed
        })
    }

    renderOptions(){
        return this.props.options.mpa(function(item, key){
            return <Option data={item} key={key} onChoose={this.props.onChange}/>
        })
    }

    togglePanel(){
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        const {collapsed} = this.props
        const className = classNames({
            'collapsed': collapsed,
            'theme_list': true
        })
        return (
            <div className={className}>
                <div className="bar">
                    <span>{title}</span>
                    <Icon className="triangle" onTouchEnd={this.togglePanel}/>
                </div>
                <div className="panel">
                    {this.renderOptions()}
                </div>
            </div>
        )
    }
}