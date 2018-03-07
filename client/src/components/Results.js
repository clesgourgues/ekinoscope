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
      let searchTerm = this.props.searchTerm
      let searchOption = this.props.searchOption
      console.log(searchOption)
      if(searchOption === "user") {
        let filteredUsers = this.totalUsers.filter(user => user["lastName"].indexOf(searchTerm) > -1)
        this.setState({
          users: filteredUsers
        })
      }
      if(searchOption === "location") {
        let filteredUsers = this.totalUsers.filter(user => user["location"].indexOf(searchTerm) > -1)
        this.setState({
          users: filteredUsers
        })
      }
      if(searchOption === "project") {
        let filteredUsers = this.totalUsers.filter(user => user["project"].indexOf(searchTerm) > -1)
        this.setState({
          users: filteredUsers
        })
      }

    }
  }

  render() {
        const userNode = this.state.users.map( user=> <UserItem user={user} key={user.id} clicked={this.props.clickProfile}/>)
        return (<div className="App"><ul className="card-container">{userNode}</ul></div>);
      }
    }
    
    export default Results;