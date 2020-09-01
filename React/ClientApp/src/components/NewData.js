import React, { Component } from 'react';

export class NewData extends Component {

    constructor(props) {

        super(props);
        
        this.state = {
            name: '',
            surname: ''
        };
        this.handleName = this.handleName.bind(this);
        this.handleSurname = this.handleSurname.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleName(event) {
        this.setState({ name: event.target.value });
    }
    handleSurname(event) {
        this.setState({ surname: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData();
        data.append("name", this.state.name);
        data.append("surname", this.state.surname);


        fetch("WeatherForecast/New",
            {
                method: "POST",
                body: data
            }
        );

        this.props.onCreate();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="text" value={this.state.name} onChange={this.handleName} />
                <input type="text" value={this.state.surname} onChange={this.handleSurname} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}