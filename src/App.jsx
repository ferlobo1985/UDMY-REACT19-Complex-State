import { useContext, useEffect } from "react"
import { MyContext } from "./context"

const App = ()=> {
  const context =  useContext(MyContext);

  useEffect(()=>{
    context.getUsers()
  },[])


  return (
    <>
      <h2>My app</h2>
      <ul>
        { context.users ?
        context.users.users.map( user =>(
          <li key={user.id}>{user.name}</li>
        ))
        :null}
      </ul>
      <hr/>
      <div>
        {context.users.loading ? 'LOADING...':'NOT LOADING :('}
      </div>
      <button onClick={context.handleLoading}>Toggle loading</button>
    </>
  )
}

export default App
