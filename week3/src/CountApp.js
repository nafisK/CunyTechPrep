import { getDefaultNormalizer } from '@testing-library/react'
import { useState } from 'react'

function CountApp() {
  const [numClicks, setNumClicks] = useState(0)

  const handleClick = event => {
    setNumClicks(numClicks + 1)
  }

  return (
    <div className='text-center'>
      <p className='text-2xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
        Clicked {numClicks} times
      </p>
      <button onClick={handleClick}></button>
      <a
        href='#_'
        class='relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md'
        onClick={handleClick}
      >
        <span class='w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute'></span>
        <span class='relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400'>
          <span class='relative text-white'>👊</span>
        </span>
      </a>
    </div>
  )
}

export default CountApp
