import { useEffect } from 'react'
import { useState } from 'react'
import  Icon_add  from '../assets/images/icon_add.svg'

export function TextTodo({todo, setTodo, data, setData}) {

  const [value, setValue] = useState('')

  const AddTodo = () =>{
    setData([...data, {id: `${Number(data.length+1)}`, text:`${value}` , finish: false}])
    setValue('')
  }

  return(
    <section className='container flex items-center mt-12 max-w-[500px] md:px-0'>
      <input type="text" placeholder='請輸入待辦事項' className=' px-4 py-3 rounded-[10px] w-full ' value={value} onChange={(e)=>setValue(e.target.value)}/>
      <input type="button" className={`w-10 h-10 bg-no-repeat -ml-11`} value="" 
        style={{backgroundImage: `url(${Icon_add})`}}
        onClick={AddTodo}>
      </input>
    </section>
  )
}