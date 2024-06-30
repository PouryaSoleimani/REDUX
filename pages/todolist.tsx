"use client"
import { TODOS } from '@/RECOIL/atoms'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { uuid } from 'uuidv4';
import toast, { Toaster } from 'react-hot-toast';
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
    } else {
      notify2()
    }
  }

  function resetTodos() {
    setTodos([]);
    setTitle('')
  }

  function completeTodo(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, ID: number) {
    const mainTodo = Todos.find((item: SingleTodoType) => { return item.id == ID })
    console.log(mainTodo)
  }
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
          <ul className='h-fit px-6 py-4 border-2 list-inside list-disc mx-auto mt-10 bg-zinc-600/50 rounded-xl w-[20rem] flex flex-col text-start items-start justify-start text-3xl font-bold'>
            {Todos.map((item: SingleTodoType) => (
              <div className='flex items-center justify-between px-2 w-full'>
                <li key={item.id}>{item.title}</li>
                <button onClick={event => completeTodo(event, item.id)} className='text-xl bg-green-300 rounded-md p-1'>✅</button>
              </div>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}

export default TodoListPage