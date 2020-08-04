import { join } from 'path';

import Koa from 'koa';
import koaStatic from 'koa-static';
import nunjucks from 'nunjucks';

const app = new Koa();

app.use(koaStatic(join(__dirname, '..', '..', 'public')));

const TEMPLATE = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Tortoise</title>
  </head>
  <body>
    <div id="root"></div>

    {% if prod %}
    <script src="/app.min.js"></script>
    {% else %}
    <script src="http://localhost:3001/app.js"></script>
    {% endif %}
  </body>
</html>
`;

app.use(ctx => {
  const prod = process.env.NODE_ENV === 'production';
  ctx.body = nunjucks.renderString(TEMPLATE, { prod });
});

app.listen(3000);
