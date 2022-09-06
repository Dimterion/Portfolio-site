function SearchBar({
  filterText,
  completed,
  onFilterTextChange,
  onCompletedChange,
}) {
  return (
    <>
      <form>
        <input
          type="text"
          value={filterText}
          placeholder="Search..."
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => onCompletedChange(e.target.checked)}
          />{" "}
          Only show completed projects
        </label>
      </form>
      <p>✔ = completed</p>
      <div style={{ color: "red" }}>red = in progress</div>
    </>
  );
}

export default SearchBar;
