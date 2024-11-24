import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import loader from "../assets/loader.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Buffer } from "buffer";
import axios from "axios";

const API_URL = `https://api.multiavatar.com/45678945`;

const Avatar = () => {
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const setProfilePicture = async () => {
    if (selectedAvatar === null) {
      toast.error(`Please select an avatar`, {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    try {
      
      toast.success(`Avatar set successfully!`, {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error(`Failed to set avatar`, {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  useEffect(() => {
    const getAvatars = async () => {
      const data = [];
      for (let i = 0; i < 4; i++) {
        const image = await axios.get(
          `${API_URL}/${Math.round(Math.random() * 2000)}`
        );
        const buffer = new Buffer(image.data);
        data.push(buffer.toString("base64"));
      }
      setAvatars(data);
      setIsLoading(false);
    };

    getAvatars();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <div className="loader-container">
          <img src={loader} alt="Loader" className="loader" />
        </div>
      ) : (
        <>
          <div className="title-container">
            <h1>Pick an avatar as your profile picture</h1>
          </div>
          <div className="avatars">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={`avatar ${
                  selectedAvatar === index ? "selected" : ""
                }`}
                onClick={() => setSelectedAvatar(index)}
              >
                <img src={`data:image/svg+xml;base64,${avatar}`} alt="Avatar" />
              </div>
            ))}
          </div>
          <button className="submit-btn" onClick={setProfilePicture}>
            Set as profile picture
          </button>
        </>
      )}
      <ToastContainer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #282c34;
  color: white;
  padding: 0 1rem;
  gap: 1.5rem;

  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .loader {
      width: 100px;
    }
  }

  .title-container {
    text-align: center;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      color: #61dafb;
    }
  }

  .avatars {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;

    .avatar {
      position: relative;
      border: 3px solid transparent;
      border-radius: 50%;
      padding: 10px;
      transition: transform 0.3s ease, border-color 0.3s ease;

      &.selected {
        border-color: #61dafb;
        transform: scale(1.1);
        padding-left: -10px;
      }

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
      }
    }
  }

  .submit-btn {
    background-color: #61dafb;
    color: #282c34;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;

    &:hover {
      background-color: #21a1f1;
      transform: scale(1.05);
    }

    &:active {
      transform: scale(1);
    }

    &:disabled {
      background-color: #aaa;
      cursor: not-allowed;
    }
  }

  @media (max-width: 768px) {
    .title-container h1 {
      font-size: 1.5rem;
    }

    .avatars img {
      width: 80px;
      height: 80px;
    }

    .submit-btn {
      padding: 0.5rem 1.5rem;
      font-size: 0.9rem;
    }
  }
`;

export default Avatar;
