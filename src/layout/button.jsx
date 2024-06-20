import React from 'react'

const button = (props) => {
  return (
    <div>
      <button className='px-6 py-1 border-white bg-[#FFDCAB] hover:text-[#AB682E] translate-all rounded-full'>
        {props.title}
      </button>
    </div>
  )
}

export default button
