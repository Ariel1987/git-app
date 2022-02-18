import { Wrapper } from './SearchBar.styles'

const SearchBar = (props) => {
  return (
    <>
      <input type="text" id="repository" placeholder={`Search ${props.type}`} />
    </>
  )
}

export default SearchBar
