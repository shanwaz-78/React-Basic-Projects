import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "../Channel/ChannelCard";

function Videos({ videos, direction }) {
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
      mt="8px"
      style={{ flexDirection: { md: "10px", sm: "320px", xs: "100px" } }}
    >
      {videos.map((item, index) => (
        <Box key={index} paddingTop={2}>
          {item.id.videoId ? (
            <VideoCard video={item} />
          ) : item.id.channelId ? (
            <ChannelCard channelDetails={item} />
          ) : null}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
