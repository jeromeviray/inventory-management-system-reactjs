import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { ACCESS_TOKEN } from '../redux/constants';


export class RedirectSuccessHandler extends Component {

    getUrlParameter(name) {
        // name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        // var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var regex = new RegExp(/{([^}]+)}/);

        var results = regex.exec(this.props.location.search);
        return results[1] === null ? '' : decodeURIComponent(results[1].replace(/\+/));
    };
    render() {

        const token = this.getUrlParameter('token');
        const error = this.getUrlParameter('error');
        if (token) {
            console.log(JSON.parse(token))
            localStorage.setItem(ACCESS_TOKEN, token)
            return < Redirect to={{
                pathname: "/",
                state: { from: this.props.location }
            }} />
        } else {
            return <Redirect to={{
                pathname: "/login",
                state: {
                    from: this.props.location,
                    error: error
                }
            }} />;
        }
    }
}

export default RedirectSuccessHandler
