import styled from "styled-components";
import { Container, Stack, Select, InputBase, Typography, Button } from "@mui/material";

export const CustomizedStack = styled(Stack)`
  box-shadow: 0px 2px 5px rgb(0 0 0 / 15%);
  margin: 0px;
  padding-top: 7px;
  padding-bottom: 7px;
  background-color: white;
`;

export const CustomizedButton = styled(Button)`
  font-size: 16px;
  font-weight: 600;
  color: black;
  text-transform: none;
`;

export const CustomizedBackButton = styled(Button)`
    color: black;
    box-shadow: 0px 2px 5px rgb(0 0 0 / 15%);
    border-radius: 5px;
`;

export const CustomizedInput = styled(InputBase)`
  height: 50px;
  border: none;
  box-shadow: 0px 2px 5px rgb(0 0 0 / 15%);
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 600;
  border-radius: 5px;
  background-color: white;
`;

export const CustomizedSelect = styled(Select)`
  & .MuiOutlinedInput-notchedOutline {
    border: 0;
  }
  height: 50px;
  box-shadow: 0px 2px 5px rgb(0 0 0 / 15%);
  border-radius: 5px;
  background-color: white;
`;

export const CustomizedContainer = styled(Container)`
  padding-top: 50px;
  padding-bottom: 20px;
`;

export const CustomizedFavStack = styled(Stack)`
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgb(0 0 0 / 15%);
  background-color: "beige";
  height: 780px;
  padding: 20px;
  overflow: auto;
`;
