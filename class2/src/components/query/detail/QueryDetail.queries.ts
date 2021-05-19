import {gql} from '@apollo/client';

export const aaa = gql`
  query zzzzzzzzzzz($name: String) {
    fetchProfile(name: $name) {
      number
      name
      age
      school
    }
  }
`;
