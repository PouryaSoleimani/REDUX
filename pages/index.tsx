//^ REDUX HOME PAGE ___________________________________________________________________________________________________________________________________________________________________ 
import { useEffect, useState } from "react"

export default function Home() {

  const foo = () => {
    console.log("HELLO")
    return function hello() {
      return "WORLD"
    }
  }

  useEffect(() => { console.log(foo()()) }, [])

  return (
    <main>
      <h1 className="py-2 text-4xl font-extrabold bg-purple-700 text-center border-b-8">REDUX HOME PAGE</h1>
    </main>
  );
}
