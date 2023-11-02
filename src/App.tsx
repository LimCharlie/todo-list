import { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { List } from './components/List/List';

import './App.css'

function App() {
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }

  const HandleSubmit = () => {
    if (todo) {
      const newTodoList = [...todoList, todo];
      setTodoList(newTodoList);
      setTodo('');
    }
  }

  return (
    <>
      <div className='container-form'>
        <TextField id="outlined-basic" label="Todo" variant="outlined" onChange={(e) => {handleChange(e)}} />
        <Button variant="contained" type='submit' onClick={HandleSubmit}>Ajouter</Button>
      </div>

      <div>
        <List todoList={todoList}/>
      </div>
    </>
  )
}

export default App
