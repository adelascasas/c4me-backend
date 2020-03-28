import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Searchcollege from "./components/Searchcollege";
function App() {
  return (
	<Router>		
		<Header />
		<br/>
		<Route path="/" exact component={withRouter(Homepage)} />
		<Route path="/searchcollege" component={withRouter(Searchcollege)} />
	</Router>
  );
}

export default App;
