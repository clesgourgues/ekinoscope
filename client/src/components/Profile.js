import React from "react";
import "./Profile.css";

const Profile = ({ user }) => {
  return (<div className="Profile">
    <div className="ProfilePres">
      <img src={user.pic} alt="profile" className="ProfilePic" />
      <div className="Encart">
        <h2 className="Name">
          {user.firstName} {user.lastName}
        </h2>
        <h4 className="Title">
          {user.title} since {user.hiredAt}
        </h4>
        <p><span className="bolderContent">in </span>{user.location}</p>
        <p><span className="bolderContent">Email: </span>{user.email}</p>
        <p><span className="bolderContent">Phone: </span>{user.phoneNumber}</p>
        <p><span className="bolderContent">Slack: </span>{user.slack}</p>
      </div>
    </div>
    <div className="Content">
      <div className="ColA">
        <p><span className="bolderContent">I'm currently working on:</span> {user.project}</p>
        <p><span className="bolderContent">I worked on: </span>{user.pastProjects}</p>
        <p><span className="bolderContent">I went to : </span>{user.school} </p>
        <p><span className="bolderContent">I speak: </span>Spanish - Intermediate, English - Professional</p>
        <p><span className="bolderContent">My experience : </span>{user.experience} </p>
        <p><span className="bolderContent">My favorite quote : </span>{user.quote}</p>
        <p><span className="bolderContent">I know : </span>Javascript, HTML5, CSS3, Mocha, SQL, NodeJS, Angular, PHP, Go</p>    
        <p><span className="bolderContent">My hobbies are : </span>Boxing, Running</p>
      </div>
    </div>
  </div>)
};
export default Profile;
