// NoteForm.js
import React, { useState } from 'react';
import NoteList from './NoteList';

const NoteForm = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState(props.notes || []); // Initialize with default value if not provided

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newNote = {
      title: title,
      description: description
    };
    setNotes([...notes, newNote]);
    setTitle('');
    setDescription('');
  };

  const deleteNoteHandler = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Note Title</label>
        <input 
          type='text'
          value={title}
          onChange={titleChangeHandler}
        /><br />
        <label>Note Desc</label>
        <textarea 
          type='text'
          value={description}
          onChange={descriptionChangeHandler}
        /><br />
        <button type="submit">ADD TO BLOCK</button>
      </form>
      
      <NoteList notes={notes} onDeleteNote={deleteNoteHandler} />
    </div>
  );
};

export default NoteForm;

