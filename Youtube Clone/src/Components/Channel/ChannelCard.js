import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoChannelUrl, demoProfilePicture } from "../../utils/constants";

function ChannelCard({ channelDetails, marginTop }) {
  const { snippet } = channelDetails;

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "350px", md: "320px" },
        height : '320px',
        margin : 'auto',
        marginTop : marginTop
      }}
    >
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl
        }
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            component="img"
            image={snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={snippet?.title}
            loading="lazy"
            decode='async'
            sx={{
              borderRadius: "50%",
              width: "180px",
              height: "180px",
              ml: "10px",
            }}
          />
          <Typography variant="h6" mt="10px" ml="10px" display="flex">
            {snippet?.title}

            <CheckCircle
              sx={{
                ml: "5px",
                mt: "5px",
                fontSize: 20,
              }}
            />
          </Typography>

          {channelDetails?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetails?.statistics?.subscriberCount
              ).toLocaleString()} Subscriber
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
