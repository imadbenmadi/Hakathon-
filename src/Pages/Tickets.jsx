import React from 'react'
import Tickets_tech from './Tickets_tech'

function Tickets() {
  const [selected, setSelected] = React.useState('tech')
  return (
    <div className='p-10'>
      <h1 className='mx-auto text-center text-2xl font-bold'>Tickets</h1>
      <div className='flex justify-center items-center gap-5 my-5'>
        <button onClick={() => setSelected('tech')} className={`${selected == 'tech' ? 'bg-blue-500' : 'bg-blue-500 bg-opacity-50'} w-32 p-3  text-white text-xl rounded-[8px] transition-all duration-300 hover:scale-105`}>Tech</button>
        <button onClick={() => setSelected('center')} className={`${selected == 'center' ? 'bg-blue-500' : 'bg-blue-500 bg-opacity-50'} w-32 p-3  text-white text-xl rounded-[8px] transition-all duration-300 hover:scale-105`}>Center</button>
      </div>
      {selected == 'tech' ? (
        <Tickets_tech />
      ) : (
        <div>center</div>
      )}
    </div>
  )
}

export default Tickets