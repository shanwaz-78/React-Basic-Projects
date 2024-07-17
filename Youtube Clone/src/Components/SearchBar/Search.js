import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "../Videos/Videos";
import fetchVideos from "../../utils/API";
import { useParams } from "react-router-dom";

function Feed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  const getVideos = useCallback(async () => {
    try {
      const { items } = await fetchVideos(
        `search?part=snippet&q=${searchTerm}&maxResults=30`
      );
      setVideos(items);
    } catch (error) {
      console.error("Failed to fetch videos", error);
    }
  }, [searchTerm]);

  useEffect(() => {
    getVideos();
  }, [searchTerm, getVideos]);

  return (
    <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mt='10px'
        sx={{ color: "#fff", textAlign: { md: "start", xs: "center" } }}
        paddingLeft={2}
      >
        Search Results For:{' '}
        <span
          style={{
            color: "red",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          {searchTerm} Videos
        </span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}

export default Feed;
