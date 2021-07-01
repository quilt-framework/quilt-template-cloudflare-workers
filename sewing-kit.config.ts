import {createApp, quiltApp, quiltWorkspace} from '@quilted/craft';
import {cloudflareWorkers} from '@quilted/cloudflare/sewing-kit';

export default createApp((app) => {
  app.entry('./app');
  app.use(quiltWorkspace(), quiltApp(), cloudflareWorkers());
});
