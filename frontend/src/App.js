import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/homepage";
import Searchcollege from "./components/searchcollege";
function App() {
  return (
	<Router>
		<Header />
		<br/>
		<Route path="/" exact component={Homepage}/>
		<Route path="/searchcollege" component={Searchcollege}/>
	</Router>
  );
}

export default App;
