import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const BASE_URL = `http://localhost:8181`;

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const showToast = (message) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleValidation = () => {
    const { username, email, password, confirmPassword } = data;

    if (!username || !email || !password || !confirmPassword) {
      showToast("All fields are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("Please enter a valid email address.");
      return false;
    }

    if (password.length < 6) {
      showToast("Password must be at least 6 characters long.");
      return false;
    }

    if (password !== confirmPassword) {
      showToast("Password and Confirm Password must match.");
      return false;
    }

    return true;
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        const response = await axios.post(
          `${BASE_URL}/api/auth/register`,
          data
        );
        if (response.data) {
          toast.success(response.data.message || "Registration successful!", {
            position: "bottom-right",
            autoClose: 3000,
            pauseOnHover: true,
            draggable: true,
          });
          setTimeout(() => navigate("/login"), 3000);
        } else {
          toast.error(response.data.message || "Something went wrong!", {
            position: "bottom-right",
            autoClose: 3000,
            pauseOnHover: true,
            draggable: true,
          });
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Network error. Please try again.",
          {
            position: "bottom-right",
            autoClose: 3000,
            pauseOnHover: true,
            draggable: true,
          }
        );
      }
    }
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <div className="brand">
          <img src={logo} alt="Logo" />
          <h1>Snappy</h1>
        </div>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Create User</button>
        <span>
          Already have an account? <Link to="/login">Login Here</Link>
        </span>
      </form>
      <ToastContainer />
    </FormContainer>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0px 10px 30px rgba(1, 2, 2, 0.7);
    width: 100%;
    max-width: 400px;

    .brand {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      img {
        height: 60px;
      }
      h1 {
        font-size: 1.8rem;
        color: #333;
        text-transform: uppercase;
        font-weight: bold;
        margin: 0;
      }
    }

    input {
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 1rem;
      color: #333;
      &:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
      }
    }

    button {
      padding: 12px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: #0056b3;
      }
    }

    span {
      font-size: 0.9rem;
      text-align: center;
      color: #555;
      a {
        color: #007bff;
        text-decoration: none;
        font-weight: bold;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 768px) {
    form {
      padding: 1.5rem;
      gap: 1rem;
    }
  }
`;

export default Register;
