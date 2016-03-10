/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {Page, Header} from '../../lib/react-weui'
import Greeting from '../../components/greeting'
import ThemeList from '../../components/themeList'
import PackageList from '../../components/packageList'
import CommentList from '../../components/commentList'
import BottomNav from '../../components/bottomNav'
import './index.less'

class ThemePage extends React.Component {

    static propTypes = {
        themes: React.PropTypes.array.isRequired,
    }

    render() {
        const { themes, packages, comments } = this.props
        return (
            <Page className="service_page">
                <Greeting/>
                <ThemeList themes={themes}/>
                <PackageList packages={packages}/>
                <CommentList comments={comments}/>
                <BottomNav/>
            </Page>
        )
    }
}

function mapStateToProps(state) {
    return {
        themes: state.themes,
        packages: state.packages,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ThemePage)
