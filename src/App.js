import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber,changeName} from './action/index';

function App() {
  const  myState=useSelector((state)=>state.changeNumber);
  const nameState=useSelector((state)=>state.changeName);
  const dispatch=useDispatch(); 
  return (
    <div>
     <h1>Redux increment Decrement</h1>
     <h3>Using React and Redux</h3>
     <h3>{myState}</h3>
     <input type="text" value={myState}/>
     <button onClick={()=>dispatch(incNumber())}>+ plus</button>
     <button onClick={()=>dispatch(decNumber())}> - mins</button>
    </div>
  )
}

export default App