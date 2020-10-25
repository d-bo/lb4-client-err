import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';
import { WebsocketApplication } from "./websockets/websocket.application";
import { WebsocketControllerBooter } from "./websockets/websocket.booter";

export {ApplicationConfig};

export class PrjApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(WebsocketApplication)),
) {

  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // disable info page and swagger
    if (process.env.NODE_ENV !== 'production') {
      // Set up default home page
      this.static('/', path.join(__dirname, '../public'));

      // Customize @loopback/rest-explorer configuration here
      this.configure(RestExplorerBindings.COMPONENT).to({
        path: '/explorer',
      });
      this.component(RestExplorerComponent);
    }

    this.booters(WebsocketControllerBooter);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
      websocketControllers: {
        dirs: ['controllers'],
        extensions: ['.controller.ws.js'],
        nested: true,
      },
    };
  }

  startWebSocket() {
    return this.wsServer.start();
  }

  stopWebSocket() {
    return this.wsServer.stop();
  }

}
