import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-purple-500 h-35 flex flex-row">
      <h1 className="p-4 flex items-start text-5xl font-bol">MusicBase</h1>
      
      <div className="p-4 flex flex-col ml-auto">
        <button>Login</button>
        
        <button>Register</button>
      </div>
      
    </div>

  )
}

export default Navbar