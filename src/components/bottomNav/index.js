/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TabActions from '../../actions/tabs'
import {TabBar} from '../../lib/react-weui'

import './index.less'

class BottomNav extends React.Component {

    static propTypes = {
        tabs: React.PropTypes.array
    }

    onChange = (value) => {
        this.props.actions.changeTab(value)
        window.location.assign('#'+value)
    }

    render() {
        const {tabs} = this.props
        return (
            <div className="bottom_nav">
                <TabBar tabs={tabs} onChange={this.onChange}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tabs: state.tabs
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TabActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BottomNav)

