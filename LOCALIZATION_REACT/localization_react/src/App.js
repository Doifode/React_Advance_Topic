import React from "react";
 import Home from "./Components/Home";
 import ChangeLng from "./Components/ChangeLng"
const App = () => {
 
    return <>

       <div className="container " >
       <div className="row ">
            <div className="col-md-8 d-flex justify-content-center align-items-center h-100 ">
                <div className="row">
                    <div className="col-md-12">
                        <Home />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <ChangeLng />
            </div>
        </div>
       </div>
    </>
}
export default App;