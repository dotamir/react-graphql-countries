import { ApolloClient } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { apiUrl } from "./config/constants";

const httpLink = new createHttpLink({ uri: `${apiUrl}` });

// set custom headers if any
const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers
        }
    };
});

const defaultOptions = {
    watchQuery: {
        fetchPolicy: "network-only",
        errorPolicy: "ignore"
    },
    query: {
        fetchPolicy: "network-only",
        errorPolicy: "all"
    }
};

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions
});

export default client;
