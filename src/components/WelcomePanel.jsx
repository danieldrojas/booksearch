import React from 'react';

const WelcomePanel = () => {
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
                                <span className="card-title">BookSearch</span>
                                <p>I am a friendly book finder app.</p>
                            </div>
                            <div className="card-action">
                                <a href="#!">Googlebooks</a>
                                <a href="#!">Web</a>
                                <a href="#!">Book.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    );
};

export default WelcomePanel;