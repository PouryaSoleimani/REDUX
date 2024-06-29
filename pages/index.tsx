import { useEffect } from "react"

//^ HOME PAGE ___________________________________________________________________________________________________________________________________________________________________ 
export default function Home() {
  useEffect(() => {
    const myArray2 = [10, 20, 30, 40, 50, 60]
    const reducedArray = myArray2.reduce((x, y) => { console.log(x, y); return x + y })
    console.log(reducedArray)
  }, [])

  return (
    <main>
      <h1 className="py-2 text-4xl font-extrabold bg-purple-700 text-center border-b-8">REDUX HOME PAGE</h1>
    </main>
  );
}
