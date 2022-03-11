import { Wrapper } from "./SearchBar.styles"

const SearchBar = (props) => {
  return (
    <Wrapper>
      <input type="text" id="repository" placeholder={`Search ${props.type}`} />
    </Wrapper>
  )
}

export default SearchBar
