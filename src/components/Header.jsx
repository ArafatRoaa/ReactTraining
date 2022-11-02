import * as React from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { CustomizedStack } from "./StyledComponents"; 
import "../styles/HeaderStyles.css";
import { Button } from "@mui/material";

function Header() {
  return (
      <CustomizedStack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" className="resp">
        <h1 className="h1">Where in the world?</h1>
        <Button startIcon={<DarkModeIcon/>} sx={{ paddingY: 1, color: 'black', fontSize: 16, fontWeight: 600, textTransform: 'none' }}>Dark Mode</Button>
      </CustomizedStack>
  );
}

export default Header;
