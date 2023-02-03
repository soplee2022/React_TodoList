import { useEffect } from 'react';
import { useState } from 'react'
import  Icon_delete  from '../assets/images/icon_delete.svg'

export function TodoList({todo, setTodo}) {

  const ulStyle = 'flex w-[400] flex-col justify-around space-y-6 mt-6 mx-6';
  const liStyle = 'flex items-center justify-between'
  const notFinish = 'text-[14px] text-brown';
  const isFinish = 'text-[14px] text-gray-300 line-through';

  const FinishStatus =(id)=>{
    const newData=[...todo]
    newData.map((newItem,newIndex)=>{
      if(newItem.id===id){
        newItem.finish = !newItem.finish
        setTodo(newData)
      }
    })
  }

  const DeleteTodo = (id, index) =>{
    const newData = [...todo]

    newData.map((newItem, newIndex)=>{
      newItem.id === id && newData.splice(index, 1)
    })
    setTodo(newData)
  }

  return(
    <ul className={ulStyle}>
      {todo.map(({id, finish, text},index) =>{
        return (
          <li className={liStyle} key={id}>
            <div className='flex space-x-4 items-center'>
              <input type="checkbox" name="" id="" className='w-5 h-5 rounded-md' defaultChecked={finish ? true : false} onClick={() =>{FinishStatus(id)}}/>
              <p className={finish ? isFinish : notFinish}>{text}</p>
            </div>
            <input type="button" className={`w-6 h-6`} value="" 
            style={{backgroundImage: `url(${Icon_delete})`}}
            onClick={() => DeleteTodo(id, index)}
            ></input>
        </li>
        )
      })}
    </ul>
  )
}