import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../../utils/constants";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card sx={{ width: { md: "330px", xs: "100%", justifyContent : 'center' } }}>
      <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          loading='lazy'
          decode='async'
          sx={{ width: 350, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" color="#fff" fontWeight="bold">
            {snippet?.title.slice(0, 40) || demoVideoTitle.slice(0, 40)}...
          </Typography>
        </Link>

        <Link
          to={
            snippet?.channelId
              ? `channel/${snippet?.channelId}`
              : demoChannelTitle
          }
        >
          <Typography variant="subtitle2" color="grey" fontWeight="bold">
            {snippet?.channelTitle || demoChannelTitle}
            
            <CheckCircle
              sx={{
                fontSize: 20,
                position: "relative",
                left: "12px",
                top: "2px",
                zIndex: 1,
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
