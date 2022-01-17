import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: "10rem",
  border: "0px"
}));

export default function FooterCard() {
  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row'}}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>
          <p><b>Satya</b></p>
          <p>brata</p>
          <p>das</p>
          <p>dsdsf</p>
          <p>sfsdfsd</p>
          <p>sdfdsfdsfs</p>
        </Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}
