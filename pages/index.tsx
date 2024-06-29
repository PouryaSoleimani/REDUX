//^ REDUX HOME PAGE ___________________________________________________________________________________________________________________________________________________________________ 
import { useEffect, useState } from "react"

export default function Home() {

  const FOO = () => {
    console.log("FOO FUNCTION")
    return function inner() { return "INNER FUNCTION" }
  }

  useEffect(() => { console.log(FOO()()) }, [])

  return (
    <main>
      <h1 className="py-2 text-4xl font-extrabold bg-purple-700 text-center border-b-8">REDUX HOME PAGE</h1>
    </main>
  );
}
