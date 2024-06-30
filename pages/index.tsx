//^ REDUX HOME PAGE ___________________________________________________________________________________________________________________________________________________________________ 
import { useEffect } from "react"
import { todolistStore } from "@/PURE TS/REDUX_STORE"

export default function Home() {

  let newTodo = { id: 3, title: "LEARN PWA", isCompleted: false }

  function addTodo() {
    todolistStore.push(newTodo)
  }

  useEffect(() => {
    console.log(todolistStore); addTodo();
  }, [])

  return (
    <main>
      <h1 className="py-2 text-4xl font-extrabold bg-purple-700 text-center border-b-8">REDUX HOME PAGE</h1>
    </main>
  );
}
