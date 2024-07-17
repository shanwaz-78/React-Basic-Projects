import React, { useState, useEffect, useCallback } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "../SideBar/SideBar";
import Videos from "../Videos/Videos";
import fetchVideos from "../../utils/API";
import Loader from "../Loader/Loader";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getVideos = useCallback(async (category) => {
    setLoading(true);
    try {
      const { items } = await fetchVideos(
        `search?part=snippet&q=${category}&maxResults=50`
      );
      setVideos(items);
    } catch (error) {
      console.error("Failed to fetch videos", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getVideos(selectedCategory);
  }, [selectedCategory, getVideos]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "90vh" },
          borderRight: "1px solid #3d3d3d",
          px: { md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff", fontWeight: "bold"}}
        >
          Copyright 2024 JSM Media.
        </Typography>
      </Box>
      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2}}>
        <Typography
          variant="h4"
          fontWeight="bold"
          md={2}
          sx={{ color : '#fff', textAlign : {md : 'start', xs : 'center'} }}
          paddingLeft={2}
        >
          {selectedCategory}{" "}
          <span
            style={{
              color: "red",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            Videos
          </span>
        </Typography>

        {loading ? (
          <Typography style={{ marginRight: "10rem", textAlign: "center" }}>
            <Loader />
          </Typography>
        ) : (
          <Videos videos={videos} />
        )}
      </Box>
    </Stack>
  );
}

export default Feed;
