import 'reflect-metadata';
import { Container } from 'typedi';
import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import koaQs from 'koa-qs';
import { useKoaServer, useContainer as rcUseContainer } from 'routing-controllers';


  const app = new Koa();
  const port = 3001 || process.env.PORT;

  app.use(cors());

  app.use(bodyParser());

  // Override get/set request query methods
  koaQs(app, 'extended');

  // For injecting services into your controller, middleware and error handler
  rcUseContainer(Container);

   useKoaServer(app, {
    controllers: [`${__dirname}/controllers/**/**.controller{.js,.ts}`],
  })
  .listen(port, () => console.log(`Listening on http://localhost:${port}`));
