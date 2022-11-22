import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios';
import './assets/css/main.css';

import DashboardVfi from './components/DashboardVfi';
import AddVfi from './components/AddVfi';
import EditVfi from './components/EditVfi';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

function App() {
  return (
    <div className="App">
      < BrowserRouter> 
        <Routes>
        <Route path="/" element = {<DashboardVfi/>}/>
        <Route path="/add-vfi" element = {<AddVfi/>} />
        <Route path="/edit-vfi/:id" element = {<EditVfi/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
