import { Button, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';
import { useStore } from '../store';
import { ToDo } from '../types';

interface TodoProps{
    todo: ToDo;
}

const ToDoItem = ({todo}: TodoProps) => {

const removeTodo = useStore((state) => state.removeTodo);
const toggleChecked = useStore((state) => state.toggleChecked);

  return (
    <div
    style={{
      backgroundColor: 'rgba(231, 231,231, 0.8)',
      marginBottom:"1rem",
      borderRadius:'0.23rem',
      padding: ".6rem",
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between'
  }}>
     
      <div style={{
        display:'flex',
        alignItems:'center',
    }}>
      <Checkbox
        onClick={()=> (toggleChecked(todo.id))}
        checked ={todo.checked}
      />
      <Typography
      sx={{
        color: todo.checked ? "#c1c1c1" : 'auto',
        textDecoration : todo.checked ? 'line-through' : 'none'
        }}
      >
        {todo.description}
      </Typography>
      </div>

      <Button 
      onClick = {() => removeTodo(todo.id)}
      >
      <Delete color='error' sx={{
      marginRight:'0px'}}/>
      </Button>
    </div>
      
  )
}

export default ToDoItem