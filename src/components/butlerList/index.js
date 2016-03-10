/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
import Butler from './Butler'
import './index.less'
export default class ButlerList extends React.Component {

    renderItems(){
        return this.props.butlers.map(function(item, key){
            return <Butler name={item.name} avatar={item.avatar} service={item.service} key={key}/>
        })
    }
    render() {
        return (
            <div className="butler_list">
                {this.renderItems()}
            </div>
        )
    }
}

