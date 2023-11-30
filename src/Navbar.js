
import React, { useState } from 'react'
import { AiOutlineCaretUp,AiOutlineCaretDown } from "react-icons/ai";
import list from './list.json'

const Navbar = () => {

    const [isOpen,setIsOpen]=useState(false)
  return (
    <>
    <div className='relative flex flex-col items-center w-[200px] h-[200px] rounded-lg justify-center mb-20'>
        <button onClick={()=>{setIsOpen((prev)=>!prev)}} className='bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white'>DropDown
        {!isOpen ? (
           <AiOutlineCaretDown/>
        ) : (
            <AiOutlineCaretUp />
        )}</button>

        {isOpen && <div className='bg-blue-400 absolute top-20 mt-16 flex flex-col items-start rounded-lg p-2 w-full'>
            {list.map((item,i)=>(
                <div className='flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent p-1' key={i}>
                    <p>{item.city}</p>
                    <p>{item.emoticon}</p>
                </div>
            ))}</div>}
    </div>
    </>
  )
}

export default Navbar
