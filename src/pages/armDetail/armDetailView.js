import React from 'react';
import {
  Grid,
  withStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
// import { CustomDataTable } from 'bento-components';
// import TableFooter from '@material-ui/core/TableFooter';
// import TableRow from '@material-ui/core/TableRow';
// import TablePagination from '@material-ui/core/TablePagination';
import StatsView from '../../components/Stats/StatsView';
import { Typography } from '../../components/Wrappers/Wrappers';
import icon from '../../assets/icons/Cases.Icon.svg';
import CustomBreadcrumb from '../../components/Breadcrumb/BreadcrumbView';
import {
  caseHeader,
  leftPanelSubsections,
  rightPanelSubsections,
  tableConfig,
} from '../../bento/armDetailData';


// Main case detail component
const CaseDetail = ({ data, classes }) => {
  const stat = {
    numberOfPrograms: 1,
    numberOfStudies: 1,
    numberOfSubjects: 1,
    numberOfSamples: data.num_samples,
    numberOfLabProcedures: data.num_lab_procedures,
    numberOfFiles: data[tableConfig.filesField].length,
  };

  const breadCrumbJson = [{
    name: 'ALL CASES /',
    to: '/cases',
    isALink: true,
  }];

  return (
    <>
      <StatsView data={stat} />
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.logo}>
            <img
              className={classes.caseIcon}
              src={icon}
              alt="Bento case detail header logo"
            />

          </div>
          <div className={classes.headerTitle}>
            <div className={classes.headerMainTitle}>
              {`${caseHeader.label} :`}
              { data[caseHeader.dataField]
                ? (
                  <span className={classes.headerMainTitleTwo}>
                    {' '}
                    {data[caseHeader.dataField]}
                  </span>
                )
                : (
                  <Typography variant="h5" color="error" size="sm">
                    {`"${caseHeader.dataField}" is not a valid property name`}
                  </Typography>
                )}
            </div>
            <div className={classes.breadCrumb}>
              {' '}
              <CustomBreadcrumb data={breadCrumbJson} />
            </div>
          </div>
        </div>

        <Grid container spacing={1} className={classes.detailContainer}>
          {/* Left panel */}
          <Grid item sm={6} xs={12} className={classes.detailPannel}>
            <div className={classes.innerPanel}>
              <Grid container spacing={2}>
                {leftPanelSubsections.map((section) => (
                  <Subsection
                    key={section.sectionHeader}
                    config={section}
                    classes={classes}
                    data={data}
                  />
                ))}
              </Grid>
            </div>
          </Grid>
          {/* Left panel end */}
          {/* Right panel */}
          <Grid item sm={6} xs={12} className={classes.detailPannel}>
            <div className={classes.innerPanel}>
              <Grid container spacing={2}>
                {rightPanelSubsections.map((section) => (
                  <Subsection
                    key={section.sectionHeader}
                    config={section}
                    classes={classes}
                    data={data}
                  />
                ))}
              </Grid>
            </div>
          </Grid>
          {/* Right panel end */}
        </Grid>
      </div>
    </>
  );
};

