import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            currentMessage: "",
            messages: [],
            signedUp: false
        };
    }
    componentDidMount() {
        document.title = "Learning React In Progress...";
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };
    join = (event) => {
        event.preventDefault();
        this.setState({
            signedUp: true
        });
    };
    handleMessageChange = (event) => {
        this.setState({
            currentMessage: event.target.value
        });
    };
    sendMessage = () => {
        let messages = this.state.messages;
        messages.push(this.state.currentMessage);
        this.setState({
            messages: messages,
            currentMessage: ""
        });
    };
    render() {
        let messages = this.state.messages.map((message, i) => (
            <li key={"m-"+i} className="message">{message}</li>
        ));
        return (
            <div>
                {
                    this.state.signedUp ?
                    <div>
                        <header>
                            <h1>Welcome to MyMessage, {this.state.name}</h1>
                        </header>
                        <div className="fixed-bottom">
                            {messages.length > 0 ?
                            <div>
                                <ul>
                                    {messages}
                                </ul>
                            </div> : null}
                            <div className="typing-area">
                                <input type="text" value={this.state.currentMessage} onChange={this.handleMessageChange} placeholder="Type Your Message Here..." />
                                <input type="submit" value="Send" onClick={this.sendMessage} />
                            </div>
                        </div>
                    </div>
                    :
                    <div className="signup-form">
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Your Name" />
                        <input type="submit" className="button" value="Join MyMessage" onClick={this.join} />
                    </div>
                }
            </div>
        );
    }
}

export default Home;
