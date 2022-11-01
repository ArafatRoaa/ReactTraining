import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import {
  CustomizedContainer,
  CustomizedBackButton,
} from "../components/StyledComponents";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Property from "../components/Property";
import Border from "../components/Border";
import { useHref } from "react-router-dom";

function Details() {
  return (
    <>
      <Header />
      <CustomizedContainer maxWidth='xl' sx={{ margin: 0 }}>
        <Grid container justifyContent="flex-start">
          <Grid item xs={5} md={2}>
            <CustomizedBackButton
              sx={{ width: "70%", paddingY: 1 }}
              startIcon={<ArrowBackIcon />}
              href='/home'
            >
              Back
            </CustomizedBackButton>
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: 7 }} justifyContent="space-between">
          <Grid item lg={6}>
            <img src="./src/assets/af.svg" alt="USA" height="400" width="80%" />
          </Grid>
          <Grid item lg={6} sx={{ paddingTop: 3 }}>
            <Typography variant="h4" fontWeight="bold">
              Belgium
            </Typography>
            <Stack
              direction="row"
              justifyContent='space-between'
              sx={{ marginTop: 4 }}
            >
              <Stack direction="column" container spacing={1}>
                <Property title='Native Name' sub='Belgie'/>
                <Property title='Population' sub='11,319,511'/>
                <Property title='Region' sub='Europe'/>
                <Property title='Sub Region' sub='Western Europe'/>
                <Property title='Capital' sub='Brussels'/>
              </Stack>
              <Stack direction="column" container spacing={1}>
                <Property title='Top Level Domain' sub='.be'/>
                <Property title='Currencies' sub='Euro'/>
                <Property title='Languages' sub='Dutch, French, German'/>
              </Stack>
            </Stack>
            <Stack direction='row' container spacing={2} sx={{ marginTop: 6 }}>
              <Typography variant="h6" fontWeight="700">
                Border Countries:
              </Typography>
              <Stack direction='row' container spacing={2} flexWrap='wrap'>
                <Border name='France'/>
                <Border name='Germany'/>
                <Border name='Netherlands'/>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </CustomizedContainer>
    </>
  );
}

export default Details;
