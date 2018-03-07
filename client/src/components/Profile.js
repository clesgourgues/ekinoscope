import React from "react";
import "./Profile.css";
import {withRouter} from 'react-router-dom';

class Profiles extends React.Component {
  state = {
    user: {}
  };

   componentDidMount() {
     const id = this.props.match.params.id
    fetch(`/users/${id}`)
    .then(res => res.json())
    .then(user => {
      this.setState({ user: user });
    });
  } 


  render() {
    return (
      <div className="Profile">
        <div className="ProfilePres">
          <img src={this.state.user.pic} alt="profile" className="ProfilePic" />
          <div className="Encart">
            <h2 className="Name">
              {this.state.user.firstName} {this.state.user.lastName}
            </h2>
            <h4 className="Title">
              {this.state.user.title} since {this.state.user.hiredAt}
            </h4>
            <p><span className="bolderContent">in </span>{this.state.user.location}</p>
            <p><span className="bolderContent">Email: </span>{this.state.user.email}</p>
            <p><span className="bolderContent">Phone: </span>{this.state.user.phoneNumber}</p>
            <p><span className="bolderContent">Slack: </span>{this.state.user.slack}</p>
          </div>
        </div>
        <div className="Content">
          <div className="ColA">
            <p><span className="bolderContent">I'm currently working on:</span> {this.state.user.project}</p>
            <p><span className="bolderContent">I worked on: </span>{this.state.user.pastProjects}</p>
            <p><span className="bolderContent">I went to : </span>{this.state.user.school} </p>
            <p><span className="bolderContent">I speak: </span>Spanish - Intermediate, English - Professional</p>
            <p><span className="bolderContent">My experience : </span>{this.state.user.experience} </p>
            <p><span className="bolderContent">My favorite quote : </span>{this.state.user.quote}</p>
            <p><span className="bolderContent">I know : </span>Javascript, HTML5, CSS3, Mocha, SQL, NodeJS, Angular, PHP, Go</p>
            <p><span className="bolderContent">My hobbies are : </span>Boxing, Running</p>
          </div>
        </div>
      </div>)
  };
}

const Profile = withRouter(props => <Profiles {...props}/>);

export default Profile