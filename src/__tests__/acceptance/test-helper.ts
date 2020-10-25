import {ApplicationConfig, PrjApplication} from '../../application';
export * from '../../application';
import {
  createRestAppClient,
  Client,
} from '@loopback/testlab';
import {config} from '../../config';

export async function setupApplication(): Promise<AppWithClient> {

  const app = new PrjApplication(config);

  await app.boot();
  await app.start();

  let client: any;
  try {
    client = createRestAppClient(app);
  } catch(e) {
    console.log("TEST CLIENT ERR", e);
  }

  console.log(`Test server is running at ${app.httpServer.url}/api`);

  return {app, client};
}

export interface AppWithClient {
  app: PrjApplication;
  client: Client;
}
