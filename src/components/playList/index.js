/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
import Play from './Play'
import './index.less'
export default class PlayList extends React.Component {

    renderItems(){
        return this.props.plays.map(function(item, key){
            return <Play play={item} key={key}/>
        })
    }
    render() {
        return (
            <div className="play_list">
                {this.renderItems()}
            </div>
        )
    }
}

