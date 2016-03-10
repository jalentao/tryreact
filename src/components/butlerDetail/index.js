/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
import './index.less'
export default class Butler extends React.Component {

    static propTypes = {
        butler: React.PropTypes.object
    }

    render() {
        const {name, sex, age, avatar} = this.props.butler
        return (
            <div className="butler">
                <div className="avatar">
                    <img alt={name} title={name} src={avatar}/>
                </div>
            </div>
        )
    }
}

