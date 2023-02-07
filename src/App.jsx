/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { TextTodo } from './components/TextTodo';
import { TabStatus } from './components/TabStatus';
import { TodoList } from './components/TodoList';
import { CleanAll } from './components/CleanAll';

function App() {
  const divStyle = 'bg-primary-light h-screen flex flex-col items-center';
  const sectionStyle = 'w-full mx-auto flex flex-col items-center mt-4 bg-white rounded-[10px] box_shadow';
  const ulStyle = 'flex w-full flex-col justify-around';
  const listStyle = 'container max-w-[500px] md:px-0';

  const [data, setData] = useState([]);
  const [todo, setTodo] = useState(data);

  return (
    <div className={divStyle}>
      <NavBar />
      <TextTodo todo={todo} setTodo={setTodo} data={data} setData={setData} />
      <div className={listStyle}>
        <section className={sectionStyle}>
          <TabStatus todo={todo} setTodo={setTodo} data={data} setData={setData} />
          <ul className={ulStyle}>
            <TodoList todo={todo} setTodo={setTodo} data={data} setData={setData} />
            <CleanAll todo={todo} setTodo={setTodo} data={data} setData={setData} />
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
