
import React,{useState} from 'react';
import NewNote from './Component/NewNote';


function App() {

  const[notes,setNotes]=useState([]);


  const addNotesHandler=(note)=>
    {
       setNotes(prevNote=>{

        return[note,...prevNote]
       });
    };

  return (
    <div>
      <NewNote onAddExpense={addNotesHandler}/>
    </div>
  );
}

export default App;
