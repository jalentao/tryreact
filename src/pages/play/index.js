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
        var re = new RegExp("(http[s]{0,1}|ftp)://[a-zA-Z0-9\\.\\-]+\\.([a-zA-Z]{2,4})(:\\d+)?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "gi");
        var str ="辅导费http://www.baidu.com死神";
        var url = str.match(re)[0];
        var end = str.indexOf(url);
        var left = str.slice(0, end);
        var right = str.slice(end+url.length);
        console.log([
            left,
            url,
            right
        ]);

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