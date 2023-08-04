const Search = ({ searchText, onChange }) => {
  return <input type="text" value={searchText} onChange={onChange} placeholder="Search by ID" />
}

export default Search
