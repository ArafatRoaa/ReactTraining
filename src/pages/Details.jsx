import { Button, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import {
  CustomizedContainer
} from "../components/StyledComponents";
import styled from 'styled-components';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Property from "../components/Property";
import Border from "../components/Border";
import Flag from '../assets/af.svg';

function Details() {
  return (
    <>
      <Header />
      <CustomizedContainer maxWidth='xl' sx={{ margin: 0 }}>
        <Grid container justifyContent="flex-start">
          <Grid item xs={5} md={2}>
            <Link href='/' underline="none">
            <Button
              sx={{ width: "70%", paddingY: 1, color: 'black', fontSize: 16, fontWeight: 600, textTransform: 'none', boxShadow: '0px 2px 5px rgb(0 0 0 / 15%)' }}
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: 7 }} justifyContent="space-between">
          <Grid item lg={6}>
            <img src={Flag} alt="USA" width='80%' style={{minWidth: 340}}/>
          </Grid>
          <Grid item lg={6} sx={{ paddingTop: 5}}>
            <Typography variant="h2" fontWeight="bold" fontSize={26}>
              Belgium
            </Typography>
            <Stack
              direction="row"
              justifyContent='space-between'
              flexWrap='wrap'
              sx={{ marginTop: 4 }}
            >
              <Stack direction="column" container spacing={1.5}>
                <Property title='Native Name' sub='Belgie'/>
                <Property title='Population' sub='11,319,511'/>
                <Property title='Region' sub='Europe'/>
                <Property title='Sub Region' sub='Western Europe'/>
                <Property title='Capital' sub='Brussels'/>
              </Stack>
              <Stack direction="column" container spacing={1.5} sx={{ marginTop: { xs: 5, lg: 0 }}}>
                <Property title='Top Level Domain' sub='.be'/>
                <Property title='Currencies' sub='Euro'/>
                <Property title='Languages' sub='Dutch, French, German'/>
              </Stack>
            </Stack>
            <Stack direction='row' container spacing={{xs: 0, sm: 2}} flexWrap='wrap' alignItems='center' sx={{ marginTop: 6 }}>
              <Typography variant="h3" fontWeight="600" fontSize={18}>
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
