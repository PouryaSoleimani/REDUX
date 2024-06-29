//^ REDUX HOME PAGE ___________________________________________________________________________________________________________________________________________________________________ 
import { useEffect } from "react"

export default function Home() {
  let products = [
    ["laptop", "monitor", "mouse", "keyboard"],
    ["t-shirt", "pants", "shoes", "jackets"],
    ["pen", "pencil", "bag", "eraser"]
  ]

  let flatedProducts = products.reduce((prevArray, nextArray) => {
    return [...prevArray, ...nextArray]
  })


  useEffect(() => { console.log(flatedProducts) }, [])

  return (
    <main>
      <h1 className="py-2 text-4xl font-extrabold bg-purple-700 text-center border-b-8">REDUX HOME PAGE</h1>
    </main>
  );
}
