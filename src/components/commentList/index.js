/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
import Comment from './Comment'
import './index.less'
export default class CommentList extends React.Component {

    renderItems(){
        return this.props.comments.map(function(item, key){
            return <Comment name={item.name} job={item.job} avatar={item.avatar} content={item.content} key={key}/>
        }.bind(this))
    }
    render() {
        return (
            <div className="comment_list">
                <p>用户评价</p>
                {this.renderItems()}
            </div>
        )
    }
}

