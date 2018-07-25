// Setup a GraphQL subscription observable
const { WebSocketLink } = require('apollo-link-ws');
const { execute } = require('apollo-link');
const { SubscriptionClient } = require('subscriptions-transport-ws');
const ws = require('ws');

const getWsClient = function(wsurl) {
  const client = new SubscriptionClient(
    wsurl, {reconnect: true}, ws
  );
  return client;
};

const createSubscriptionObservable = (wsurl, query, variables) => {
		const link = new WebSocketLink(this.client);
    return execute(link, {query: this.query, variables: variables});
  }
};


// Usage example
