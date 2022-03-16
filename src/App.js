import React, { Component } from 'react';
import './styles/App.css'
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={'app'}>
                <h1>CV Creator</h1>
                <div id={'components'}>
                    <General />
                    <Education />
                    <Experience />
                </div>
            </div>
        )
    }
}

export default App;
