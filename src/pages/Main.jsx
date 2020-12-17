import React, { Component } from 'react';
import WelcomePanel from '../components/WelcomePanel';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <WelcomePanel />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;