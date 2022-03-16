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
            buttons: {
                general: false,
                education: false,
                practical: false,
            },
            name: '',
            email: '',
            phone: ''
        };

        this.saveValue = this.saveValue.bind(this);
        this.changeButtonStatus = this.changeButtonStatus.bind(this);
    }

    saveValue(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    changeButtonStatus(e) {
        e.preventDefault();
        this.setState({
            buttons: {
                general: true,
            }
        })
        console.log(this.state)
    }

    render() {
        return (
            <div id={'app'}>
                <h1>CV Creator</h1>
                <div id={'components'}>
                    {(!this.state.buttons.general) ?
                        <General
                        saveValue={this.saveValue}
                        changeButtonStatus={this.changeButtonStatus}/> :
                        <GeneralData
                        name={this.state.name}
                        email={this.state.email}
                        phone={this.state.phone}/>}
                    <Education />
                    <Experience />
                </div>
            </div>
        )
    }
}

export default App;
