import React from 'react'


function EvaluationCard({title, description, rating, date, user}) {
  
  return (
    <div className='flex flex-col w-72 h-60 shadow-md rounded-xl bg-white gap-4 p-4 justify-evenly align-middle'>
      <p className='flex gap-1'>
         {Array.from({ length: Math.floor(rating) }).map((_, i) => (
            <span key={i}>⭐</span>
          ))}
      </p>
      <div className='flex flex-col h-30 gap-2 w-full text-left'>
          <h3 className=' font-bold text-lg text-gray-950'>{title}</h3>
          <p className='text-sm sm:text-xs font-medium text-gray-900'>{description}</p>
      </div>
      
      <span className='text-left font-medium text-sm'>{user}, {date}</span>
    </div>
  )
}

export default EvaluationCard