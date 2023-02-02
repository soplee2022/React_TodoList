import { useEffect } from 'react'
import { useState } from 'react'
import  Icon_add  from '../assets/images/icon_add.svg'

export function TextTodo({todo, setTodo, add, setAdd}) {

  const [value, setValue] = useState('')

  useEffect( () => {
    console.log(add);
  } , [add])

  return(
    <section className='flex items-center mt-12'>
      <input type="text" placeholder='請輸入待辦事項' className=' px-4 py-3 rounded-[10px] w-[500px]' value={value} onChange={(e)=>setValue(e.target.value)}/>
      <input type="button" className={`w-10 h-10 bg-no-repeat -ml-11`} value="" 
        style={{backgroundImage: `url(${Icon_add})`}}
        onClick={()=> setAdd([...add, {id: `${Number(add.length+1)}`, text:`${value}` , finish: false}])}>
      </input>
    </section>
  )
}