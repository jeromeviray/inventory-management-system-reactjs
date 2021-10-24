import React, { Component } from "react"
import { connect } from "react-redux"

import SockJsClient from 'react-stomp';

import config from "../config"

import {
    initWebhook,
    websocketEvent
} from "./apiActions/websocketAction/websocketAction";

export class Websocket extends Component {

    render() {
        return (
            <SockJsClient url={config.api.private.baseUrl + '/websocket/inventory'}
                autoReconnect={true}
                topics={['/topic/messages']}
                onConnect={() => {
                    console.log("connected");
                }}
                onDisconnect={() => {
                    console.log("Disconnected");
                }}
                onMessage={(data) => {
                    this.props.websocketEvent(data);
                }}
                ref={(client) => {
                    console.log("")
                    this.props.initWebhook({
                        clientRef: client
                    })
                    this.clientRef = client
                }}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps, {
    initWebhook,
    websocketEvent
})(Websocket)