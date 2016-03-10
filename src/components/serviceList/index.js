/**
 * Created by jf on 15/12/10.
 */

"use strict"

import React from 'react'
import ServiceItem from './ServiceItem'
import './index.less'

export default class ServiceList extends React.Component {

    renderItems() {
        return this.props.services.map(function (item, key) {
            return <ServiceItem name={item.name} desc={item.desc} url={item.url} img={item.img} key={key}/>
        }.bind(this));
    }

    render() {
        return (
            <div className="service_list clear">
                {this.renderItems()}
            </div>
        )
    }
}

