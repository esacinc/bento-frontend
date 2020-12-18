import React from 'react';
import {
  withStyles,
} from '@material-ui/core';
import { landingPageData } from '../../bento/landingPageData';

const LandingView = ({ classes, statsData }) => (
  <div className={classes.page}>
    {landingPageData.title}
    {statsData.numberOfPrograms}
  </div>
);
const styles = () => ({
  page: {
    margin: '0px',
  },
});
export default withStyles(styles, { withTheme: true })(LandingView);
