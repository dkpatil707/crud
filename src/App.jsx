import React from 'react'

import './global.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing/Route'
const App = () => {
  return (
    <>
        
        <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App