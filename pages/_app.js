import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import NoSSR from "react-no-ssr"
import App from "next/app"

class MyApp extends App {

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
