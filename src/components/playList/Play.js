/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
import {Label} from '../../lib/react-weui'
export default class Play extends React.Component {

    renderPhotos(photos) {
        return photos.map(function (item, key) {
            return <img src={item}/>
        })
    }

    render() {
        const {user, desc, detail, status, distance, createTime, photos} = this.props.play
        return (
            <div className="play clear">
                <div className="user clear">
                    <img className="avatar" alt={user.name} title={user.name} src={user.avatar}/>
                    <div className="name">
                        <span>{user.name}</span>
                        <Label size="mini">{user.sex} {user.age}岁</Label>
                        <p>{status}|{createTime}|{distance}km</p>
                    </div>
                </div>
                <div className="desc">{desc}</div>
                <div className="detail">
                    <div>
                        <img className="cover" src={detail.cover}/>
                        <div className="">
                            <p className="page_title">{detail.title}</p>
                            <p className="location">{detail.location}</p>
                            <p className="startTime">{detail.startTime}</p>
                            <div className="labels">
                                <Label size="mini">{detail.price}</Label>
                                <Label size="mini">{detail.memberNum}人组队</Label>
                                <Label size="mini">{detail.type}</Label>
                            </div>
                        </div>
                    </div>
                    <div className="organizer">
                        <span>{detail.organizer}</span>
                        <span>{detail.liked}关注</span>
                    </div>
                </div>
                <div className="photos">
                    {this.renderPhotos(photos)}
                </div>
            </div>
        )
    }
}

