import React, { Component } from 'react';

class EducationData extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {schoolName, studyTitle, schoolFrom, schoolTo, unSubmitBtn} = this.props;

        return (
            <div>
                <h2>General information</h2>
                <p>School name: {schoolName}</p>
                <p>Title of study: {studyTitle}</p>
                <p>{schoolFrom} – {schoolTo}</p>
                <button name='educationSubmitBtn' onClick={unSubmitBtn}>Edit</button>
            </div>
        )
    }
}

export default EducationData;