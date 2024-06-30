//^ REDUX HOME PAGE ___________________________________________________________________________________________________________________________________________________________________ 
import { useEffect } from "react"

export default function Home() {

  function plus(x: number) { return function (y: number) { return x + y } }

  useEffect(() => { console.log(plus(20)(30)) }, [])

  return (
    <main>
      <h1 className="py-2 text-4xl font-extrabold bg-purple-700 text-center border-b-8">REDUX HOME PAGE</h1>
    </main>
  );
}
