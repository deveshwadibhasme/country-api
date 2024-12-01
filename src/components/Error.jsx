import React from 'react'

const Error = () => {
  return (
    <div className='text-center font-xl relative'>Something Went Wrong
    <button onClick={()=>history.back()} className="absolute top-0 left-5 px-4 py-1 bg-slate-700 text-white">&larr;Go Back</button>
    </div>
  )
}

export default Error