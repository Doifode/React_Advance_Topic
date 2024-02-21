// import { useEffect, useState } from "react"
// import { DummyData } from "../DummyData"


// const SearchBar = () => {
//     const [userArr, setUserArr] = useState(DummyData[0])
//     const [values, setValue] = useState()

//     console.log(userArr)
//     return (<div className="row d-flex justify-content-center">

//         <div className="col-md-12">
//             <input type="text" value={values} onChange={(e) => setValue(e.target.value)} />
//         </div>
//         <>
//             {userArr.filter((i, id) => id <= 100).filter((i) => i.developer.toLowerCase().includes(values) || i.platform.toLowerCase().includes(values) || i.title.toLowerCase().includes(values)).map((i, id) =>
//                 <>
//                     <div key={id} className="col-md-3 shadow-lg m-2">. <p  >{i.id}</p>
//                         <p  >{i.title}</p>
//                         <p  >{i.platform}</p>
//                         <p  >{i.developer}</p></div>
//                 </>
//             )}
//         </>
//     </div>)
// }
// export default SearchBar