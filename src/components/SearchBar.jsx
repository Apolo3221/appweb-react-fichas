function SearchBar({ value, onChange }) {
    return (
        <input
            type="search"
            className="search-bar"
            placeholder="Pesquisar eventos..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}
export default SearchBar