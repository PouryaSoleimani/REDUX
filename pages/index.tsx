//^ REDUX HOME PAGE ___________________________________________________________________________________________________________________________________________________________________ 
import { useEffect } from "react"

export default function Home() {
  function randomIdGenerator2() {
    return Math.ceil(Math.random() * 10000000).toString().slice(0, 4)
  }
  function userGenerator(username: string, IDgenerator: Function) {
    return `${username} | ID: ${IDgenerator()}`
  }


  useEffect(() => { console.log(userGenerator("Pourya Soleimani", randomIdGenerator2)) }, [])

  return (
    <main>
      <h1 className="py-2 text-4xl font-extrabold bg-purple-700 text-center border-b-8">REDUX HOME PAGE</h1>
    </main>
  );
}
