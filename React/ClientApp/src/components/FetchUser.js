import React, { Component, useState } from 'react';
import { AddUser } from './AddUser';

const BotonYContador = () => {
    const [counter, counterSum] = useState(3);
    return (<div>
        <span>El contador es: {counter}</span>
            <input type="button" onClick={() =>counterSum(counter + 1)} value="Suma!"/>
        </div>);
}

export class FetchUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true
        }
        this.handleNewUser = this.handleNewUser.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.populateUserData();
    }
    handleNewUser() {
        this.populateUserData();
    }
    handleDelete(id) {
        fetch("User/" + id,
            {
                method: "DELETE"
            }
        ).then((response) => { this.populateUserData(); });
    }

    static renderContent(handleNewUser, handleDelete, users) {
        return (
            <div>
                <div>
                    <h2>Nuevo usuario</h2>
                    <AddUser NewUser={handleNewUser}/>
                </div>

                <table>
                    <thead>
                    <tr>
                        <th>ID</th><th>Nombre</th><th>Apellido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td onClick={() => handleDelete(user.id)}>X</td>
                            </tr>
                        )}
                    </tbody>
                    
                </table>
                <BotonYContador/>
            </div>
            )
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchUser.renderContent(this.handleNewUser, this.handleDelete, this.state.users);

        return (
            <div>
                <h1 id="tabelLabel" >User list</h1>
                {contents}
            </div>
        );
    }

    async populateUserData() {
        const response = await fetch('User');
        const data = await response.json();
        this.setState({ users: data, loading: false });
    }
}