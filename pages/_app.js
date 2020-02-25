import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import NoSSR from "react-no-ssr"
import App from "next/app"

class MyApp extends App {

    componentDidMount() {
        const email = localStorage.getItem("email")
        if (email === undefined) {
            window.location.href = "/"
        }
        else {
            window.location.href = "/dashbiard"
        }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                <NoSSR>
                    <Component {...pageProps} />
                </NoSSR>
            </>
        )
    }
}

export default MyApp
