import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Front from './Pages/Front/front'
import About from './Pages/About/about'
import Second from './Pages/Second/second'
import Third from './Pages/Third/third'
import Fourth from './Pages/Fourth/fourth'
import Five from './Pages/Five/five'
import Six from './Pages/Six/six'
import Seven from './Pages/Seven/seven'
import Eight from './Pages/Eight/eight'
import Nine from './Pages/Nine/nine'
import Ten from './Pages/Ten/ten'
import Eleven from './Pages/Eleven/eleven'
import Twelve from './Pages/Twelve/twelve'
import One from './Pages/First/first'

const App = () => {
  return (

    <div>
      <Routes>

        <Route path='/' element={<Front/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/first' element={<One/>}/>
        <Route path='/second' element={<Second/>}/>
        <Route path='/third' element={<Third/>}/>
        <Route path='/fourth' element={<Fourth/>}/>
        <Route path='/five' element={<Five/>}/>
        <Route path='/six' element={<Six/>}/>
        <Route path='/seven' element={<Seven/>}/>
        <Route path='/eight' element={<Eight/>}/>
        <Route path='/nine' element={<Nine/>}/>
        <Route path='/ten' element={<Ten/>}/>
        <Route path='/eleven' element={<Eleven/>}/>
        <Route path='/twelve' element={<Twelve/>}/>

      </Routes>
    </div>

  )
}

export default App