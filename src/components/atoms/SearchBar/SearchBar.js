import { Wrapper } from './SearchBar.styles'

const SearchBar = (props) => {
  return (
    <Wrapper>
      <input
        type="text"
        id="repository"
        placeholder={`Search ${props.type}`}
        onChange={props.onChange}
      />
    </Wrapper>
  )
}

export default SearchBar
