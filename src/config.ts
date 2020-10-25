const port = process.env.PORT ?? 3000;
const host = process.env.HOST ?? '0.0.0.0';

export const config = {
  rest: {
    basePath: '/api',
    port,
    host,
    // i don't have certificate installed on localhost
    // put NODE_ENV=localdev to prevent https use
    protocol: process.env.NODE_ENV == 'localdev' ? 'http' : 'https',
    // The `gracePeriodForClose` provides a graceful close for http/https
    // servers with keep-alive clients. The default value is `Infinity`
    // (don't force-close). If you want to immediately destroy all sockets
    // upon stop, set its value to `0`.
    // See https://www.npmjs.com/package/stoppable
    gracePeriodForClose: 5000, // 5 seconds
    openApiSpec: {
      // useful when used with OpenAPI-to-GraphQL to locate your application
      setServersFromRequest: true,
    },
    cors: {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204
    },
    requestBodyParser: {json: {limit: '10mb'}}
  },
  websocket: { port }
};