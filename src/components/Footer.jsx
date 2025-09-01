import React from 'react'

export default function Footer() {
  return (
    <footer className= "bg-blue-400 flex justify-between items-center px-4 h-14 fixed bottom-0 flex-wrap" style={{width:"100%"}}>
        <div className="flex gap-1">
       <h1 className='text-2xl w-max'>Passworld Manager</h1><p className='self-end font-bold text-sm'> by Spass</p>
       </div>
       <h1 className=' font-bold '>Copyright ©2025;</h1>
    </footer>
  )
}
