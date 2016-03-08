/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import './index.less';

export default class Page extends React.Component {
    render() {
        const {title, subTitle, spacing, className, children} = this.props;

        return (
            <section className={`page ${className}`}>
                <div>{children}</div>
            </section>
        );
    }
};