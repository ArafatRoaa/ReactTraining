import { Stack, Typography } from "@mui/material";
import React from "react";

function Property(props) {
  return (
    <Stack direction="row" container="true" spacing={1}>
      <Typography variant="h3" fontSize={17} fontWeight={600}>
        {props.title}:
      </Typography>
      <Typography variant="h3" fontSize={17} fontWeight={500}>
        {props.sub}
      </Typography>
    </Stack>
  );
}

export default Property;
