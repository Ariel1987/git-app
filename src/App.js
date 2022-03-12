import { Wrapper } from './App.styles'
import Header from './components/organisms/Header/Header'
import RightSideBar from './components/organisms/RightSideBar/RightSideBar'
import MainArea from './components/organisms/MainArea/MainArea'
import LeftSideBar from './components/organisms/LeftSideBar/LeftSideBar'

function App() {
  return (
    <Wrapper>
      <Header />
      <LeftSideBar />
      <MainArea />
      <RightSideBar />
    </Wrapper>
  )
}

export default App
