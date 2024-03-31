// NoteList.js
import React from 'react';

const NoteList = ({ notes, onDeleteNote }) => {
  const handleDelete = (index) => {
    onDeleteNote(index);
  };

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
