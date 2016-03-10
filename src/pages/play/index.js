/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {Page} from '../../lib/react-weui'
import PlayList from '../../components/playList'
import BottomNav from '../../components/bottomNav'
import './index.less'

class PlayPage extends React.Component {

    static propTypes = {
        plays: React.PropTypes.array
    }

    render() {

        let {plays} = this.props
        plays.push(plays[0])
        plays.push(plays[0])
        plays.push(plays[0])
        plays.push(plays[0])
        plays.push(plays[0])
        plays.push(plays[0])
        plays.push(plays[0])
        return (
            <Page className="play_page">
                <PlayList plays={plays}/>
                <BottomNav/>
            </Page>
        )
    }
}

function mapStateToProps(state) {
    return {
        plays: state.plays
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayPage)