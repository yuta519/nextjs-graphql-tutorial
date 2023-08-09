import { NextResponse } from "next/server";

import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";

// export async function GET(request: Request) {
//   // return NextResponse.json({ title: "hello GraphQL!" });
//   return new NextResponse(JSON.stringify({ title: "hello GraphQL!" }));
// }

const resolvers = {
  Query: {
    hello: () => "world",
  },
};

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export async function GET(request: Request) {
  return handler(request);
}

export async function POST(request: Request) {
  return handler(request);
}
