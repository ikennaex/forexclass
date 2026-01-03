import React from 'react'
import Homepage from './Pages/Homepage'
import { Route, Routes } from 'react-router'
import QuizOne from './Components/Quiz/QuizOne'
import QuizTwo from './Components/Quiz/Quiztwo'
import QuizThree from './Components/Quiz/QuizThree'
import QuizFour from './Components/Quiz/QuizFour'
import Congratulations from './Components/Congratulations'
import NotQualified from './Components/NotQualified'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Homepage />} />
        <Route path='/quiz/1' element = {<QuizOne />} />
        <Route path='/quiz/2' element = {<QuizTwo />} />
        <Route path='/quiz/3' element = {<QuizThree />} />
        <Route path='/quiz/4' element = {<QuizFour />} />
        <Route path='/quiz/congratulations' element = {<Congratulations />} />
        <Route path='/quiz/notqualified' element = {<NotQualified />} />
      </Routes>
    </div>
  )
}

export default App
