import React from 'react';
import { TextField, Typography, Button } from '@mui/material';
import ToDoItem from './ToDoItem';
import { useStore } from '../store';

const ToDoContainer = () => {

const todos = useStore((state) =>state.todos);

const addTodo = useStore((state) => state.addTodo);

const handleAddToDo = (event:any) => 
{
event.preventDefault();
addTodo(event.target[0].value);
event.target[0].value = "";
}


  return (
    <div
    style={{
      background:"#fff",
      maxHeight:"80vh",
      marginTop:"5rem",
      padding:"3rem",
      borderRadius:"1rem",
      overflowY: "hidden"
    }}
    >
      <Typography variant='h1'
       sx={{fontSize:"3rem", 
       fontWeight:500,
       marginBottom:'2rem'
       }}>
        ToDo List
      </Typography>

    <form
      style={{
        display:'flex',
        marginBottom:'2rem',
        alignItems:'center'
      }}
      onSubmit={handleAddToDo}
    >

      <TextField id='outlined-basic' variant='outlined' label='Add your task here' 
      sx={{marginRight:'2.5rem'}}/>

      <Button variant='contained' 
      sx={{background:'#004e92)',
          borderRadius:'10px',
          maxWidth:'800px',
          padding: '.8rem 1.5rem',
          '&:hover':{
            background: '#20bdff'
          }
          }}
      type='submit'
      >
      Add Task
      </Button>
    </form>
    
    <div
      style={{
        overflowY:"scroll",
        maxHeight:"40vh",
      }}
    >
        {todos.map((todo) => {
           return <ToDoItem todo={todo}
           key={todo.id}/>
        })}
    </div>
        
    </div>
  )
}

export default ToDoContainer