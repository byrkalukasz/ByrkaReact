import React from "react";
import "./Search.css";

function Search() {
  return (
    <div>
      <input className="moja" type="text" placeholder="Search.." />
      <i class="fa fa-search" aria-hidden="true"></i>
    </div>
  );
}

export default Search;
