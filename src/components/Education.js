import React, { Component } from 'react';
import '../styles/Form.css'

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {schoolName, studyTitle, schoolFrom, schoolTo, saveValue, changeButtonStatus} = this.props;

        return (
            <div>
                <h2>Educational experience</h2>
                <form>
                    <label htmlFor="schoolInput">School name</label>
                    <input name='schoolName' value={schoolName} onChange={saveValue} type="text" id="schoolInput"/>

                    <label htmlFor="titleInput">Title of study</label>
                    <input name='studyTitle' value={studyTitle} onChange={saveValue} type="email" id="titleInput"/>

                    <label htmlFor="dateFromInput">From</label>
                    <input name='schoolFrom' value={schoolFrom} onChange={saveValue} type="date" id="dateFromInput"/>

                    <label htmlFor="dateToInput">To</label>
                    <input name='schoolTo' value={schoolTo} onChange={saveValue} type="date" id="dateToInput"/>
                    <div id={'buttons'}>
                        <button name='educationSubmitBtn' onClick={changeButtonStatus} type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Education;