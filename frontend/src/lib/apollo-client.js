import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const BASE_URI = process.env.BASE_URI || 'https://prd-nutrition-api.herokuapp.com/graphql';

const httpLink = new HttpLink({
  uri: BASE_URI,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

export const CustomClient = () => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
