import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [value, setValue] = useState();
  const [id, setId] = useState(0);


  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => setValue(res.data[id].title))
    .catch(err => console.log(err))

  }, [value , id])



  return (
    <div className="App">

    <h1>{value}</h1>

    <p>
      <input type="text" value={id} onChange={e => setId ( e.target.value)} ></input>
    </p>

    </div>
  );
}

export default App;
