import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.com
function App() {
  return (
	<Router>
		<Header />
		<br/>
		<Route path="/" exact component={homepage}/>
		<Route path="/searchcollege" component={searchcollege}/>
	</Router>
  );
}

export default App;
