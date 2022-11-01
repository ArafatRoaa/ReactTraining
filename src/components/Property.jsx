import { Stack, Typography } from "@mui/material";
import React from "react";

function Property(props) {
  return (
    <Stack direction="row" container="true" spacing={1} alignItems="center">
      <Typography variant="h6" fontSize={19} fontWeight={700}>
        {props.title}:
      </Typography>
      <Typography variant="h6" fontSize={19} fontWeight={600}>
        {props.sub}
      </Typography>
    </Stack>
  );
}

export default Property;
