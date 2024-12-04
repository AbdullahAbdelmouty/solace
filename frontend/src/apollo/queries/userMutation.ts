import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
  mutation UpdateUser($firstName: String!) {
    updateUser(firstName: $firstName) {
      firstName
      
    }
  }
`;
