import React from "react";

export default class OptionButtons extends React.Component {
    render() {
        const checkedOption = this.props.checked;
        return (
            <div className="option-group">
                <div>
                    <input onChange={this.props.handleOptionChange} name="user" id="user" type="checkbox" defaultChecked={checkedOption === "user"} />
                    <label htmlFor="user">User</label>
                </div>
                <div>
                    <input onChange={this.props.handleOptionChange} name="location" id="location" type="checkbox" defaultChecked={checkedOption === "location"} />
                    <label htmlFor="location">Location</label>
                </div>
                <div>
                    <input onChange={this.props.handleOptionChange} name="project" id="project" type="checkbox" defaultChecked={checkedOption === "project"} />
                    <label htmlFor="project">Project</label>
                </div>
            </div>
        );
    }
}


