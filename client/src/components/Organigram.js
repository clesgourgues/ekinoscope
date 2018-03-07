import React, { Component } from 'react';
import UserItem from './userItem';
import { Link } from "react-router-dom";


class Organigram extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
        const userNode = this.state.users.map( user=> <UserItem user={user} key={user.id} />)
        return (<div className="App"><h1>Organigram</h1><ul className="card-container">{userNode}</ul></div>);
      }
    }
    
    export default Organigram;