import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import VideoList from './components/Videos/VideoList';
import VideoForm from './components/Videos/VideoForm';

import './index.css';
import 'bootswatch/dist/pulse/bootstrap.min.css'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

    <Navbar />

      <div className="container p-4">
      <Switch>
        <Route exact path="/" component ={VideoList}/>
        <Route path="/new-video" component ={VideoForm}/>
      </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// mnt 42 frebrary 12 th handleInputChange
reportWebVitals();
