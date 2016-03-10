/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
import PackageItem from './PackageItem'
import './index.less'
export default class PackageList extends React.Component {

    renderItems() {
        return this.props.packages.map(function (item, key) {
            return <PackageItem name={item.name} img={item.img} key={key}/>
        })
    }

    render() {
        return (
            <div className="package_list">
                <p className="title">超值套餐</p>
                <div className="clear">
                    {this.renderItems()}
                </div>
            </div>
        )
    }
}

