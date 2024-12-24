import React, { useState, useEffect } from "react";
import { getUsers } from "../../services/Api";
import ClipLoader from "react-spinners/ClipLoader";
import UserList from "./UserList";

const User = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [usersByPage, setUsersByPage] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [allUsers, setAllUsers] = useState([]);
  const [error, setError] = useState(null);

  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10vh",
  };

  const fetchUsers = async (page) => {
    if (usersByPage[page]) return;

    try {
      setIsLoading(true);
      setError(null);
      const response = await getUsers(`?page=${page}&results=10&seed=abc`);
      const newUsers = response.data.results;

      setUsersByPage((prev) => ({
        ...prev,
        [page]: newUsers,
      }));
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const updateDisplayedUsers = () => {
      const allFetchedUsers = [];
      for (let i = 1; i <= currentPage; i++) {
        if (usersByPage[i]) {
          allFetchedUsers.push(...usersByPage[i]);
        }
      }
      setAllUsers(allFetchedUsers);
    };

    updateDisplayedUsers();
  }, [usersByPage, currentPage]);

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      {error && (
        <div style={{ color: "red" }}>
          {error?.message || "An error occurred"}
        </div>
      )}

      {isLoading && (
        <div style={loaderStyle}>
          <ClipLoader color="#007BFF" size={50} />
        </div>
      )}

      {!error && !isLoading && allUsers.length > 0 && (
        <div>
          <UserList users={allUsers} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0",
            }}
          >
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              style={{
                padding: "10px 20px",
                margin: "0 10px",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                backgroundColor: currentPage === 1 ? "#ccc" : "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              style={{
                padding: "10px 20px",
                margin: "0 10px",
                cursor: "pointer",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {!error && !isLoading && allUsers.length === 0 && (
        <p>No users available</p>
      )}
    </div>
  );
};

export default User;
