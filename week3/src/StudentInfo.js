import React from 'react'

export default function StudentInfo({
  firstName,
  lastName,
  sId,
  school,
  major,
}) {
  return (
    <div className='text-white bg-gray-900 m-2 rounded-2xl p-4 shadow-2xl'>
      <div className='underline decoration-sky-500'>
        {lastName}, {firstName}
      </div>
      <ul>
        <li>
          <strong className='underline decoration-pink-500'>ID: </strong> {sId}
        </li>
        <li>
          <strong className='underline decoration-pink-500'>School: </strong>
          {school}
        </li>
        <li>
          <strong className='underline decoration-pink-500'>Major: </strong>
          {major}
        </li>
      </ul>
    </div>
  )
}
