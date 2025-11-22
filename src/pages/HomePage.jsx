import React from 'react'
import Quiz from "../components/Quiz"

const HomePage = () => {
  return (
    <div>
      <div className='container'>
          <h1 className="text-2xl font-bold text-center mb-2">Quizz vui</h1>
          <Quiz/>
        </div>
    </div>
  )
};

export default HomePage;
