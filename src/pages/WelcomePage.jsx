import React, { Component } from 'react';

class WelcomePage extends Component {

    render() {

        const cardCss = {
            container: {
                display: "flex",
                position: "absolute",
                top: "30%",
                left: 0,
                height: "100%",
                width: "100%"
            },
            containerRow: {
                margin: "0 auto",
            }
        };

        return (
            <div className="container" style={cardCss.container}>
            <div className="row" style={cardCss.containerRow} >
                <div className="col s12 offset-s3">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Jobger</span>
                            <p>I am a friendly job applications manager app. I'll help you in your job hunt journey</p>
                        </div>
                        <div className="card-action">
                            <a href="#!">Login</a>
                            <a href="#!">Sign up</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default WelcomePage;