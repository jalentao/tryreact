/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import './index.less';
import ArrowBack from './img/arrow-back.png';
export default class Label extends React.Component {
    render() {
        const {text, size, type} = this.props;
        return (
            <label className={'weui_label '+size+' '+type}>
                {text}
            </label>
        );
    }
};