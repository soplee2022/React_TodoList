import { useState, useEffect } from 'react'

export function TabStatus({todo, setTodo, data, setData}) {

  const activeStyle = 'py-4 border-b-2 border-b-primary-light w-full text-center text-third text-sm font-bold text-brown active';
  const style = 'py-4 border-b-2 border-b-primary-light w-full text-center text-third text-sm font-bold text-brown hover:border-b-primary';

  const [allStatus, setAllStatus] = useState([{
    state: '全部',
    className: 'active',
  },
  {
    state: '待完成',
    className: 'null',
  },
  {
    state: '已完成',
    className: 'null',
  }])
  const [tabStatus, setTabStatus] = useState('全部')

  let filterTodo;

  useEffect(() => {
    switch(tabStatus){
      case '全部':
        setTodo(data);
        break;
      case '待完成':
        filterTodo = [...data]?.filter(item => !item.finish)
        setTodo(filterTodo)
        break;
      case '已完成':
        filterTodo = [...data]?.filter(item => item.finish)
        setTodo(filterTodo)
      break;
    }
  }, [tabStatus, data, filterTodo]);

  return(
    <ul className="flex justify-around w-full">
      {allStatus.map((item,index) =>{
        return <input type="button" className={style} value={item.state} key={index}
        onClick={() => {
          setTabStatus(item.state)
          const newData = allStatus;
          newData.map((newDataItem, newDataIndex) => {
            newDataIndex === index ? (newDataItem.className = {activeStyle}) : (newDataItem.className = {style})
          })
          setAllStatus(newData);
        }}></input>
      })}
    </ul>
  )
}
