import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { TextTodo } from './components/TextTodo'
import { TabStatus } from './components/TabStatus'
import { TodoList } from './components/TodoList'
import { CleanAll } from './components/CleanAll'

const myTodo = [
  {
    id: 1,
    text: '今天星期幾',
    finish: true,
  },
  {
    id: 2,
    text: '這是第幾版 Todo',
    finish: false,
  }, 
  {
    id: 3,
    text: 'ㄎㄎ',
    finish: false,
  }];


function App() {
  const divStyle = 'bg-primary-light h-screen flex flex-col items-center';
  const sectionStyle = 'w-[500px] mx-auto flex flex-col items-center mt-4 bg-white rounded-[10px] box_shadow';
  const ulStyle = 'flex w-full flex-col justify-around';

  const [todo, setTodo] = useState(myTodo)
  const [add,setAdd] = useState(todo)


  return (
    <div className={divStyle}>
      <NavBar />
      <TextTodo todo={todo} setTodo={setTodo} add={add} setAdd={setAdd} /> 
      <section className={sectionStyle}>
        <TabStatus />
        <ul className={ulStyle}>
          <TodoList add={add} setAdd={setAdd} />
          <CleanAll add={add} />
        </ul>
      </section>
    </div>
  )
}

export default App
