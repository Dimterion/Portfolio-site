import "./searchBar.css";

function SearchBar({
  filterText,
  completed,
  onFilterTextChange,
  onCompletedChange,
}) {
  return (
    <div className="search-container">
      <form className="search-form">
        <input
        className="search-input"
          type="text"
          value={filterText}
          placeholder="Search by name"
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => onCompletedChange(e.target.checked)}
          />{" "}
          Show only completed projects
        </label>
      </form>
      <div>✔ = completed</div>
      <div style={{ color: "red" }}>red = in progress</div>
    </div>
  );
}

export default SearchBar;
