/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import {Page, Header} from '../../lib/react-weui'

import Greeting from '../../components/greeting'
import ServiceList from '../../components/serviceList'
import PackageList from '../../components/packageList'
import CommentList from '../../components/commentList'
import BottomNav from '../../components/bottomNav'

import './index.less'

export default class Service extends React.Component {
    render() {
        return (
            <Page>
                <Greeting/>
                <ServiceList/>
                <PackageList/>
                <CommentList/>
                <BottomNav/>
            </Page>
        )
    }
}