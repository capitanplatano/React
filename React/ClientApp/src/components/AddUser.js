import React, { Component } from 'react';

export class AddUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
            loading: true
        }
        
        this.handleUser = this.handleUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUser(event) {
        let value = event.target.value;
        let name = event.target.name;
        this.setState(prevState => {
            let user = Object.assign({}, prevState.user);
            user[name] = value;
            return { user };
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData();
        for (var key in this.state.user) {
            data.append(key, this.state.user[key]);
        }

        fetch("User/New",
            {
                method: "POST",
                body: data
            }
        ).then((response) => { this.props.NewUser(); });
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="text" name="name" onChange={this.handleUser} />
                <input type="text" name="surname" onChange={this.handleUser} />
                <input type="submit" value="Submit"/>
            </form>
            
        )
    }

}