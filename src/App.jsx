import React from 'react'
import prag from "./assets/prag.jpg"

const App = () => {
  return (
    <div className='w-auto h-screen flex items-center justify-center'>
      <a href='https://www.facebook.com/p/Peace-Reaction-Assistance-Group-Prag-100082141553393/' target='_blank'><img src={prag} alt="" height={300} width={300} className='animate-pulse hover:scale-95 transition-all '/></a >
    </div>
  )
}

export default App