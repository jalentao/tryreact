/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
import './index.less'

import ButlerAvatar from './img/butler.png'

export default class Greeting extends React.Component {
    getTime() {
        var date = new Date();
        var hour = date.getHours();
        switch(true){
            case 5<=hour&&hour<9:
                return '早上'

            case 9<=hour&&hour<12:
                return '上午'

            case 12<=hour&&hour<14:
                return '中午'

            case 14<=hour&&hour<18:
                return '下午'

            case 18<=hour:
                return '晚上'

            default:
                return '您'
        }
    }

    getText(){
        var date = new Date();
        var hour = date.getHours();
        if(22<=hour&&hour<9){
            return '很高兴为您服务'
        }else{
            return '管家已待命,随时为您服务'
        }
    }

    render() {
        return (
            <div className="greeting">
                <img alt="管家" title="管家" src={ButlerAvatar}/>
                <p>{this.getTime()}好</p>
                <p>{this.getText()}</p>
                <a href="#butlerIntro" className="label learn_about">了解</a>
                <a href="tel:4000829090" className="label consult">咨询</a>
            </div>
        )
    }
}

