import { useState } from 'react'


export function CleanAll({add}) {
  return(
    <li className="flex items-center justify-between py-6 mx-6 ">
      <p className="text-sm text-brown">{add.length} 個待完成項目</p>
      <input type="button" className="text-sm text-primary" value="清除已完成項目"></input>
    </li>
  )
}