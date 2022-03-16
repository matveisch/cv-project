import React, { Component } from 'react';
import '../styles/Form.css'

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Educational experience</h2>
                <form>
                    <label htmlFor="schoolInput">School name</label>
                    <input type="text" id="schoolInput"/>

                    <label htmlFor="titleInput">Title of study</label>
                    <input type="email" id="titleInput"/>

                    <label htmlFor="dateFromInput">From</label>
                    <input type="date" id="dateFromInput"/>

                    <label htmlFor="dateToInput">To</label>
                    <input type="date" id="dateToInput"/>
                    <div id={'buttons'}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Education;