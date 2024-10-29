import React from 'react'
import TodoCard from './TodoCard'

export default function (props) {
  const {todos} = props
  
  return (
    <ul className='main'>
      {todos.map((todo,todoIndex) => {
        return(
          <TodoCard key = {todoIndex}>
            <p>{todo}</p>
          </TodoCard>
         
        )
      })}
    </ul>
    
  )
}
