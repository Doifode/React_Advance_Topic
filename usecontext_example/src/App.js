import React from 'react'
// import { Parent } from './WithContext/Parent'
// import Parent2 from './WithoutContext/Parent'
// import { UseRef } from './UseRef/UseRef'
// import { UseReducer } from './UseReducer/UseReducer'
import { UseCallBack } from './useCallback/UseCallBack'
export const App = () => {
  return (
    <div>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Parent />
          </div>
          <div className="col-md-6">
            <Parent2 />
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-md-12 h-100 d-flex justify-content-center align-item-center" >
            {/* <UseRef /> */}
            {/* <UseReducer /> */}
            <UseCallBack />
          </div>
        </div>
      </div>
    </div>
  )
}
