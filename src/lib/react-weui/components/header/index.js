/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import './index.less';
import ArrowBack from './img/arrow-back.png';
export default class Header extends React.Component {
    render() {
        const {title} = this.props;

        return (
            <header className="weui_header">
                <div className="left">
                    <img src={ArrowBack} alt="返回" title="返回" />
                </div>
                <div className="right">更多</div>
                {title}
            </header>
        );
    }
};