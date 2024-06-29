//^ REDUX HOME PAGE ___________________________________________________________________________________________________________________________________________________________________ 
import { useEffect } from "react"

export default function Home() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  let evenNumbers = numbers.filter((number: number) => {
    return number % 2 === 0
  })
  useEffect(() => { console.log(evenNumbers) }, [])

  return (
    <main>
      <h1 className="py-2 text-4xl font-extrabold bg-purple-700 text-center border-b-8">REDUX HOME PAGE</h1>
    </main>
  );
}
