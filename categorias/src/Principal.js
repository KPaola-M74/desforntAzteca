
import App from "./App"
import React, { useState } from 'react';
import './style.css'

export default function Principal()
{
    const [showApp, setShowApp] = useState(false);

  const handleClick = () => {
    setShowApp(true);
  };

  return (
    <div>
      {showApp ? (
        <App />
      ) : (
        <>
          <button onClick={handleClick}>Boton1</button>
          <button onClick={handleClick}>Boton2</button>
          <button onClick={handleClick}>Boton3</button>
          <button onClick={handleClick}>Boton4</button>
          <button onClick={handleClick}>Boton5</button>
        </>
      )}
    </div>
  );
}