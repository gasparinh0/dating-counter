import React from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div className="bg-[url('./assets/background.png')] bg-cover bg-center min-h-screen flex items-center justify-center">
      <Card />
    </div>
  );
}

export default App;
