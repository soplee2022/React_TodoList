/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import { Empty } from 'antd';

import Icon_delete from '../assets/images/icon_delete.svg';

export function TodoList({
  todo, data, setData,
}) {
  const ulStyle = 'flex w-[400] flex-col justify-around space-y-6 mt-6 mx-6';
  const liStyle = 'flex items-center justify-between';
  const notFinish = 'text-[14px] text-brown';
  const isFinish = 'text-[14px] text-gray-300 line-through';

  const FinishStatus = (id) => {
    const newData = [...todo];
    const changStatus = newData.map((newItem) => {
      if (newItem.id === id) {
        newItem.finish = !newItem.finish;
      }
      return newItem;
    });
    setData(changStatus);
  };

  const DeleteTodo = (id) => {
    const deleteTodo = data.filter((newItem) => newItem.id !== id);
    setData(deleteTodo);
  };
  return (
    <ul className={ulStyle}>
      {todo.length === 0 ? <Empty /> : null}
      {todo.map(({ id, finish, text }, index) => (
        <li className={liStyle} key={id}>
          <div className="flex space-x-4 items-center">
            <input type="checkbox" name="" id="" className="w-5 h-5 rounded-md" defaultChecked={!!finish} onClick={() => { FinishStatus(id); }} />
            <p className={finish ? isFinish : notFinish}>{text}</p>
          </div>
          <input
            type="button"
            className="w-6 h-6"
            value=""
            style={{ backgroundImage: `url(${Icon_delete})` }}
            onClick={() => DeleteTodo(id, index)}
          />
        </li>
      ))}
    </ul>
  );
}
