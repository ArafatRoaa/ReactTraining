import { Typography } from '@mui/material';
import React, { useState } from 'react';
import FavCard from './FavCard';
import { CustomizedFavStack } from './StyledComponents';
import { useDrop } from 'react-dnd';
import { useEffect } from 'react';

function FavDrop({setList}) {
    const [cards, setCards] = useState([]);
    const [favList, setFavList] = useState([]);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'card',
        drop: (item) => {
            if(!favList.includes(item)) {
                addFav(item);
            }
        },
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      }));

    function deleteFav(country){
      let newList = [];
      newList = JSON.parse(localStorage.getItem('favourites'));
      const theCountry = (element) => element.cca2 == country.cca2;
      newList.splice(newList.findIndex(theCountry), 1);
      setFavList(newList);
      localStorage.setItem('favourites', JSON.stringify(newList));
    }
    
    function addFav(country){
      let newList = favList;
      newList.push(country);
      setFavList(newList);
      localStorage.setItem('favourites', JSON.stringify(newList));
    }
    
  useEffect(() => {
      let storedFavourites = JSON.parse(localStorage.getItem('favourites'));
      if (!storedFavourites) {
          localStorage.setItem('favourites', JSON.stringify([]));
      } else {
          setFavList(storedFavourites);
      }
  }, []);

  useEffect(() => {
      let cardList = [];
      favList.forEach(element => {
          cardList.push(<FavCard country={element} toDelete={() => {deleteFav(element)}}/>)
      })
      setCards(cardList);
      giveFavList();
  }, [favList]);

  function giveFavList(){
    setList(favList)
  };

  return (
    <CustomizedFavStack ref={drop} direction="column" container spacing={2} sx={{ border: isOver ? .5 : 'none'}}>
        <Typography
            gutterBottom
            variant="h5"
            fontWeight="bold"
            component="div">
                Favourites </Typography>
        {cards}
    </CustomizedFavStack>
  )
}

export default FavDrop;