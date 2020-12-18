import gql from 'graphql-tag';

export const landingPageData = {
  title: 'Hello World !',
};

// --------------- GraphQL query - Retrieve Landing page data --------------
export const GET_LANDING_PAGE_DATA_QUERY = gql`{
  numberOfPrograms
  }
  `;
