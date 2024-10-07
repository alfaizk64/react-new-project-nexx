import React from 'react'

function TagLine({children}) {
  return (
    <div className='capitalize text-indigo-600 text-3xl font-bold'>
      {children}
    </div>
  )
}

export default TagLine
