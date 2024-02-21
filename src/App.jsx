
import { AppRouters } from "./Routers/AppRouters"
import { UserProvider } from "./context/UserProvider"

function App() {

  return (
    <>
      <header className=" bg-black center title-header">
        <p>Práctica SPA</p>
      </header>
      <UserProvider>
        <AppRouters />
      </UserProvider>
      <footer className=" bg-black center">
        <p>footer</p>
      </footer>
    </>
  )
}

export default App
