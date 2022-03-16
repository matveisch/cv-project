import React, { Component } from 'react';
import '../styles/Form.css'

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Practical experience</h2>
                <form>
                    <label htmlFor="companyInput">Company name</label>
                    <input type="text" id="companyInput"/>

                    <label htmlFor="positionInput">Position title</label>
                    <input type="email" id="positionInput"/>

                    <label htmlFor="tasksInput">Main tasks</label>
                    <input type="text" id="tasksInput"/>

                    <label htmlFor="dateFromInput">From</label>
                    <input type="date" id="dateFromInput"/>

                    <label htmlFor="dateToInput">To</label>
                    <input type="date" id="dateToInput"/>
                    <div id={'buttons'}>
                        <button type="submit">Submit</button>
                        <button>Edit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Experience;