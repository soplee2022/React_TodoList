import { useEffect } from 'react';
import { useState } from 'react'
import  Icon_delete  from '../assets/images/icon_delete.svg'

export function TodoList({add, setAdd}) {

  const ulStyle = 'flex w-[400] flex-col justify-around space-y-6 mt-6 mx-6';
  const liStyle = 'flex items-center justify-between'

  const [checked, setChecked] = useState(false);

  const New =(id, finish)=>{
    const newAdd=[...add]
    newAdd.map((newItem,newIndex)=>{
      if(newItem.id===id){
        console.log(newItem.id, id);
        // newItem.finish = !newItem.finish;
        console.log(newItem.finish);
        setChecked(!checked)
      }
    })
}
  return(
    <ul className={ulStyle}>
      {add.map(({id, finish, text},index) =>{
        return (
          <li className={liStyle} key={id}>
            <div className='flex space-x-4 items-center'>
              {/* <input type="checkbox" name="" id="" className='w-5 h-5 rounded-md' checked={finish ? true : false} onChange={onChange}/> */}
              <input type="checkbox" name="" id="" className='w-5 h-5 rounded-md' defaultChecked={finish ? true : false}/>
              {/* <input type="checkbox" name="" id="" className='w-5 h-5 rounded-md' checked={checked} onChange={() =>{New(id, finish)}}/> */}
              <p className='text-[14px] text-brown'>{text}</p>
            </div>
            <input type="button" className={`w-6 h-6`} value="" style={{backgroundImage: `url(${Icon_delete})`}}></input>
        </li>
        )
      })}
    </ul>
  )
}