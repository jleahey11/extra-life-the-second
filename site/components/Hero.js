import React from 'react';
import {
  Box,
  Container,
  Typography
} from '@material-ui/core';

import DataCard from './DataCard';
import Header from './Header.v2';

const Hero = props => {

  const dataCardProps = {
    keyPrefix: 'hero-data',
    data: [
      {
        primaryText: '146',
        secondaryText: 'Days'
      },
      {
        primaryText: '3,504',
        secondaryText: 'Hours'
      },
      {
        primaryText: '210,240',
        secondaryText: 'Minutes'
      }
    ]
  };

  return (
    <Box>
      <Header />
      <Container maxWidth="sm" align='center'>
        <Typography variant="h4">WE PLAY GAMES TO HELP CHILDREN'S HOSPITALS IN THE UNITED STATES AND CANADA</Typography>
        <Typography variant="h5">NEXT STREAM STARTS IN</Typography>
        <DataCard {...dataCardProps}/>
        <Typography>$2,980 Raised of $25,000 goal</Typography>
      </Container>
    </Box>
  );
};

export default Hero;
