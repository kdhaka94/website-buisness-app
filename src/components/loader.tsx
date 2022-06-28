import React from 'react'

export const Loader = () => {
  return (
    <div style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} className="z-30 absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
      <span className="text-xl">Loading...</span>
    </div>
  )
}
