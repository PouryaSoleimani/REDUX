//^ REDUX HOME PAGE ___________________________________________________________________________________________________________________________________________________________________ 
import { useEffect } from "react"

export default function Home() {

  function randomNumberGenerator() {
    return Math.ceil(Math.random() * 10000).toString().slice(0, 4)
  }

  useEffect(() => { console.log(randomNumberGenerator()) }, [])

  return (
    <main>
      <h1 className="py-2 text-4xl font-extrabold bg-purple-700 text-center border-b-8">REDUX HOME PAGE</h1>
    </main>
  );
}
