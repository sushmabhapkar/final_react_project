import React from "react";
import NoteForm from "./NoteForm";
const NewNote=(props)=>
{

const saveNotesDataHandler=(enteredNotesData)=>
{
     const NotesData={
           ...enteredNotesData,
           id:Math.random.toString()

     };
   props.onAddExpense(NotesData);
};



return(
    <div>

   <NoteForm onSaveNotesData={saveNotesDataHandler}/>

    </div>
);
}
export default NewNote;