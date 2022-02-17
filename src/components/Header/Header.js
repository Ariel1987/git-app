import { Wrapper } from "./Header.styles"
import SearchBar from "./SearchBar/SearchBar"

const Header = () => {
  return (
    <Wrapper>
      <img src='/icons/logo.png' alt='logo' />
      <SearchBar />
    </Wrapper>
  )
}

export default Header
