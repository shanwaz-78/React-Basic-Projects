import React, { useState, useEffect } from "react";
import DataTable from "../Components/DataTable";
import SearchBar from "../Components/SearchBar";
import { fetchUsers } from "../api/Api";

const AppContainer = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const fetchedData = await fetchUsers(
        `https://jsonplaceholder.typicode.com`
      );
      setData(fetchedData);
      setFilteredData(fetchedData);
    };
    fetchUserData();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => {
        return (
          item.name.toLowerCase().includes(term.toLowerCase()) ||
          item.email.toLowerCase().includes(term.toLowerCase())
        );
      });
      setFilteredData(filtered);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <DataTable data={filteredData} />
    </div>
  );
};

export default AppContainer;
