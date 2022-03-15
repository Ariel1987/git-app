import { Wrapper } from './SearchBar.styles'

const SearchBar = ({ onSubmit, text, onChange, value }) => {
  return (
    <Wrapper onSubmit={onSubmit}>
      <input
        type="text"
        id="repository"
        placeholder={`Search ${text}`}
        onChange={onChange}
        value={value}
      />
      <button type="submit">
        <img src="/icons/search.png" alt="search" />
      </button>
    </Wrapper>
  )
}

export default SearchBar
