import { useState } from "react";
import { useNavigate } from "react-router-dom";



function SearchOrder() {
  const [query, SetQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    SetQuery("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order #"
        value={query}
        onChange={(e) => SetQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
