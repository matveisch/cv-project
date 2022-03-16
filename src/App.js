import React, { Component } from 'react';
import './styles/App.css'
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralData from "./components/GeneralData";
import EducationData from "./components/EducationData";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            generalSubmitBtn: false,
            educationSubmitBtn: false,
            experienceSubmitBtn: false,

            // keys for General.js
            name: '',
            email: '',
            phone: '',

            // keys for Education.js
            schoolName: '',
            studyTitle: '',
            schoolFrom: '',
            schoolTo: '',

            // keys for Experience.js
        };

        this.saveValue = this.saveValue.bind(this);
        this.changeButtonStatus = this.changeButtonStatus.bind(this);
        this.unSubmitBtn = this.unSubmitBtn.bind(this);
    }

    saveValue(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    // function for Submit buttons that change components.
    changeButtonStatus(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: true,
        })
    }

    // function for Edit buttons that turn back component with input fields.
    unSubmitBtn(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: false,
        })
    }

    render() {
        return (
            <div id={'app'}>
                <h1>CV Creator</h1>
                <div id={'components'}>
                    {(!this.state.generalSubmitBtn) ?
                        <General
                        saveValue={this.saveValue}
                        changeButtonStatus={this.changeButtonStatus}
                        name={this.state.name}
                        email={this.state.email}
                        phone={this.state.phone}/> :
                        <GeneralData
                        name={this.state.name}
                        email={this.state.email}
                        phone={this.state.phone}
                        unSubmitBtn={this.unSubmitBtn}/>}
                    {(!this.state.educationSubmitBtn) ?
                        <Education
                            saveValue={this.saveValue}
                            changeButtonStatus={this.changeButtonStatus}
                            schoolName={this.state.schoolName}
                            studyTitle={this.state.studyTitle}
                            schoolFrom={this.state.schoolFrom}
                            schoolTo={this.state.schoolTo}/> :
                        <EducationData
                            schoolName={this.state.schoolName}
                            studyTitle={this.state.studyTitle}
                            schoolFrom={this.state.schoolFrom}
                            schoolTo={this.state.schoolTo}
                            unSubmitBtn={this.unSubmitBtn}/>}
                    <Experience />
                </div>
            </div>
        )
    }
}

export default App;
