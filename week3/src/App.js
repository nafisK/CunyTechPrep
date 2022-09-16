import './App.css'
import StudentInfo from './StudentInfo'
import studentList from './studentList'
import CountApp from './CountApp'

function App() {
  console.log(studentList)

  return (
    <div className='App'>
      <div className='flex justify-center items-center h-screen bg-gray-900 '>
        <div className='bg-slate-800 px-2 pt-10 pb-2 rounded-3xl w-[15%] border-4 border-cyan-600'>
          <div className='px-2'>
            <h1 className='text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              WELCOME TO CTP
            </h1>
            <p className='text-center text-sky-400 font-extrabold'>
              Here are all our students
            </p>
            <br />
            {studentList.map(student => (
              <StudentInfo {...student} key={student.sId} />
            ))}
          </div>

          <div className='bg-gray-900 p-3 text-white rounded-2xl'>
            <CountApp />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
