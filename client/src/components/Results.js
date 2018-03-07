import React, { Component } from 'react';
import UserItem from './userItem';
import { Link } from "react-router-dom";


class Results extends Component {
  state = { 
    users: [],
   }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => {
        this.setState({ users })
        this.totalUsers = this.state.users
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props){
      const searchTerm = nextProps.searchTerm
      const searchOption = nextProps.searchOption
      if(searchOption === "user") {
        let filteredUsers = this.totalUsers.filter(user => user["lastName"].toLowerCase()
        .indexOf(searchTerm) > -1)
        this.setState({
          users: filteredUsers
        })
      }
      if(searchOption === "location") {
        let filteredUsers = this.totalUsers.filter(user => user["location"].toLowerCase()
        .indexOf(searchTerm) > -1)
        this.setState({
          users: filteredUsers
        })
      }
      if(searchOption === "project") {
        let filteredUsers = this.totalUsers.filter(user => user["project"].toLowerCase()
        .indexOf(searchTerm) > -1)
        this.setState({
          users: filteredUsers
        })
      }

    }
  }

  render() {
        const userNode = this.state.users.map( user=> <UserItem user={user} key={user.id} />)
        return (<div className="App"><ul className="card-container">{userNode}</ul></div>);
      }
    }
    
    export default Results;