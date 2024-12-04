import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
  mutation UpdateUser($firstName: String!, $fatherName: String, $grandfatherName: String, $familyName: String) {
    updateUser(firstName: $firstName, fatherName: $fatherName, grandfatherName: $grandfatherName, familyName: $familyName) {
      firstName
      fatherName
      grandfatherName
      familyName
    }
  }
`;
