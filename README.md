# Callout Studio Internal Docs

How [Callout Studio](https://github.com/Callout-Studio/obsidian), the Obsidian plugin, works inside, as a website:

**https://callout-studio.github.io/internal-docs/**

The pages are not kept here. They are written in the plugin's repository, in [`docs/internals-docs`](https://github.com/Callout-Studio/obsidian/tree/master/docs/internals-docs), and this repository only builds them with [Quartz](https://quartz.jzhao.xyz) 5. To fix or add a page, change it there. The site's look, components and build are shared with the user guide, in [Callout-Studio/docs-theme](https://github.com/Callout-Studio/docs-theme).

The plugin's user guide has a site of its own: [Callout Studio Docs](https://github.com/Callout-Studio/docs).

## How the site updates

1. A push to the plugin's `master` that changes `docs/internals-docs/` runs its [Internal docs site](https://github.com/Callout-Studio/obsidian/blob/master/.github/workflows/internal-docs-site.yml) workflow, which writes the new commit into [`source-commit.txt`](source-commit.txt) here. A push to docs-theme's `main` does the same with [`theme-commit.txt`](theme-commit.txt). Both push with a deploy key of this repository, which never expires.
2. That push runs [Build and deploy](.github/workflows/deploy.yml), whose steps are docs-theme's [`build-site.yml`](https://github.com/Callout-Studio/docs-theme/blob/main/.github/workflows/build-site.yml). It checks out the pages at the first commit and the theme at the second, builds the site with Quartz and publishes it on GitHub Pages.

To rebuild by hand, open **Actions → Build and deploy → Run workflow**. Leave both fields empty to build what the two files name, or write `master` (the pages) or `main` (the theme) for the newest.

## What is here

| File | What it does |
| --- | --- |
| [`quartz.ts`](quartz.ts) | The site's texts and links: the home page's top, the share picture's text, the links beside each page and in the footer. |
| [`site.json`](site.json) | Which folder to publish, where each docs site lives, the old addresses of renamed pages (`redirects`), which stay as redirects, and the site's own Quartz settings (`quartz`: its name and address). |
| [`theme/`](theme) | The picture only this site shows: the home page's. It goes over docs-theme's `theme/`. |
| [`source-commit.txt`](source-commit.txt) | The plugin commit the site is built from. |
| [`theme-commit.txt`](theme-commit.txt) | The docs-theme commit the site is built with. |

## Preview on your computer

See [docs-theme's README](https://github.com/Callout-Studio/docs-theme#preview-on-your-computer): clone it beside this repository and run `./dev.sh internal` there. Then open http://localhost:8081/internal-docs.
