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
    finish: true,
  }, 
  {
    id: 3,
    text: '今天幾點睡',
    finish: false,
  }, 
  {
    id: 4,
    text: '跟 React 當好朋友 :)',
    finish: false,
  }];


function App() {
  const divStyle = 'bg-primary-light h-screen flex flex-col items-center';
  const sectionStyle = 'w-full mx-auto flex flex-col items-center mt-4 bg-white rounded-[10px] box_shadow';
  const ulStyle = 'flex w-full flex-col justify-around';
  const listStyle = 'container max-w-[500px] md:px-0';

  const [data, setData] = useState(myTodo)
  const [todo,setTodo] = useState(data)


  return (
    <div className={divStyle}>
      <NavBar />
      <TextTodo data={data} setData={setData} todo={todo} setTodo={setTodo} /> 
      <div className={listStyle}>
        <section className={sectionStyle}>
          <TabStatus todo={todo} setTodo={setTodo}/>
          <ul className={ulStyle}>
            <TodoList todo={todo} setTodo={setTodo} />
            <CleanAll todo={todo} setTodo={setTodo}/>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default App
