import React from 'react';

class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>My Message</h1>
                </header>
                {this.props.children}
            </div>
        );
    }
}

export default MainLayout;