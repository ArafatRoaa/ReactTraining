import { Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  CustomizedContainer
} from "../components/StyledComponents";
import styled from 'styled-components';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Property from "../components/Property";
import Border from "../components/Border";
import { Link, useParams } from "react-router-dom";

const CustomizedLink = styled(Link)`
  text-decoration: none;
`;

function Details() {
  const params = useParams();
  const cca2 = params.cca2;
  const [country, setCountry] = useState({});
  const [nativeName, setNativeName] = useState('');
  const [languages, setLanguages] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [borders, setBorders] = useState([]);
  var borderList = [];

  useEffect(() => {
    async function getData() {
      let countryArr, response;
      let url = "https://restcountries.com/v3.1/alpha/" + `${cca2}`;
      try {
        response = await fetch(url);
        countryArr = await response.json();
        setCountry(countryArr[0]);
        setNativeName(Object.values(countryArr[0].name.nativeName)[0].common);
        setLanguages(Object.values(countryArr[0].languages).join(", "));
        setCurrencies(Object.values(countryArr[0].currencies).map(cur => cur.name).join(", "));
        countryArr[0].borders?.forEach(cca3 => {
          getBorder(cca3);
        });
      } catch (error) {
      console.log(error);
      }
    }

    async function getBorder(cca3){
      let countryArr, response;
      let url = "https://restcountries.com/v3.1/alpha/" + `${cca3}`;
      try {
        response = await fetch(url);
        countryArr = await response.json();
        setBorders(oldArray => [...oldArray, countryArr[0].name.common]);
      } catch (error) {
      console.log(error);
      }
    }

    getData();

  }, []);


  borders.forEach(border => {
    if(!borderList.includes(border)){
      borderList.push(border);
    }});

  console.log(borderList);
  console.log(country);

  return (
    <>
      <Header />
      <CustomizedContainer maxWidth='xl' sx={{ margin: 0 }}>
        <Grid container justifyContent="flex-start">
          <Grid item xs={5} md={2}>
            <CustomizedLink to='/'>
            <Button
              sx={{ width: "70%", paddingY: 1, color: 'black', fontSize: 16, fontWeight: 600, textTransform: 'none', boxShadow: '0px 2px 5px rgb(0 0 0 / 15%)' }}
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
            </CustomizedLink>
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: 7 }} justifyContent="space-between">
          <Grid item lg={6}>
            <img src={country.flags?.svg} alt={country.name?.common} width='80%' height='380' style={{minWidth: 340}}/>
          </Grid>
          <Grid item lg={6} sx={{ paddingTop: 5}}>
            <Typography variant="h2" fontWeight="bold" fontSize={26}>
              {country.name?.official}
            </Typography>
            <Stack
              direction="row"
              justifyContent='space-between'
              flexWrap='wrap'
              sx={{ marginTop: 4 }}
            >
              <Stack direction="column" container spacing={1.5}>
                <Property title='Native Name' sub={nativeName}/>
                <Property title='Population' sub={country.population?.toLocaleString()}/>
                <Property title='Region' sub={country.region}/>
                <Property title='Sub Region' sub={country.subregion}/>
                <Property title='Capital' sub={country.capital}/>
              </Stack>
              <Stack direction="column" container spacing={1.5} sx={{ marginTop: { xs: 5, lg: 0 }}}>
                <Property title='Top Level Domain' sub={country.tld}/>
                <Property title='Currencies' sub={currencies}/>
                <Property title='Languages' sub={languages}/>
              </Stack>
            </Stack>
            { borders.length > 0 && 
            <Stack direction='row' container rowGap={1} columnGap={1} flexWrap='wrap' alignItems='center' sx={{ marginTop: 6 }}>
            <Typography variant="h3" fontWeight="600" fontSize={18}>
              Border Countries:
            </Typography>
            <Stack direction='row' container rowGap={1.5} columnGap={2} flexWrap='wrap'>
              {borderList.map((border) => <Border name={border}/>)}
            </Stack>
          </Stack>
            }
          </Grid>
        </Grid>
      </CustomizedContainer>
    </>
  );
}

export default Details;
