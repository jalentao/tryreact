/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {Page} from '../../lib/react-weui'
import ButlerDetail from '../../components/playerDetail'
import BottomNav from '../../components/bottomNav'
import './index.less'

class PlayerDetailPage extends React.Component {

    static propTypes = {
        butler: React.PropTypes.array
    }

    render() {
        const {butler} = this.props
        return (
            <Page className="butler_page">
                <ButlerDetail butler={butler}/>
                <BottomNav/>
            </Page>
        )
    }
}

function mapStateToProps(state) {
    return {
        butler: state.butler
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerDetailPage)