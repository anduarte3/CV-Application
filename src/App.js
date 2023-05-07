import React, { Component } from "react";
import './styles/App.css';
import Education from "./components/Education.js"; // Importing Component
import WorkExperience from "./components/WorkExperience.js"; // Importing Component

//PascalCasing
class App extends Component {
  constructor(props) {
    super(props)
    
    //Note: when using state on inputs you also need to have a onChange otherwise you won't be able to type it
    this.state = {
      name: '',
      email: '', 
      phone: '', 
      city: '', 
      intro: '',
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;

    this.setState({
      [name]: e.target.value,
    })
  }

  render() {
    //Just to call the properties more easily
    const { name, email, phone, city, intro} = this.state;

    // JSX: Javascript XML
    return (
      <div className="cv-container">
          <header className="cv-header">
            <h1>CV-Application</h1>
            <input
              type="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
            />
            <input
              type="phone"
              name="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={this.handleChange}
              />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
            <input
              type="city"
              name="city"
              placeholder="City"
              value={city}
              onChange={this.handleChange}
            />
            <input
              type="intro"
              name="intro"
              placeholder="About me"
              value={intro}
              onChange={this.handleChange}
            />
          </header>
          <WorkExperience/>
          <Education/>
          <footer className="cv-footer">
            <button type="button" className="submit-button">Submit</button>    
          </footer>
          
        {/* <Personal/>
        <WorkExperience handleSubmit={this.handleSubmitBtn} handleEdit={this.handleEditBtn}/>
        <Education handleSubmit={this.handleSubmitBtn} handleEdit={this.handleEditBtn}/> */}
      </div>
    )
  }
}

export default App;



// Planning:

// Make editable INPUTS, of first and last name, mail, number, city, intro

// Create a title for work experience 
// Add button that should create all the  fields for it

// Create a title for education
// Add button that should  create all the fiels for it

// Create a title for skills?

// Add save button



// //CV APP consists of:



// //Things to consider

// //Button to add delete to add more work experiences or education studies
// //Perhaps add small logo 

// //Every section (Personal, Work, Education, should have add and delete button to submit or go back in the CV)


// //What is react?
// // Basically instead of vanilla javascript using the DOM,
// // Instead we create components as in small parts an let React interact
// //Tree of component

// //Components are basically a functgion that returns the HTML through JSX

// //Example App.js -> add some data, then in compoennt function pass props argument and call it props.text
// //If it changes in App.js it will also change for react component */}