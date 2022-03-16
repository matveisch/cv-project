import React, { Component } from 'react';
import '../styles/General.css'

class General extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="nameInput">Name</label>
                    <input type="text" id="nameInput"/>

                    <label htmlFor="emailInput">Email</label>
                    <input type="email" id="emailInput"/>

                    <label htmlFor="phoneInput">Phone</label>
                    <input type="tel" id="phoneInput"/>
                    <div id={'buttons'}>
                        <button type="submit">Submit</button>
                        <button>Edit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default General;