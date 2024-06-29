//^ REDUX HOME PAGE ___________________________________________________________________________________________________________________________________________________________________ 
import { useEffect, useState } from "react"

export default function Home() {
  const [user, setUser] = useState("")

  function randomIdGenerator2() {
    return Math.ceil(Math.random() * 10000000).toString().slice(0, 3)
  }

  function userGenerator(username: string, IDgenerator: Function) {
    const userDetail = `${username} | ID: ${IDgenerator()}`
    setUser(userDetail)
    return userDetail
  }


  useEffect(() => { console.log(userGenerator("Pourya Soleimani", randomIdGenerator2)) }, [])

  return (
    <main>
      <h1 className="py-2 text-4xl font-extrabold bg-purple-700 text-center border-b-8">REDUX HOME PAGE</h1>
      <h2 className="text-2xl text-center py-6 font-extrabold bg-purple-300 text-black">{user.toString()}</h2>

    </main>
  );
}
