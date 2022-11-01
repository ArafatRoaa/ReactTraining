import * as React from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { CustomizedStack, CustomizedButton } from "./StyledComponents"; 
import "../styles/HeaderStyles.css";

function Header() {
  return (
      <CustomizedStack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" className="resp">
        <h1 className="h1">Where in the world?</h1>
        <CustomizedButton startIcon={<DarkModeOutlinedIcon />} >Dark Mode</CustomizedButton>
      </CustomizedStack>
  );
}

export default Header;
