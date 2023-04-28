import React, { Component } from "react";
import Personal from './components/Personal.js'; // Importing Component
import Education from "./components/Education.js";
import WorkExperience from "./components/WorkExperience.js";

//PascalCasing
class App extends Component {
    constructor(props) {
        super(props)

        this.handleSubmitBtn = this.handleSubmitBtn.bind(this);
        this.handleEditBtn = this.handleEditBtn.bind(this);
        this.handleChangeBtn = this.handleChangeBtn.bind(this);
    }

    handleSubmitBtn(e) {
      e.preventDefault();
      console.log(e.target);
    }

    handleEditBtn(e) {
      e.preventDefault();
      console.log(e.target);
    }
    handleChangeBtn(e) {
      e.preventDefault();
      console.log(e.target);
    }
    
    render() {
      // JSX: Javascript XML
        return <div>
          <Personal/>
          <WorkExperience handleSubmit={this.handleSubmitBtn} handleEdit={this.handleEditBtn}/>
          <Education handleSubmit={this.handleSubmitBtn} handleEdit={this.handleEditBtn}/>
          </div>
    }
}

export default App;


//CV APP consists of:


//Things to consider

//Button to add delete to add more work experiences or education studies
//Perhaps add small logo 

//Every section (Personal, Work, Education, should have add and delete button to submit or go back in the CV)


//What is react?
// Basically instead of vanilla javascript using the DOM,
// Instead we create components as in small parts an let React interact
//Tree of component

//Components are basically a functgion that returns the HTML through JSX

//Example App.js -> add some data, then in compoennt function pass props argument and call it props.text
//If it changes in App.js it will also change for react component