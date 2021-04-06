require("dotenv").config();
const { makeExecutableSchema } = require("graphql-tools");
const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { readFileSync } = require("fs");
const { join } = require("path");
const resolver = require("./lib/resolver");

const app = express();
const port = process.env.PORT || 3000;

// Initial Schema
const typeDefs = readFileSync(
  join(__dirname, "lib", "schema.graphql"),
  "utf-8"
);

const schema = makeExecutableSchema({ typeDefs, resolver });

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true
  })
);

app.use("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    version: "1.0.0"
  })
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/graphql`);
});
