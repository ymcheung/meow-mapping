# Meow Mapping

## Cat Spotting Guides

https://mapping.meow.ymcheung.tw

## Cloudflare Workers

Build with `pnpm build`, preview locally with `pnpm preview`, and deploy with
`pnpm exec wrangler deploy`. The Worker is named `meow-mapping` and serves the custom
domain `mapping.meow.ymcheung.tw`, configured in `wrangler.jsonc`. The Astro adapter
generates the deployment configuration during the build. Pages and images are
prerendered at build time.
