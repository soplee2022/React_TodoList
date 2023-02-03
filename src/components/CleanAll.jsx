import { useState, useEffect } from 'react'

export function CleanAll({todo, setTodo}) {

  const total = todo.filter(item => !item.finish)

  // useEffect( () => {
  //   console.log(todo);
  // } , [todo])

  return(
    <li className="flex items-center justify-between py-6 mx-6 ">
      <p className="text-sm text-brown">{total.length} 個待完成項目</p>
      <input type="button" className="text-sm text-primary" value="清除已完成項目" 
      onClick={(e) => {setTodo(total)}}></input>
    </li>
  )
}