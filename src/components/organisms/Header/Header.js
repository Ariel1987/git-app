import { Wrapper } from './Header.styles'
import SearchBar from '../../molecules/SearchBar/SearchBar'

const Header = () => {
  return (
    <Wrapper>
      <img src="/icons/logo.png" alt="logo" />
        <SearchBar type={'repository'} />
    </Wrapper>
  )
}

export default Header
