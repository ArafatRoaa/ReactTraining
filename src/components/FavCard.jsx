import { IconButton, Stack, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";

function FavCard({country, toDelete}) {

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="start"
        container
        spacing={1}
      >
        <img
          src={country.img}
          alt="USA"
          height="25"
          style={{ borderRadius: 12 }}
        />
        <Typography variant="h6" fontWeight="700" sx={{ fontSize: 13 }}>
          {country.name}
        </Typography>
      </Stack>
      <IconButton
        onClick={toDelete}
        size="small"
        sx={{ color: "black", backgroundColor: "#eeeeee" }}
      >
        <ClearIcon sx={{ fontSize: 12 }} />
      </IconButton>
    </Stack>
  );
}

export default FavCard;
