import React, { Component } from "react";

//import Overview from "./components/Overview"; 

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            
        </div>
    }
}

export default App;


//CV APP consists of:

//Personal Details 

//name 
// role
// number*
// mail*
// city*
// intro

//Work experience

//job location
//job role
//date join
//date end (or present)

//Education


//School
//degree curso tecnologico
//subject formacao tecnica em eletroncia e computadores
//Date join
//Date end


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