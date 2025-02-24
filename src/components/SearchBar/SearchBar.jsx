import { useState, useRef } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search query!");
      return;
    }
    onSubmit(query);
    setQuery("");
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          ref={inputRef}
          type="text"
          autoComplete="off"
          placeholder="Show me..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={css.input}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
