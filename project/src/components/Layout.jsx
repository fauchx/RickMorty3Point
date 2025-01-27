import React from 'react'

function Layout({children}) {
  return (
    <div className='bg-slate-100 h-full'>
        {children}
    </div>
  )
}

export default Layout