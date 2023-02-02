import { useState } from 'react'

export function TabStatus() {

  const style = 'py-4 border-b-2 border-b-primary-light w-full text-center text-third text-sm font-bold text-brown';
  const status = ['全部', '待完成', '已完成'];

  return(
    <ul className="flex justify-around w-full">
      {status.map((item,index) =>{
        return <input type="button" className={style} value={item} key={index}></input>
      })}
    </ul>
  )
}