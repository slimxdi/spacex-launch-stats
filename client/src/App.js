import React from 'react';
import logo from './logo.svg';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Launches from './Components/Launches';
import IndividualLaunch from './Components/IndividualLaunch';
// import { Router } from 'express';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

const App = () => (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={IndividualLaunch} />
        </div>
      </Router>
    </ApolloProvider>
);

export default App;
