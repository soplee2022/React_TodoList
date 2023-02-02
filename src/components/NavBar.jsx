import { useState } from 'react'
import  Logo  from '../assets/images/Logo.svg'

export function NavBar() {
  return(
    <nav className='flex items-center justify-between container md:container pt-6'>
      <img className='w-[300px]' src={Logo} alt="Logo" />
      <div className='flex items-center space-x-6'>
        <p className='text-base text-brown font-bold'>菲 Todo List</p>
        <input type="button" className='text-brown text-base' value="登出" />
      </div>
    </nav>
  )
}