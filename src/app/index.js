import React from "react";
import Header from "./Header";
import "../stylesheets/main.scss"

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'App Wrapper'
        }
    }

    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        )
    }
}

export default App;