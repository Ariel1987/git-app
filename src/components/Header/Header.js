import { SearchBarWrapper, Wrapper } from './Header.styles'
import SearchBar from '../SearchBar/SearchBar'

const Header = () => {
  return (
    <Wrapper>
      <img src="/icons/logo.png" alt="logo" />
      <SearchBarWrapper>
        <SearchBar type={'repository'} />
      </SearchBarWrapper>
    </Wrapper>
  )
}

export default Header
