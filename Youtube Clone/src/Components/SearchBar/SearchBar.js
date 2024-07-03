import React, { useCallback, useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (searchTerm.length === 0) return;
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    },
    [navigate, searchTerm]
  );

  const handleChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 12,
        border: "1px solid #e3e3e3",
        pl: 3,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search Something...."
        value={searchTerm}
        onChange={handleChange}
      />
      <IconButton type="submit" sx={{ p: "8px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
