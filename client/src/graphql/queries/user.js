import gql from 'graphql-tag';

export const GET_AUTHED_USER = gql`
  query me {
    me {
      _id
      email
      username
      screenName
    }
  }
`;

export const GET_USER = '';

export const GET_USERS = '';
