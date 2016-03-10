/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
export default class PackageItem extends React.Component {

    render() {
        const {name, img} = this.props
        return (
            <div className="package_item">
                <img alt={name} title={name} src={img}/>
                <p>{name}</p>
            </div>
        )
    }
}

