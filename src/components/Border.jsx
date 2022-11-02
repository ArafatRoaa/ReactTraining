import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const CustomizedBorderTypography = styled(Typography)`
    box-shadow: 0px 2px 5px rgb(0 0 0 / 15%);
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    min-width: 80px;
`;

function Border(props) {
  return (
    <CustomizedBorderTypography variant='body1' fontSize={16} fontWeight='500' textAlign='center'>
        {props.name}
    </CustomizedBorderTypography>
  )
}

export default Border;