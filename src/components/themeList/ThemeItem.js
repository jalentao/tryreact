/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'

export default class ThemeItem extends React.Component {

    static propTypes = {
        name: React.PropTypes.string,
        desc: React.PropTypes.string,
        img: React.PropTypes.any
    }

    render() {
        const {name, desc, img, url} = this.props
        const descElement = desc?<p className="desc">{desc}</p>:null
        return (
            <a className="theme_item" href={url}>
                <img alt={name} title={name} src={img}/>
                <p>{name}</p>
                {descElement}
            </a>
        )
    }
}

