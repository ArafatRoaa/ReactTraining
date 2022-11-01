import {
  Container,
  Stack,
  InputAdornment,
  Grid,
  MenuItem,
  Select,
  InputBase,
  Typography,
} from "@mui/material";
import { CustomizedContainer, CustomizedInput, CustomizedSelect, CustomizedFavStack } from "../components/StyledComponents";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import Header from "../components/Header";
import "../styles/HomeStyles.css";
import CountryCard from "../components/CountryCard";
import FavCard from "../components/FavCard";

const filters = [
  {
    value: "Favourites",
  },
  {
    value: "Africa",
  },
  {
    value: "America",
  },
  {
    value: "Asia",
  },
  {
    value: "Europe",
  },
  {
    value: "Oceania",
  },
  {
    value: "None",
  },
];

function Home() {
  return (
    <>
      <Header />
      <CustomizedContainer maxWidth="xl">
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <CustomizedInput
              fullWidth
              placeholder="Search for a country.."
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={7} md={2}>
            <CustomizedSelect fullWidth defaultValue="">
              <MenuItem disabled value="">
                Filter By
              </MenuItem>
              {filters.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </CustomizedSelect>
          </Grid>
        </Grid>
        <Grid container columnSpacing={8} sx={{ marginTop: "50px" }}>
          <Grid item md={3} sx={{display: { xs: 'none', md: 'block' }}}>
            <CustomizedFavStack direction='column' container spacing={2}>
              <Typography gutterBottom variant="h5" fontWeight='bold' component="div">
                Favourites
              </Typography>
              <FavCard/>
              <FavCard/>
              <FavCard/>
            </CustomizedFavStack>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container columnSpacing={10} rowSpacing={10} justifyContent={{xs: "center", md: "flex-start"}}>
              <Grid item xs={10} md={4}>
                <CountryCard />
              </Grid>
              <Grid item xs={10} md={4}>
                <CountryCard />
              </Grid>
              <Grid item xs={10} md={4}>
                <CountryCard />
              </Grid>
              <Grid item xs={10} md={4}>
                <CountryCard />
              </Grid>
              <Grid item xs={10} md={4}>
                <CountryCard />
              </Grid>
              <Grid item xs={10} md={4}>
                <CountryCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CustomizedContainer>
    </>
  );
}

export default Home;
