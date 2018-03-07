import React, { Component } from 'react';
import Node from './Node';
import OrgChart from 'react-orgchart';
import 'react-orgchart/index.css';


class Organigram extends Component {
  state = {
    users: [],
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => {
        this.setState({ users })
        this.totalUsers = this.state.users
        // this.initechOrg = this.getOrg(users, this.props.searchTerm)
      });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (nextProps !== this.props) {
      const searchTerm = nextProps.searchTerm
      let filteredUsers = this.totalUsers.filter(user => user["project"].toLowerCase()
        .indexOf(searchTerm) > -1)
      this.setState({
        users: filteredUsers
      })
    }
  }

  render() {
    const initechOrg = {
      name: "Bill Lumbergh",
      title: "Senior Cotech",
      role: "cotech",
      children: [
        {
          name: "Peter Gibbons",
          title: "Junior Engineer",
          role: "front",
          children: [
            {
              name: "And More!!",
              title: "Junior Engineer",
              role: "back",
            }
          ]
        },
        {
          name: "Milton Waddams",
          title: "Junior Engineer",
          role: "front",
        },
        {
          name: "Bob Slydell",
          title: "Junior Engineer",
          role: "front",
        },
      ]
    };
    return (
    <div className="App" id="initechOrgChart">
    <h1>Projet {this.props.searchTerm}</h1>
      <OrgChart tree={initechOrg} NodeComponent={Node} />
    </div>);
  }
}

export default Organigram;