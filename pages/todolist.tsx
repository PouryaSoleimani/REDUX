"use client"
import { TODOS } from '@/RECOIL/atoms'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { uuid } from 'uuidv4';
import toast, { Toaster } from 'react-hot-toast';
const { persistAtom } = recoilPersist()

type SingleTodoType = { id: number, title: string, isCompleted: boolean }
// COMPONENT ____________________________________________________________________________________________________________________________________________________________________________
const TodoListPage = () => {

  const notify2 = () => toast.error('TODO INPUT IS EMPTY', { style: { fontWeight: "900" } });
  const [Todos, setTodos] = useRecoilState(TODOS)
  const [title, setTitle] = useState('')

  useEffect(() => { console.log(Todos) }, [Todos])

  function addTodoHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (title) {
      let mainTodo = { id: uuid(), title: title, isCompleted: false }
      const copy = Array.from(Todos)
      copy.push(mainTodo)
      setTodos(copy)
      setTitle('')
    } else { notify2() }
  }

  function resetTodos() { setTodos([]); setTitle('') }


  //* RETURN
  return (
    <main suppressHydrationWarning className='w-screen h-screen flex flex-col'>
      <Toaster position="top-right" reverseOrder={true} />
      <form id="input" onSubmit={addTodoHandler} className='w-screen flex py-2 items-center justify-center space-x-1 bg-gradient-to-r from-slate-900 via-slate-800 to-zinc-900'>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Add Todo' className='px-2 py-1 rounded-md text-black font-bold ' />
        <button type='submit' className='bg-green-600 px-4 py-1 font-extrabold rounded-md'>+</button>
        <span onClick={resetTodos} className='bg-orange-600 px-4 py-1 font-extrabold rounded-md cursor-pointer'>RESET</span>
      </form>

      <div id="todos" >
        {!Todos.length ? (
          <h1 className='text-center bg-red-900 text-3xl w-1/2 mx-auto rounded-xl font-extrabold mt-32 py-10'>NO TODOS TO SHOW ....</h1>
        ) : (
          <ul className='w-fit h-fit px-6 py-10 border list-inside list-disc mx-auto mt-10 bg-slate-900/50 flex flex-col text-justify items-center justify-center text-3xl font-bold'>
            {Todos.map((item: SingleTodoType) => (<li key={item.id}>{item.title}</li>))}
          </ul>
        )}
      </div>
    </main>
  )
}

export default TodoListPage