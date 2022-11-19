import { ApolloServer } from "@apollo/server"

const rootDefinition = `
  type Query {
    _: String
  }
`;

export const apolloServer = new ApolloServer({
  typeDefs: [rootDefinition],
  resolvers: {}
})
