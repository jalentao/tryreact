/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
import ThemeItem from './ThemeItem'
import './index.less'

export default class ThemeList extends React.Component {

    renderItems() {
        return this.props.themes.map(function (item, key) {
            return <ThemeItem name={item.name} desc={item.desc} url={item.url} img={item.img} key={key}/>
        }.bind(this));
    }

    render() {
        return (
            <div className="theme_list clear">
                {this.renderItems()}
            </div>
        )
    }
}

