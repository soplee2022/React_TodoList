import { useState } from 'react'

export function TabStatus({todo, setTodo}) {

  const style = 'py-4 border-b-2 border-b-primary-light w-full text-center text-third text-sm font-bold text-brown';
  // const allStatus = ['全部', '待完成', '已完成'];
  const allStatus = [
    {
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
    }
  ]

  const [tabStatus, setTabStatus] = useState('全部')

  let filterTodo;

  switch(tabStatus){
    case '全部':
      filterTodo = todo;
      break;
    case '待完成':
      filterTodo = todo?.filter(item => !item.finish)
      break;
    case '已完成':
      filterTodo = todo?.filter(item => item.finish)
    break;
  }
  const a = ''
  switch(a){
    case true:
      console.log(true);
      break;
    case false:
      console.log(false);
      break;
    default:
      console.log('none');
      break
  }
  return(
    <ul className="flex justify-around w-full">
      {allStatus.map((item,index) =>{
        return <input type="button" className={style} value={item.state} key={index}></input>
      })}
      {/* {allStatus.map((item, index) => {
        return (
          <li key={index}><a href="#" className={item.className}
            onClick={() => {
              setTabStatus(item.state)
              const newData = allStatus;
              newData.map((newDataItem, newDataIndex) => {
                newDataIndex === index ? (newDataItem.className = 'active') : (newDataItem.className = null)
              })
              setTabData(newData);
            }}
          >{item.state}</a></li>
        )
      })} */}
    </ul>
  )
}