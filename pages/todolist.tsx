import { TODOS } from '@/RECOIL/atoms'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

//& COMPONENT
const TodoListPage = () => {

  const [Todos, setTodos] = useRecoilState(TODOS)
  const [title, setTitle] = useState('')

  function addTodoHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    let mainTodo = { id: Math.random(), title: title, isCompleted: false, effects_UNSTABLE: [persistAtom], }
    const copy = [...Todos]
    copy.push(mainTodo)
    setTodos(copy)
    setTitle('')
  }

  return (
    <main className='w-screen h-screen flex flex-col'>

      <form id="input" onSubmit={addTodoHandler} className='w-screen flex py-2 items-center justify-center space-x-1 bg-gradient-to-r from-slate-900 via-slate-800 to-zinc-900'>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Add Todo' className='px-2 py-1 rounded-md text-black font-bold ' />
        <button type='submit' className='bg-green-600 p-1 rounded-md'>+</button>
      </form>

      <div id="todos">
        <ul className='w-fit h-fit px-6 py-10 border list-inside list-disc mx-auto mt-10 bg-slate-900/50 flex flex-col text-justify items-center justify-center text-3xl font-bold'>
          {Todos.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default TodoListPage