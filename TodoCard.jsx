import React from 'react'

export default function TodoCard(props) {
  const { children} = props
  return (
    <div>
    <li className ='todoitem' >
      {children}
     <i className="fa-regular fa-pen-to-square"></i>
     <i className="fa-solid fa-trash"></i>
    </li>
   </div>
  )
}
