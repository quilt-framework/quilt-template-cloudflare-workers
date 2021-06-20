# Quilt Cloudflare Workers Application Template

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button?paid=true)](https://deploy.workers.cloudflare.com/?url=https://github.com/quilt-framework/quilt-template-cloudflare-workers)

This repo is a template for creating a [Quilt application](./TODO) that runs on Cloudflare Workers. To get started, either click the Deploy button above, or install [Wrangler](https://github.com/cloudflare/wrangler) and initialize your project by running:

```bash
wrangler generate my-project https://github.com/quilt-framework/quilt-template-cloudflare-workers
```

In the project that you create, you’ll want to fill in `account_id` and `name` in your `wrangler.toml` file, and the `name` field in your `package.json`. This template also provides a `deploy` GitHub workflow that will automatically deploy to Cloudflare when you merge into the `main` branch. For this workflow to run, you’ll need to set the `CF_API_TOKEN` and `CF_ACCOUNT_ID` secrets in GitHub. See the documentation for the [Cloudflare GitHub action](https://github.com/marketplace/actions/deploy-to-cloudflare-workers-with-wrangler) for details on finding these values.

Once your project is initialized, navigate to the root of the project, and run `yarn install && yarn develop` to start working on your application. Have fun!
