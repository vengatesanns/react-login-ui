import React from 'react';
import './App.css';
import { Card } from 'primereact/card';
import LoginComponent from './login-component/login-component'


function App() {
  return (
    <div className="App">
      <Card className="nav-card">
      </Card>
      <LoginComponent />
    </div>
  );
}

export default App;
