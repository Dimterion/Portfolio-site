function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" /> Only show completed projects
      </label>
    </form>
  );
}

export default SearchBar;
