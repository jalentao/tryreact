/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
export default class Comment extends React.Component {

    render() {
        const {name, avatar, job, content} = this.props
        return (
            <div className="comment clear">
                <div className="user">
                    <img alt={name} title={name} src={avatar}/>
                    <p>{name}</p>
                    <p>{job}</p>
                </div>
                <p className="content">{content}</p>
            </div>
        )
    }
}

