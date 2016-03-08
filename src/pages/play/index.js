/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import {Page, ThemeList, RecommendBanner, InviteList, BottomNav} from '../../lib/react-weui'

import './index.less';

export default class Play extends React.Component {

    state = {}

    render() {
        return (
            <Page className="play">
                <ThemeList/>
                <RecommendBanner/>
                <InviteList/>
                <BottomNav/>
            </Page>
        )
    }
}