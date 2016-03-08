/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
import classNames from 'classnames'

import {Label} from '../../lib/react-weui'

export default class Option extends React.Component {

    static propTypes = {
        data: React.propTypes.object,
        onChoose: React.propTypes.func
    }

    componentDidMount(){

    }

    onTouchEnd(){
        this.props.onChoose(this.props.data);
    }

    render() {
        const {data} = this.props
        const className = classNames({
            'collapsed': collapsed,
            'theme_list': true
        })
        return (
            <Label text={data.name} onTouchEnd={this.onTouchEnd}/>
        )
    }
}