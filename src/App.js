

import {useSelector, useDispatch} from 'react-redux'

import './App.css';
import { GetUserData,} from './_actionCreators';

function App() {
// Hook Area 
let storeObjectData=useSelector(store =>store)

let dispatch = useDispatch();



// Function Area 


// return Statment 

  return (
   <>
      {
        // console.log("storeObjectData ---->",storeObjectData)
      }
      <button onClick={()=> {dispatch(GetUserData())}}>Call the api</button>
      <ul>
        {
          storeObjectData && storeObjectData.map((cv,idx,arr)=>{
              return  <li key={idx}>{cv.first_name}</li>
          }) 
        }
        
      </ul>

   </>
  );
}

export default App;
