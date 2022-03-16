import React, { Component } from 'react';
import General from "./components/General";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <General />
            </div>
        )
    }
}

export default App;
