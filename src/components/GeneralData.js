import React, { Component } from 'react';

class GeneralData extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, email, phone, unSubmitBtn} = this.props;

        return (
            <div>
                <h2>General information</h2>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <button onClick={unSubmitBtn}>Edit</button>
            </div>
        )
    }
}

export default GeneralData;