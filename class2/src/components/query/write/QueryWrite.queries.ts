import {gql} from '@apollo/client';

export const CREATE_PROFILE = gql`
  mutation createProfile($name: String, $age: Int, $school: String) {
    createProfile(name: $name, age: $age, school: $school) {
      message
    }
  }
`;
