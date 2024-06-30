import React from 'react'

const TodoListPage = () => {
  return (
    <main className='w-screen h-screen flex flex-col'>

      <form id="input" className='w-screen flex py-2 items-center justify-center space-x-1 bg-gradient-to-r from-slate-900 via-slate-800 to-zinc-900'>
        <input type="text" placeholder='Add Todo' className='px-2 py-1 rounded-md text-black font-bold ' />
        <button className='bg-green-600 p-1 rounded-md'>➕</button>
      </form>

      <div id="todos">
        <ul>

        </ul>
      </div>
    </main>
  )
}

export default TodoListPage