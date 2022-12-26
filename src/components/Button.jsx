import React from 'react'

export default function Button({children, disabled = false, onClick}) {
  return (
    <button className='px-3 py-2 cursor-pointer bg-green-600 text-white font-semibold tracking-wider
    hover:rounded-md transition-all ease-in-out'
    disabled={disabled}
    onClick={onClick}
    >
    {children}
    </button>
  )
}
