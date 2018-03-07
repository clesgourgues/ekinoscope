import React from "react";

export default class OptionButtons extends React.Component {
    state = {
        option: this.props.checked
    };

    componentWillReceiveProps(nextProps) {
        console.log('nextprops', nextProps.checked)
        this.setState({
            option: nextProps.checked
        })
    }

    render() {
        const checkedOption = this.state.option
        return (
            <div className="option-group">
                <div>
                    <input onChange={this.props.handleOptionChange} 
                    name="option" value="user" id="user" type="radio"
                    defaultChecked={checkedOption === "user"}  
                    />
                    <label htmlFor="user">User</label>
                </div>
                <div>
                    <input onChange={this.props.handleOptionChange} 
                    name="option" value="location" id="location" type="radio" 
                    />
                    <label htmlFor="location">Location</label>
                </div>
                <div>
                    <input onChange={this.props.handleOptionChange} 
                    name="option" value="project" id="project" type="radio" 
                    />
                    <label htmlFor="project">Project</label>
                </div>
            </div>
        );
    }
}


