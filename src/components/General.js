import React, { Component } from 'react';
import '../styles/Form.css'

class General extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {saveValue, changeButtonStatus} = this.props;

        return (
            <div>
                <h2>General information</h2>
                <form>
                    <label htmlFor="nameInput">Name</label>
                    <input name='name' value={this.props.name} onChange={saveValue} id="nameInput"/>

                    <label htmlFor="emailInput">Email</label>
                    <input name='email' value={this.props.email} onChange={saveValue} type="email" id="emailInput"/>

                    <label htmlFor="phoneInput">Phone</label>
                    <input name='phone' value={this.props.phone} onChange={saveValue} type="tel" id="phoneInput"/>
                    <div id={'buttons'}>
                        <button name='generalSubmitBtn' onClick={changeButtonStatus} type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default General;