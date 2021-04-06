import React from "react";
import { Nutrition } from "./containers/Nutrition";
import { ApolloProvider } from "@apollo/client";
import { CustomClient } from "./lib/apollo-client";
import AppContext from './context/context';
import useInitialState from "./hooks/useInitialState";

function App() {
  const initialState = useInitialState();
  console.log('init', initialState);
  return (
    <AppContext.Provider value={initialState}>
      <ApolloProvider client={CustomClient()}>
        <Nutrition />
      </ApolloProvider>
    </AppContext.Provider>
  );
}

export default App;
