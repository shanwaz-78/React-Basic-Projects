import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "../Videos/Videos";
import fetchData from "../../utils/API";
import { Typography } from "@mui/material";
import Loader from "../Loader/Loader";

function ChannelDetails() {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserChannel = useCallback(async () => {
    try {
      setLoading(true);
      const channelResponse = await fetchData(
        `channels?part=snippet&id=${id}&maxResults=50`
      );
      setChannelDetails(channelResponse?.items[0]);

      const videosResponse = await fetchData(
        `search?channelId=${id}&part=snippet&order=date`
      );
      setVideos(videosResponse?.items);
    } catch (error) {
      console.error("Error fetching channel details:", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchUserChannel();
  }, [fetchUserChannel]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(133,136,173,1) 0%, rgba(208,3,134,1) 0%, rgba(8,37,140,1) 0%, rgba(0,212,255,1) 100%)",
            height: "200px",
            zIndex: 10,
          }}
        />

        {!loading && (
          <ChannelCard channelDetails={channelDetails} marginTop="-80px" />
        )}
      </Box>
      <Box display="flex" p="2px">
        <Box sx={{ mr: { sm: "100px" } }}>
          <Videos videos={videos} />
        </Box>
      </Box>

      {loading && (
        <Typography display="flex" justifyContent="center" alignItems="center">
          <Loader />
        </Typography>
      )}
    </Box>
  );
}

export default ChannelDetails;
