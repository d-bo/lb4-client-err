import {ApplicationConfig, PrjApplication} from './application';
import {config} from './config';

export * from './application';

// not secured (specially for self-signed certificates)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();

export async function main(options: ApplicationConfig = {}) {
  const app = new PrjApplication(options);
  await app.boot();
  await app.start();
  //await app.startWebSocket();

  const url = app.restServer.url;
  console.log(`Server is running at ${app.httpServer.url}/api`);

  return app;
}

if (require.main === module) {

  // Run the application
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
