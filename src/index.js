import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-boost";

import { store, persistor } from "./redux/store";

import { resolvers, typeDefs } from './graphql/resolvers'
import "./index.css";
import App from "./App";


const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://crwn-clothing.com',
  cache,
  typeDefs,
  resolvers
});

client.writeData({
  data: {
    cartHidden: true,
    cartItems: [],
    itemCount: 0
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
