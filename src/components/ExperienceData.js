import React, { Component } from 'react';

class ExperienceData extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {companyName, positionTitle, mainTasks, companyFrom, companyTo, unSubmitBtn} = this.props;

        return (
            <div>
                <h2>General information</h2>
                <p>Company name: {companyName}</p>
                <p>Position title: {positionTitle}</p>
                <p>Main tasks: {mainTasks}</p>
                <p>{companyFrom} – {companyTo}</p>
                <button name='experienceSubmitBtn' onClick={unSubmitBtn}>Edit</button>
            </div>
        )
    }
}

export default ExperienceData;