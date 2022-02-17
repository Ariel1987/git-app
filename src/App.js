import { Wrapper } from "./App.styles"
import Contributors from "./components/Contributors/Contributors"
import Header from "./components/Header/Header"
import Repositories from "./components/Repositories/Repositories"
import Users from "./components/Users/Users"

function App() {
  return (
    <Wrapper>
      <Header />
      <Users />
      <Repositories />
      <Contributors />
    </Wrapper>
  )
}

export default App
