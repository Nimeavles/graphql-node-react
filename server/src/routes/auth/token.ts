import gql from "gql-tag";

export const typeDef = gql`
  type Token {
    payload: String!
  }
`;