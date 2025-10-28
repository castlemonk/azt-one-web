
# Development · azt-one-web

This repo hosts the **azt.one** root site and the **AZT Foundation** section at `/foundation/`. It targets GitHub Pages + a custom domain.

## Public vs Private repo — which to choose?

- **Public repo**: Anyone can view the code. Good for transparency and community contributions.
- **Private repo**: Code stays private, **but the published Pages site is public** once enabled. This works fine if you prefer to keep source closed while sharing the live site.

Either works because GitHub Pages serves the **built static files** publicly, independent of repo visibility.

## Two index pages

- `index.html` → serves **https://azt.one/**
- `foundation/index.html` → serves **https://azt.one/foundation/**

We include a **host-based redirect** in `assets/js/main.js`: when a visitor uses the hostname `foundation.azt.one`, the script redirects them to `/foundation/`.

## Custom domain setup

1. **GitHub Pages**: enable Pages (deploy from `main`, root). Add a `CNAME` file with `azt.one`.
2. **DNS**:
   - Apex `azt.one` → **A** (or ALIAS/ANAME) to GitHub Pages IPs (see GitHub Docs for current list).
   - Subdomain `foundation.azt.one` → **CNAME** to `<username>.github.io`.

> If you want strict HTTPS and a true HTTP 301 redirect at the subdomain, either:
> - Create a tiny second repo with custom domain `foundation.azt.one` that redirects to `https://azt.one/foundation/`, or
> - Use Cloudflare proxy with a Page Rule / Transform Rule (host = `foundation.azt.one` → 301 to `/foundation/`).

## Local dev

```
python3 -m http.server 8080
# or
npx http-server -p 8080
```

## Optional CI & Deploy

Add `.github/workflows/deploy.yml` to auto-deploy to Pages on push, and `ci.yml` to run HTML/link checks on PRs.

