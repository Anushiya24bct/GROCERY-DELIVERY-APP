import React from "react";

function Header({ search, setSearch }) {
  return (
    <div className="header">
      <h1>🛒 Grocery Store</h1>

      <input
        type="text"
        placeholder="Search grocery..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
    </div>
  );
}

export default Header;