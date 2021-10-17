import React, { Component } from "react"
import SockJsClient from 'react-stomp';

import config from "../config"

export class Websocket extends Component {

    render() {
        return (
            <SockJsClient url={'http://' + config.api.private.baseUrl + '/websocket/inventory'}
                topics={['/topic/messages']}
                onConnect={() => {
                    console.log("connected");
                }
                }
                onDisconnect={() => {
                    console.log("Disconnected");
                }}
                ref={(client) => {
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
})(Websocket)