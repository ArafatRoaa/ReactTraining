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
import FavDrop from "../components/FavDrop";

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
  const [filteredCountries, setFiltered] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [filter, setFilter] = useState("");
  const [favListHome, setFavListHome] = useState([]);

  // to get the favList from FavDrop
  function getFavList(childList) {
    setFavListHome(childList);
  }

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

  //used to get the searched country every time the search value changes
  const searchFetch = async (searchV) => {
    console.log(searchV);
    try {
      let response = await fetch(
        "https://restcountries.com/v3.1/name/" + `${searchV}`
      );
      var data = await response.json();
    } catch (error) {
      console.log(error);
    }
    setFiltered(data);
    return data;
  };

  const filtration = (countries, region) => {
    if (region == "None" || region == "") {
      setFiltered(countries);
    } else if (region == "Favourites") {
      setFiltered(favListHome);
      console.log(favListHome);
    } else {
      setFiltered(countries.filter((country) => country.region == region));
    }
  };

  const filterCountries = async (search, region) => {
    if ((search != "" && region == "") || (search != "" && region == "None")) {
      searchFetch(search);
    } else if (search == "" && region != "") {
      filtration(filteredCountries, region);
    } else if (
      (search == "" && region == "") ||
      (search == "" && region == "None")
    ) {
      filtration(countries, region);
    } else if (search != "" && region != "") {
      let countries = await searchFetch(search);
      filtration(countries, region);
    }
  };

  //handle the search input change
  const handleSearch = async (e) => {
    setSearchVal(e.target.value);
    filterCountries(e.target.value, filter);
  };

  //handle the filter change
  const handleFilter = async (e) => {
    setFilter(e.target.value);
    filterCountries(searchVal, e.target.value);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  useEffect(
    () => {
      if (searchVal == "" && filter == "") dataFetch();
      else filterCountries(searchVal, filter);
    },
    [searchVal],
    filter
  );

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
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={7} md={2}>
            <FormControl fullWidth>
              <CustomizedSelect
                value={filter}
                onChange={handleFilter}
                displayEmpty
              >
                <MenuItem disabled value="">
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
            <FavDrop setList={getFavList} />
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
                  {filter == "Favourites" ? (
                    <CountryCard
                      cca2={country.cca2}
                      img={country.img}
                      name={country.name}
                      population={country.population}
                      region={country.region}
                      capital={country.capital}
                    />
                  ) : (
                    <CountryCard
                      cca2={country.cca2}
                      img={country.flags.svg}
                      name={country.name.common}
                      population={country.population}
                      region={country.region}
                      capital={country.capital}
                    />
                  )}
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
