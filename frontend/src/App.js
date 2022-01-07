import './App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ItemList } from './common/product_list';
import { ErrorBoundary } from './common/error_boundary';
import { AddFormList } from './common/product_add';

function App() {
  const [viewProducts, setViewProducts] = useState(true);

  return (
    <div className="App">
      <header className="App-header">Shopify Challenge</header>
      <div className="Buttons">
        <Button className='button1' variant='primary' title="View Products" onClick={() => {setViewProducts(true)}}>View Products</Button>
        <Button className='button2' variant='primary' title="Add Products" onClick={() => {setViewProducts(false)}}>Add Products</Button>
      </div>
      <ErrorBoundary>
        {viewProducts ? <ItemList/> : <div> <AddFormList/></div>}
      </ErrorBoundary>
    </div>

  );
}

export default App;
