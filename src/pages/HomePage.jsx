import React, { Component } from 'react';
import GoogleSearchForm from '../components/GoogleSearchForm';

class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <GoogleSearchForm />
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;