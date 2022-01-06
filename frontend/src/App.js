import './App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function App() {
  const [viewProducts, setViewProducts] = useState(true);
  return (
    <div className="App">
      <header className="App-header">Shopify Challenge</header>
      <div className="Buttons">
        <Button className='button1' variant='primary' title="View Products">View Products</Button>{' '}
        <Button className='button2' variant='primary' title="Add Products">Add Products</Button>{' '}
      </div>
      {viewProducts ? <div>foo</div> : <div>bar</div>}
    </div>

  );
}

export default App;
