import React from 'react';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';

import { useDefaultStyles } from '../styles';

const DataCard = props => {
  const classes = useDefaultStyles();

  let { data, keyPrefix } = props;
  let gridSize = Math.floor(12 / data.length);

  let items = data.map((item, i) => (
    <Grid className={classes.dataGridItem} item key={`${keyPrefix}-${i}`} xs={gridSize}>
      <Container>
        <Typography align='center'>{item.primaryText}</Typography>
        <Typography align='center'>{item.secondaryText}</Typography>
      </Container>
    </Grid>
  ));

  return (
    <Grid
      alignItems="center"
      alignContent="center"
      container
      justify="center"
      className={classes.hollowComponent}>
      {items}
    </Grid>
  )  
};

export default DataCard;
