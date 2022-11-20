import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

const CustomizedLink = styled(Link)`
  text-decoration: none;
`;

function CountryCard({cca2, img, name, population, region, capital}) {
  const [{isDragging}, drag] = useDrag(() => ({
    type: 'card',
    item: {cca2, img, name, population, region, capital},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <CustomizedLink to={'details/' + cca2}>
    <Card ref={drag} sx={{ height: 370, minWidth: 170, opacity: isDragging ? 0.5 : 1 }}>
      <CardActionArea sx={{ paddingBottom: 5 }}>
        <CardMedia
          component="img"
          height="170"
          src={img}
          alt={name}
        />
        <CardContent sx={{ paddingX: 4, paddingY: 3}}>
          <Typography
            gutterBottom
            variant="h6"
            fontWeight="bold"
            component="div"
            sx={{marginBottom:2, fontSize: 18.5}}
          >
            {name}
          </Typography>
          <Stack direction="column" container='true' spacing={0.5}>
            <Stack direction="row" container='true' spacing={0.5}>
              <Typography variant="subtitle2" fontWeight={600}>
                Population:
              </Typography>
              <Typography variant="subtitle2" fontWeight={300}>
                {population.toLocaleString()}
              </Typography>
            </Stack>
            <Stack container spacing={0.5} direction="row">
              <Typography variant="subtitle2" fontWeight={600}>
                Region:
              </Typography>
              <Typography variant="subtitle2" fontWeight={300}>
                {region}
              </Typography>
            </Stack>
            <Stack container spacing={0.5} direction="row">
              <Typography variant="subtitle2" fontWeight={600}>
                Capital:
              </Typography>
              <Typography variant="subtitle2" fontWeight={300}>
                {capital}
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
