import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password1: "",
            password2: "",
            passwordsMatch: true
        }
    };

    updateField = (fieldName, event) => {
        let newState = {};
        newState[fieldName] = event.target.value;
        this.setState(newState, () => {
            this.setState({
                passwordMatch: this.state.password1 === this.state.password2
            });
        });
    };

    submit = (event) => {
        event.preventDefault();
        if (!this.state.username || !this.state.password1 || !this.state.password2) {
            alert("Please fill out all fields.");
        }
        else if (!this.state.passwordMatch) {
            alert("The provided passwords do not match.");
        } else {
            this.props.history.push('/message');
        }
    };

    render() {
        return (
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form onSubmit={this.submit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={this.state.username}
                           onChange={this.updateField.bind(null, 'username')}/>
                    <label htmlFor="password1">Password:</label>
                    <input type="password" id="password1" value={this.state.password1}
                           onChange={this.updateField.bind(null, 'password1')}/>
                    <label htmlFor="password2">Confirm Password:</label>
                    <input type="password" id="password2" value={this.state.password2}
                           onChange={this.updateField.bind(null, 'password2')}/>
                    <input type="submit" className="button"/>
                </form>
            </div>
        );
    }
};

export default Home;
