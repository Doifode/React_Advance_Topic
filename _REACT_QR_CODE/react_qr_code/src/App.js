import React from 'react';
 import QrCodeReader  from './Components/QrCodeReader';
import {QRgenerator}  from './Components/QRgenerator';
 
function App() {
  return (
    <div className="container">
        <div className="row">
            <div className="cl-md-6">
                <QrCodeReader/>
            </div>
            <div className="cl-md-6">
                <QRgenerator/>
            </div>
        </div>
    </div>
  );
}

export default App;
