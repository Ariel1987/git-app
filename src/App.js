import { Wrapper } from './App.styles'
import Contributors from './components/organisms/Contributors/Contributors'
import Header from './components/organisms/Header/Header'
import Repositories from './components/organisms/Repositories/Repositories'
import Users from './components/organisms/Users/Users'

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
