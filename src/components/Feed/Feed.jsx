import React from "react";
import { Box } from "@mui/material";
import Posts from "../Posts/Posts";

function Feed() {
  return (
    <Box flex={4} p={2}>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </Box>
  );
}

export default Feed;
