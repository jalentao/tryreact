/**
 * Created by jf on 15/10/27.
 */

import React from 'react';
import classNames from 'classnames';
import './index.less'

export default class Tab extends React.Component {
    static propTypes = {
        tab: React.PropTypes.object,
        onChoose: React.PropTypes.func
    }

    onTouchEnd(){
        this.props.onChoose(this.props.tab)
    }

    render() {
        const {tab, onChoose} = this.props;
        const className = classNames({
            'tab': true,
            'active': tab.active
        })
        return (
            <a href="javascript:void(0)" className={className} onTouchEnd={this.onTouchEnd}>{tab.name}</a>
        )
    }
}
