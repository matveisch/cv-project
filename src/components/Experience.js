import React, { Component } from 'react';
import '../styles/Form.css'

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {companyName, positionTitle, mainTasks, companyFrom, companyTo, saveValue, changeButtonStatus} = this.props;

        return (
            <div>
                <h2>Practical experience</h2>
                <form>
                    <label htmlFor="companyInput">Company name</label>
                    <input name='companyName' value={companyName} onChange={saveValue} type="text" id="companyInput"/>

                    <label htmlFor="positionInput">Position title</label>
                    <input name='positionTitle' value={positionTitle} onChange={saveValue} type="email" id="positionInput"/>

                    <label htmlFor="tasksInput">Main tasks</label>
                    <input name='mainTasks' value={mainTasks} onChange={saveValue} type="text" id="tasksInput"/>

                    <label htmlFor="dateFromInput">From</label>
                    <input name='companyFrom' value={companyFrom} onChange={saveValue} type="date" id="dateFromInput"/>

                    <label htmlFor="dateToInput">To</label>
                    <input name='companyTo' value={companyTo} onChange={saveValue} type="date" id="dateToInput"/>
                    <div id={'buttons'}>
                        <button name='experienceSubmitBtn' onClick={changeButtonStatus} type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Experience;