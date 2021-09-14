import React from 'react'
import './TodoItem.css' 

import Checkbox from '@material-ui/core/Checkbox';

const TodoItem = ({name, id, done}) => {
  console.log(name)
  const handleCheck = () => {
    
  }
  return (
    <div className={`item ${done? 'item--done': ""}` }>
      {/* checkbox for done */}
      <Checkbox 
      checked={done}
      color='primary'
      onChange={handleCheck}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      {/* name */}
      <p>{name}</p>
    </div>
  )
}

export default TodoItem
