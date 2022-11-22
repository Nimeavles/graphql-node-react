import gql from "gql-tag";

export const typeDef = gql`
  extend type Query {
    test(arg: Boolean!): Boolean!
  }
`;

export const resolver = {
  Query: {
    test: (root: any, args: any) => {
      console.log(!args.arg);
      return !args.arg
    }
  }
}