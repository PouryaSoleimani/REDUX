//^ REDUX HOME PAGE ___________________________________________________________________________________________________________________________________________________________________ 
import { useEffect, useState } from "react"

export default function Home() {

  function FOO() {
    console.log("FOO FUNCTION")
    function innerFoo() {
      console.log("INNER FUNCITION")
    }
  }


  useEffect(() => {console.log(FOO()) }, [])

  return (
    <main>
      <h1 className="py-2 text-4xl font-extrabold bg-purple-700 text-center border-b-8">REDUX HOME PAGE</h1>
    </main>
  );
}
