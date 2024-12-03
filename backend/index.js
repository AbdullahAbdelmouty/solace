const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true, // Enables GraphiQL UI for testing
  })
);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
