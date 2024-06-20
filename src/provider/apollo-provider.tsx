"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import BackEndUrl from "@/_backEndUrl";

interface Props extends React.PropsWithChildren {}

const ApolloProviders = ({ children }: Props) => {
  const client = new ApolloClient({
    uri: `${BackEndUrl}/api/graphql`,
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </>
  );
};

export default ApolloProviders;
