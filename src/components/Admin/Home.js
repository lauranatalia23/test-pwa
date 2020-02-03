import React, { Component } from 'react';
import fire from '../../config/Fire';
import Navbar from './Navbar'

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <Navbar />
            </div>
        );

    }

}

export default Home;