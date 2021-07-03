"use strict";
const DbService = require("moleculer-db");
const MongoAdapter = require("moleculer-db-adapter-mongo");
module.exports = {
	name: "products",
    mixins: [DbService],
    adapter: new MongoAdapter("mongodb+srv://mongoroot:rootmongo@cluster0.gzk6d.mongodb.net/kloudhub01?retryWrites=true&w=majority"),
    useUnifiedTopology: true,
    collection: "products"
};