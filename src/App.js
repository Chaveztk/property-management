import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js'
import Login from './components/Login.js'
import Register from './components/Register.js'

import Footer from './components/Footer.js'

import CommercialManagement from './components/services/CommercialManagement.js';
import ResidentialManagement from './components/services/ResidentialManagement.js'
import PropertyManagement from './components/services/PropertyManagement.js';

// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module


import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user : {}
    }


  }


  render() {

  return(

    <BrowserRouter>
      <Navbar />
      <main>
        <Route path ='/' exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route path="/commercialmanagement" exact component={CommercialManagement} />
        <Route path="/residentialmanagement" exact component={ResidentialManagement} />
        <Route path="/propertymanagement" exact component={PropertyManagement} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />










      </main>
      <Footer />
      </BrowserRouter>

  );
  }
}






export default App;
