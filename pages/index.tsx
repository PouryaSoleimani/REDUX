//^ HOME PAGE ___________________________________________________________________________________________________________________________________________________________________ 
export default function Home() {
  const myArray = [1, 2, 3, 4, 5, 6]

  const arrayOutput = myArray.reduce((a, b) => {
    console.log(a, b)
    return a + b
  })

  console.log(arrayOutput)
  return (
    <main>
      <h1 className="py-2 text-4xl font-extrabold bg-purple-700 text-center border-b-8">REDUX HOME PAGE</h1>
    </main>
  );
}
