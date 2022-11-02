import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Flag from '../assets/af.svg';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const CustomizedLink = styled(Link)`
  text-decoration: none;
`;

function CountryCard(props) {
  return (
    <CustomizedLink to='details'>
    <Card sx={{ height: 370, minWidth: 170 }}>
      <CardActionArea sx={{ paddingBottom: 5 }}>
        <CardMedia
          component="img"
          height="170"
          src={Flag}
          alt="Afghanistan"
        />
        <CardContent sx={{ paddingX: 4, paddingY: 3}}>
          <Typography
            gutterBottom
            variant="h6"
            fontWeight="bold"
            component="div"
            sx={{marginBottom:2, fontSize: 18.5}}
          >
            United States of America
          </Typography>
          <Stack direction="column" container='true' spacing={0.5}>
            <Stack direction="row" container='true' spacing={0.5}>
              <Typography variant="subtitle2" fontWeight={600}>
                Population:
              </Typography>
              <Typography variant="subtitle2" fontWeight={300}>
                123.456.432
              </Typography>
            </Stack>
            <Stack container spacing={0.5} direction="row">
              <Typography variant="subtitle2" fontWeight={600}>
                Region:
              </Typography>
              <Typography variant="subtitle2" fontWeight={300}>
                Europe
              </Typography>
            </Stack>
            <Stack container spacing={0.5} direction="row">
              <Typography variant="subtitle2" fontWeight={600}>
                Capital:
              </Typography>
              <Typography variant="subtitle2" fontWeight={300}>
                Afghanistan
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
    </CustomizedLink>
  );
}

export default CountryCard;
