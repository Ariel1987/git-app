import { Wrapper } from './SearchBar.styles'

const SearchBar = () => {
  return (
    <Wrapper>
      <input type="text" id="repository" placeholder="Search repository" />
    </Wrapper>
  )
}

export default SearchBar
