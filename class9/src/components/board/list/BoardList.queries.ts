import {gql} from '@apollo/client';

export const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
      createdAt
    }
  }
`;
