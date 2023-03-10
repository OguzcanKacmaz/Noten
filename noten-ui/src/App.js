import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios.get('https://localhost:7244/api/Notes')
      .then((response) => {
        setNotes(response.data);
      });
  }, []);

  return (
    <div div className="App" >
      <div className="container">
        <h1 className='mt-4'>My Notes</h1>
        <ul>
          {notes.map((note) =>
            <li key={note.id}>{note.title}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
