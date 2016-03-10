/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import {Page, Header} from '../../lib/react-weui'
import BottomNav from '../../components/bottomNav'

import './index.less';

export default class WelfarePage extends React.Component {

    state = {}

    render() {
        return (
            <Page className="welfare">
                <BottomNav/>
            </Page>
        )
    }
}