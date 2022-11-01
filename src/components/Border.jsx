import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const CustomizedBorderTypography = styled(Typography)`
    box-shadow: 0px 2px 5px rgb(0 0 0 / 15%);
    border-radius: 5px;
    padding-left: 15px;
    padding-right: 15px;
    min-width: 80px;
`;

function Border(props) {
  return (
    <CustomizedBorderTypography variant='subtitle1' fontSize={20} fontWeight='500' textAlign='center'>
        {props.name}
    </CustomizedBorderTypography>
  )
}

export default Border;