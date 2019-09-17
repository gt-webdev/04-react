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
            <li key={"m-"+i}>{message}</li>
        ));
        return (
            <div>
                {
                    this.state.signedUp ?
                    <div>
                        <h1>Welcome, {this.state.name}</h1>
                        {messages.length > 0 ?
                        <div>
                            <p>Here are the wonderful messages you've sent</p>
                            <ul>
                                {messages}
                            </ul>
                        </div> : null}
                        <p>Add a new message...</p>
                        <input type="text" value={this.state.currentMessage} onChange={this.handleMessageChange} placeholder="Your Message" />
                        <input type="submit" value="Send" onClick={this.sendMessage} />
                    </div>
                    :
                    <div>
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Your Name" />
                        <input type="submit" value="Join MyMessage" onClick={this.join} />
                    </div>
                }
            </div>
        );
    }
}

export default Home;
