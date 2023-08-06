import React from 'react'
import { Skills } from './Components/Skills'
const data = ['hi', 'hellow', 'how are you', 'how are you', 'how are you', 'how', 'how', 'how', 'how', 'how', 'how', 'how', 'how', 'how']
const App = () => {
  return (
    // <div className='container'>
    //   <div className="row">
    //     <div className="col-md-23">
    //       <h1>Apply For Job</h1>
    //       <h1>Click below link </h1>
    //       <h2>Click below link </h2>
    //       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ducimus quisquam fugit iusto. Fugiat sequi, qui sapiente vitae ut, nemo repellendus ullam amet quasi quisquam molestias veniam atque reprehenderit enim.</p>
    //       <form  >
    //         <label className='my-3' htmlFor='Name'>Name</label>
    //         <input placeholder='Please enter Name' type="text" id='Name' name='Name' className='form-control' />
    //         <label className='my-3' htmlFor='surname' >Surname</label>
    //         <input placeholder='Please enter surname' type="text" name='surname' id='surname' className='form-control' />
    //         <input className='form-control'  type="text" value={"yash"} onChange={() => { }} /> <br />
    //         <img src="" alt="imagePro" /> <br />
    //         <span title='spanTag'>span tag title</span>
    //         <div data-testid='dataidtest'></div>


    //         <label className='my-3' >Geneder</label>
    //         <input type="checkbox" />
    //         <select className='form-control my-3'>
    //           <option value="value1">First</option>
    //           <option value="value2">Second</option>
    //           <option value="value3">Third</option>
    //         </select>
    //         <button id="buttons" className='btn  btn-sm btn-success'> Save</button>
    //       </form>
    //     </div>
    //   </div>

    // </div>

    <Skills skills={data} />
  )
}

export default App