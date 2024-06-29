import { useEffect } from "react"

//^ HOME PAGE ___________________________________________________________________________________________________________________________________________________________________ 
export default function Home() {
  useEffect(() => {
    console.log("REDUX PAGE")
  }, [])

  return (
    <main>
      <h1 className="py-2 text-4xl font-extrabold bg-purple-700 text-center border-b-8">REDUX HOME PAGE</h1>
    </main>
  );
}
