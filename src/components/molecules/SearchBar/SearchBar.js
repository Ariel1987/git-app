import { Wrapper } from './SearchBar.styles'

const SearchBar = (props) => {
  return (
    <Wrapper onSubmit={props.onSubmit}>
      <input
        type="text"
        id="repository"
        placeholder={`Search ${props.type}`}
        onChange={props.onChange}
      />
      <button type="submit">
        <img src="/icons/search.png" alt="search" />
      </button>
    </Wrapper>
  )
}

export default SearchBar
