import {createApp, quiltApp, quiltWorkspace} from '@quilted/craft';
import {cloudflareWorkers} from '@quilted/cloudflare/sewing-kit';

export default createApp((app) => {
  app.entry('./app/App');
  app.use(quiltWorkspace(), quiltApp(), cloudflareWorkers());
});
