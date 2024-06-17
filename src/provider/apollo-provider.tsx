"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const ApolloProviders = ({ children }) => {
  const client = new ApolloClient({
    uri: " http://localhost:8080/api/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </>
  );
};

export default ApolloProviders;
