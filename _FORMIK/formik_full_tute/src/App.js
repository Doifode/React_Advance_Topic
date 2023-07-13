import React from 'react';
 import { SimpleForm } from './Components/SimpleForm';
import { CompactForm } from './Components/CompactForm';

function App() {
  return (<div className="row">
    <div className="col-md-6">
    <SimpleForm />

    </div>
    <div className="col-md-6">
      <CompactForm/>
    </div>
  </div>
    

  );
}

export default App;
