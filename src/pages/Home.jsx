import {
  Container,
  Stack,
  InputAdornment,
  Grid,
  MenuItem,
  Select,
  InputBase,
  Typography,
  FormControl,
} from "@mui/material";
import {
  CustomizedContainer,
  CustomizedInput,
  CustomizedSelect,
  CustomizedFavStack,
} from "../components/StyledComponents";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/HomeStyles.css";
import CountryCard from "../components/CountryCard";
import FavCard from "../components/FavCard";
import { useRef } from "react";

const filters = [
  {
    value: "Favourites",
  },
  {
    value: "Africa",
  },
  {
    value: "Americas",
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
  const [countries, setCountries] = useState([]);
  const [searched, setSearched] = useState([]);
  const [filteredCountries, setFiltered] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [filter, setFilter] = useState('');

  //used in useEffect to get all countries in the first render only
  const dataFetch = async () => {
    try {
      let response = await fetch("https://restcountries.com/v3.1/all");
      var data = await response.json();
    } catch (error) {
      console.log(error);
    }
    setCountries(data);
    setFiltered(data);
  };

  const filterCountries = (countries, region) => {
    if(region == 'None' || region == ''){
      setFiltered(countries);
    }
    else {
      setFiltered(countries.filter(
        (country) => country.region == region
      ));
    }
  }

  //used in useEffect to get the searched country every time the search value changes
  const searchFetch = async () => {
    try {
      let response = await fetch(
        "https://restcountries.com/v3.1/name/" + `${searchVal}`
      );
      var data = await response.json();
    } catch (error) {
      console.log(error);
    }
    filterCountries(data,filter);
};

  //handle the search input change
  const handleSearch = async (e) => {
    setSearchVal(e.target.value);
  };

  //handle the filter change
  const handleFilter = async (e) => {
    setFilter(e.target.value);
    filterCountries(filteredCountries, e.target.value);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  useEffect(() => {
    if (searchVal == "") dataFetch();
    else searchFetch(filter);
  }, [searchVal]);

  return (
    <>
      <Header />
      <CustomizedContainer maxWidth="xl">
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <CustomizedInput
              fullWidth
              placeholder="Search for a country.."
              onChange={handleSearch}
              value={searchVal}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={7} md={2}>
            <FormControl fullWidth>
            <CustomizedSelect value={filter} onChange={handleFilter} displayEmpty>
              <MenuItem disabled value=''>
                Filter By
              </MenuItem>
              {filters.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </CustomizedSelect>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container columnSpacing={8} sx={{ marginTop: "50px" }}>
          <Grid item md={3} sx={{ display: { xs: "none", md: "block" } }}>
            <CustomizedFavStack direction="column" container spacing={2}>
              <Typography
                gutterBottom
                variant="h5"
                fontWeight="bold"
                component="div"
              >
                Favourites
              </Typography>
              <FavCard />
              <FavCard />
              <FavCard />
            </CustomizedFavStack>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid
              container
              columnSpacing={10}
              rowSpacing={10}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              {filteredCountries.map((country) => (
                <Grid item xs={10} md={4} key={country.cca2}>
                  <CountryCard
                    cca2={country.cca2}
                    img={country.flags.svg}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </CustomizedContainer>
    </>
  );
}

export default Home;
