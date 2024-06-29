//^ REDUX HOME PAGE ___________________________________________________________________________________________________________________________________________________________________ 
import { useEffect } from "react"

export default function Home() {
  let myArray3 = [1, 2, 3, 4, 5]
  let reducedArray3: number = myArray3.reduce((a, b) => { return a + b })

  useEffect(() => { console.log(reducedArray3) }, [])

  return (
    <main>
      <h1 className="py-2 text-4xl font-extrabold bg-purple-700 text-center border-b-8">REDUX HOME PAGE</h1>
    </main>
  );
}
