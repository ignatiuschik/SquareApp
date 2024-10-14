import './App.css';
import Square from './Square';
import Input from './Input';
import { useState } from 'react';

function App() {
 const [color, setColor] = useState("");

 const handleSubmit = (e) => {
    e.preventDefault();
    if (!color)
    setColor('');

 }

  return (
    <div className="App">
      <Square 
        color = {color}
      />
      
      <Input 
        color = {color}
        setColor = {setColor}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
