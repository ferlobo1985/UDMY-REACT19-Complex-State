import { useContext } from "react"
import { MyContext } from "./context"

const App = ()=> {
  const context =  useContext(MyContext);

  console.log(context)

  return (
    <>
      <h2>My app</h2>
    </>
  )
}

export default App
