# The React TUTORIAL!!!!!
Let's learn how to use React!

## 00) How to build the project
Create testing server
```
npm start
```
Build final files for production
```
npm run build
```

## 01) Set up Routing
src/App.js
```
<BrowserRouter>
    <Switch>
        <Route exact path="/" name="Home" component={Home} />
    </Switch>
</BrowserRouter>
```

## 02) Set up Home component
```
<div className="signup-form">
    <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Your Name" />
    <input type="submit" className="button" value="Join MyMessage" onClick={this.join} />
</div>
```
This adds name field and submit box
```
this.state = {
    name: ""
};
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
```
Make this interactive
```
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
```
Add main screen
```
this.state = {
    name: "",
    currentMessage: "",
    messages: [],
    signedUp: false
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
```
Add message handlers and state
```
let messages = this.state.messages.map((message, i) => (
    <li key={"m-"+i} className="message">{message}</li>
));
```
Add messages to render()
