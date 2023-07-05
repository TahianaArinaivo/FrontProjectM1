import * as React from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
  children?: React.ReactNode;
}

export default function Title(props: TitleProps) {
  return (
    <Typography component="h2" sx={{fontSize:"17px",fontFamily: "'Work Sans', sans-serif"}} color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}