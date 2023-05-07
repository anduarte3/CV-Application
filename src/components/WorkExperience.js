import React, { Component } from "react";
import uniqid from "uniqid";

class WorkExperience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id : uniqid(),
            role: '',
            location: '',
            startDate: '',
            endDate: '',
            savedInputs: [],
            isClicked: false,
        }
    }
    
    handleChange = (e) => {
        this.setState({
            isClicked: true,
        })
    }
    handleSave = (e) => {
        const savedValue = {
            id: uniqid(),
            role: this.state.role,
            location: this.state.location,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }
        // add the current input values to the saved inputs array
        const savedInputs = this.state.savedInputs.concat(savedValue); 
        
        this.setState({
            savedInputs,
            role: '',
            location: '',
            startDate: '',
            endDate: '',
            isClicked: false,
        })
    }
    handleCancel = (e) => {
        this.setState({
            isClicked: false,
        })
    }
    handleDelete = (id) => {
        //array filter if it matches id then use filter to remove it
        this.setState({
            savedInputs: this.state.savedInputs.filter((key) => key.id !== id)
        })
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }

    render() {
        const { savedInputs, role, location, startDate, endDate, isClicked } = this.state; 

        return (
            <div>
                <h2>Work Experience</h2>
                    {savedInputs.map((key) => {
                        return (
                            <div className="work-input" key={key.id}>
                                 <button 
                                    type="button" 
                                    className="delete-button"
                                    onClick={() => this.handleDelete(key.id)}>❌
                                </button> 
                                <div className="work-text">
                                    <div className="date">{key.startDate}/{key.endDate}</div>
                                    <div className="job-field">{key.role}</div>
                                    <div className="job-location-field">{key.location}</div>
                                </div>
                            </div>
                        )
                    })}
                    {isClicked && (
                        <div className="work-section">
                            <input
                                type="role"
                                name="role"
                                placeholder="Role"
                                value={role}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="location"
                                name="location"
                                placeholder="Location"
                                value={location}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="startDate"
                                name="startDate"
                                placeholder="startDate"
                                value={startDate}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="endDate"
                                name="endDate"
                                placeholder="endDate"
                                value={endDate}
                                onChange={this.handleInputChange}
                            />
                            <div className="option">
                                <button type="button" className="save-button" onClick={this.handleSave}>Save</button>
                                <button type="button" className="cancel-button" onClick={this.handleCancel}>Cancel</button>
                            </div>
                        </div> 
                        )}
                    {!isClicked && (
                        <div className="center-section">
                            <button type="button" className="add-button" onClick={this.handleChange}>Add</button> 
                        </div>
                    )}
            </div>
        )
    }   
}

export default WorkExperience


