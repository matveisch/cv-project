import React, { Component } from 'react';

class GeneralData extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, email, phone} = this.props;

        return (
            <div>
                <h2>General information</h2>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
            </div>
        )
    }
}

export default GeneralData;