const styles = (theme) => ({
  container: {
    paddingTop: '38px',
    fontFamily: theme.custom.fontFamily,
    paddingLeft: '32px',
    paddingRight: '32px',
    background: '#FFFF',
  },
  content: {
    fontSize: '12px',
  },
  marginTop23: {
    marginTop: '24px',
  },
  warning: {
    color: theme.palette.warning.main,
  },
  paper: {
    textAlign: 'center',
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
  root: {
    fontFamily: theme.custom.fontFamily,
    fontSize: '9px',
    letterSpacing: '0.025em',
    color: '#000',
    background: '#f3f3f3',
  },
  header: {
    paddingRight: '32px',
    borderBottom: '#42779A 10px solid',
    height: '80px',
    maxWidth: theme.custom.maxContentWidth,
    margin: 'auto auto 10px auto',
  },
  caseIcon: {
    height: '94px',
  },
  headerTitle: {
    maxWidth: theme.custom.maxContentWidth,
    margin: 'auto',
    float: 'left',
    paddingLeft: '98px',
    width: 'calc(100% - 265px)',
  },
  headerMainTitle: {
    fontFamily: 'Lato',
    color: '#274FA5',
    fontSize: '26px',
    lineHeight: '24px',
    paddingLeft: '0px',
    paddingTop: '20px',
  },
  headerMainTitleTwo: {
    fontWeight: 'bold',
    letterSpacing: '0.025em',
  },
  headerSubTitleCate: {
    color: '#606061',
    fontWeight: 'bold',
    fontFamily: theme.custom.fontFamilyRaleway,
    textTransform: 'uppercase',
    letterSpacing: '0.023em',
    fontSize: '12px',
    maxHeight: '30px',
    overflow: 'hidden',
    paddingLeft: '3px',
  },
  headerSubTitleContent: {
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: theme.custom.fontFamilyRaleway,
    textTransform: 'uppercase',
    letterSpacing: '0.023em',
    fontSize: '12px',
    paddingLeft: '3px',
  },

  logo: {
    position: 'absolute',
    float: 'left',
    marginTop: '-6px',
    filter: 'drop-shadow( 2px 2px 2px rgba(0, 0, 0, 0.2))',
  },
  detailContainer: {
    maxWidth: theme.custom.maxContentWidth,
    margin: 'auto',
    padding: '26px 10px',
    fontFamily: theme.custom.fontFamily,
    letterSpacing: '0.014em',
    color: '#000000',
    size: '12px',
    lineHeight: '23px',
  },
  detailContainerHeader: {
    textTransform: 'uppercase',
    fontFamily: 'Lato',
    fontSize: '17px',
    letterSpacing: '0.025em',
    color: '#0296C9',
  },
  detailContainerBottom: {
    borderTop: '#81a6b9 1px solid',
    marginTop: '8px',
    padding: ' 35px 2px 63px 2px !important',
  },
  detailPannel: {
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
    borderRight: '1px solid #81A6BA',
  },
  innerPanel: {
    height: '100%',
    minHeight: '209px',
    maxHeight: '617px',
    overflowY: 'auto',
    overflowX: 'hidden',
    paddingLeft: '16px',
    scrollbarColor: '#697270',
  },
  subsectionBody: {
    borderBottom: '1px solid #8DCAFF',
    paddingBottom: '15px',
  },
  subsection: {
    '&:last-child $subsectionBody': {
      borderBottom: 'none',
    },
  },
  tableContainer: {
    background: '#f3f3f3',
  },
  tableHeader: {
    paddingLeft: '32px',
  },
  tableDiv: {
    maxWidth: theme.custom.maxContentWidth,
    margin: '0 auto auto auto',
    paddingTop: '50px',
  },
  headerButtonLink: {
    textDecoration: 'none',
  },
  button: {
    borderRadius: '10px',
    width: '178px',
    height: '27px',
    lineHeight: '18px',
    fontSize: '10px',
    color: '#ffffff',
    textTransform: 'uppercase',
    backgroundColor: '#ff8a00',
    fontFamily: theme.custom.fontFamilySans,
    '&:hover': {
      backgroundColor: '#ff8a00',
    },
  },
  detailContainerItems: {
    paddingTop: '5px',
    paddingLeft: '17px',
    paddingRight: '16px',
  },
  title: {
    color: '#9d9d9c',
    fontFamily: theme.custom.fontFamilySans,
    fontSize: '12px',
    lineHeight: '12px',
    letterSpacing: '0.017em',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  descriptionPart: {
    paddingBottom: '26px',
  },
  description: {
    fontWeight: 'bold',
  },
  tableTitle: {
    textTransform: 'uppercase',
    fontFamily: 'Lato',
    fontSize: '22px',
    letterSpacing: '0.025em',
    color: '#3695A9',
    paddingBottom: '19px',
  },
  breadCrumb: {
    paddingTop: '3px',
  },
  paddingTop: {
    paddingTop: '36px',
  },
  link: {
    color: '#DD401C',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:visited': {
      color: '#9F3D26',
    },
  },
  tableCell1: {
    paddingLeft: '25px',
    width: '440px',
  },
  tableCell2: {
    width: '260px',
  },
  tableCell3: {
    width: '220px',
  },
  tableCell4: {
    width: '200px',
  },
  tableCell5: {
    width: '110px',
  },
  tableCell6: {
    width: '110px',
  },
});

export default withStyles(styles, { withTheme: true })(CaseDetail);
