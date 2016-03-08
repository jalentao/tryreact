/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
import {TabBar} from '../../lib/react-weui'

import './index.less'

export default class BottomNav extends React.Component {

    state = {

    }

    onChange(tab){
        switch (tab.value){
            case 'theme':
                window.location.href = '/weixin/services.shtml'
                break

            case 'player':
                window.location.href = '/weixin/butlers.shtml'
                break

            case 'welfare':
                window.location.href = '/weixin/welfare.shtml'
                break

            case 'mine':
                window.location.href = '/weixin/mine.shtml'
                break

            default:
                break
        }
    }

    render() {
        const tabs = [{
            name: '服务',
            value: 'theme'
        }, {
            name: '管家',
            value: 'player'
        }, {
            name: '福利',
            value: 'welfare'
        }, {
            name: '我的',
            value: 'mine'
        }]
        return (
            <div className="bottom_nav">
                <TabBar tabs={tabs} onChange={this.onChange}/>
            </div>
        )
    }
}

