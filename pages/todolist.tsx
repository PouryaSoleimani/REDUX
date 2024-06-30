import { TODOS } from '@/RECOIL/atoms'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { uuid } from 'uuidv4';
const { persistAtom } = recoilPersist()

type SingleTodoType = { id: number, title: string, isCompleted: boolean }
//^ COMPONENT ____________________________________________________________________________________________________________________________________________________________________________
const TodoListPage = () => {

  const [Todos, setTodos] = useRecoilState(TODOS)
  const [title, setTitle] = useState('')

  useEffect(() => {
    console.log(Todos)
  }, [Todos])

  function addTodoHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    let mainTodo = { id: uuid(), title: title, isCompleted: false, effects_UNSTABLE: [persistAtom], }
    const copy = [...Todos]
    copy.push(mainTodo)
    setTodos(copy)
    setTitle('')
  }
  function resetTodos() { setTodos([]) }

  return (
    <main suppressHydrationWarning className='w-screen h-screen flex flex-col'>

      <form id="input" onSubmit={addTodoHandler} className='w-screen flex py-2 items-center justify-center space-x-1 bg-gradient-to-r from-slate-900 via-slate-800 to-zinc-900'>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Add Todo' className='px-2 py-1 rounded-md text-black font-bold ' />
        <button type='submit' className='bg-green-600 px-4 py-1 font-extrabold rounded-md'>+</button>
        <button onClick={resetTodos} className='bg-orange-600 px-4 py-1 font-extrabold rounded-md'>RESET</button>
      </form>

      <div id="todos" >
        {!Todos.length ? (
          <h1>NO TODOS TO SHOW ....</h1>
        ) : (
          <ul className='w-fit h-fit px-6 py-10 border list-inside list-disc mx-auto mt-10 bg-slate-900/50 flex flex-col text-justify items-center justify-center text-3xl font-bold'>
            {Todos?.map((item: SingleTodoType) => (<li key={item.id}>{item.title}</li>))}
          </ul>
        )}
      </div>
    </main>
  )
}

export default TodoListPage