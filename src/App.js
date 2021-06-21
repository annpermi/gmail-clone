import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />

        <Switch>
          <Route path='/mail'>
            <Mail />
          </Route>
          <Route>
            <EmailList path='/'/>
          </Route>
        </Switch>

      </div>
      <SendMail />
    </div>
    </Router>
  );
}

export default App;
