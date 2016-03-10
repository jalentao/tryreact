/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
export default class Butler extends React.Component {

    render() {
        const {name, avatar, service} = this.props
        return (
            <div className="butler clear">
                <img className="avatar" alt={name} title={name} src={avatar}/>
                <div className="desc">
                    <p>{name}</p>
                    <p>最近为您服务项目</p>
                    <p>{service.name}</p>
                    <p>{service.date}</p>
                </div>
            </div>
        )
    }
}

