import React, { Component } from 'react';
import './styles/App.css'
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralData from "./components/GeneralData";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            generalSubmitBtn: false,

            name: '',
            email: '',
            phone: ''
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

    changeButtonStatus(e) {
        e.preventDefault();
        this.setState({
            generalSubmitBtn: true,
        })
        console.log(this.state)
    }

    unSubmitBtn(e) {
        e.preventDefault();
        this.setState({
            generalSubmitBtn: false,
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
                    <Education />
                    <Experience />
                </div>
            </div>
        )
    }
}

export default App;
