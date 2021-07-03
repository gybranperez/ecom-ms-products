"use strict";
/**
* @method
* @desc Publica los metodos requieridos
* @since 0.2.3
* @version 1.0.0
* @param {integer} [productId] ID de Product
* @param {integer} serviceId ID de Servicio
* @param {integer} staffId ID de Staff
* @todo Add, etc
* @returns {Array} Locations
* @throws {LocationNotValidError} Se han encontrado etc
* @throws {LocationNotFoundError} analizar esto
* @throws {Error} Error general
*/
const ApiGateway = require("moleculer-web");
const SwaggerService = require("moleculer-web-swagger");
module.exports = {
	name: "api",
	mixins: [ApiGateway],
	settings: {
		port: process.env.PORT || 3602,
		// Global CORS settings for all routes
        cors: {
            // Configures the Access-Control-Allow-Origin CORS header.
            origin: "*",
            // Configures the Access-Control-Allow-Methods CORS header. 
            methods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
            // Configures the Access-Control-Allow-Headers CORS header.
            allowedHeaders: ["*"],
            // Configures the Access-Control-Expose-Headers CORS header.
            exposedHeaders: [],
            // Configures the Access-Control-Allow-Credentials CORS header.
            credentials: false,
            // Configures the Access-Control-Max-Age CORS header.
            maxAge: 3600
		},
		
		middleware: false,
    
		ip: "0.0.0.0",
		expose: true,
		swagger: {
		info: {
			description: "moleculer apigateway swagger",
			version: "1.0.0",
			title: "moleculer-apigateway",
			termsOfService: "",
			contact: {
			name: "phantomk",
			url: "https://github.com/jcphgyt",
			email: "jcphgy@gmail.com"
			},
			license: {
			name: "Apache 2.0",
			url: "https://www.apache.org/licenses/LICENSE-2.0.html"
			}
		},
		host: "127.0.0.1:3002",
		basePath: "/v1",
		tags: [{
			name: "products",
			description: "Everything about your Products",
			externalDocs: {
			description: "Find out more",
			url: "http://swagger.io"
			}
		}],
		schemes: [
			"http",
			"https"
		],
		consumes: [
			"application/json",
			"application/xml"
		],
		produces: [
			"application/xml",
			"application/json"
		],
		},
		routes: [{
			path: "/api",
			whitelist: [
				"*"
			],
			aliases: {
				"REST /products": "products"
			}
		},
		{
			path: "/",
			whitelist: ["*"],
			aliases: {
				"GET /": "main.hello"
			}
		}],
		assets: {
			folder: "public"
		}
	}
};
