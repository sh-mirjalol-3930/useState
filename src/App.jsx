import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Create from './pages/createCard/Create'
// import NotFound from './pages/notfound/notFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index={true} element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          {/* <Route path='*' element={<NotFound/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>  
  )
}

export default App