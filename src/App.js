import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
