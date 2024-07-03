import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { useParams, Link } from "react-router-dom";
import fetchData from "../../utils/API";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";

function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const { items } = await fetchData(
        `videos?part=snippet,statistics&id=${id}`
      );
      setVideoDetail(items[0]);
    };

    const fetchRelatedVideos = async () => {
      const { items } = await fetchData(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      );
      setVideos(items);
    };

    fetchVideo();
    fetchRelatedVideos();
  }, [id]);

  if (!videoDetail?.snippet) return `Loading....`;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1} ml={2} mt={2}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
          </Box>
          <Typography color="#fff" variant="h5" fontWeight="bold" mt={2}>
            {title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ color: "#fff" }}
            py={1}
            px={2}
          >
            <Link to={`/channel/${channelId}`} color="#fff">
              <Typography
                variant={{ sm: "subtitle2", md: "h3" }}
                style={{ color: "#fff", fontSize: "19px" }}
              >
                {channelTitle}
                <CheckCircle sx={{ fontSize: "16px", ml: "7px" }} />
              </Typography>
            </Link>
            <Stack direction="row" gap={2} >
              <Typography variant="bod1" sx={{ opacity: 0.7 }}>
                {parseInt(viewCount).toLocaleString()} Views
              </Typography>
              <Typography variant="bod1" sx={{ opacity: 0.7 }}>
                {parseInt(likeCount).toLocaleString()} Likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
