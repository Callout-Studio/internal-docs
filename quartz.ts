// The texts and links of this site. Everything else, the look, the components
// and how they are placed, is Callout-Studio/docs-theme's: theme/site.ts there.
// assemble.mjs copies that theme next to this file.

import { createSite } from "./theme/site"

const repository = "Callout-Studio/obsidian"

const site = await createSite({
  repository,
  branch: "master",
  ogImage: {
    heading: "How it works, and why.",
    text: "The internal docs of Callout Studio: its mechanisms, its data flow, and every place a change has to land.",
  },
  chapterCards: false,
  notFound: {
    siteName: "the internal docs",
    surprise: "https://www.youtube.com/watch?v=xMHJGd3wwZk",
  },
  rail: {
    title: "Contribute",
    links: [
      { text: "Contributing guide", href: `https://github.com/${repository}/blob/master/docs/CONTRIBUTING.md`, icon: "pullRequest" },
      { text: "Public API", href: `https://github.com/${repository}/blob/master/docs/API.md`, icon: "file" },
      { text: "Browse the source", href: `https://github.com/${repository}/tree/master/src`, icon: "code" },
    ],
  },
  hero: {
    eyebrow: "Callout Studio internal docs",
    title: "How it works,",
    titleAccent: "and why.",
    lead: "What happens underneath, and why the code looks the way it does. For anyone about to change it, or preparing a pull request.",
    primary: { text: "Start reading", href: "./01-overview" },
    secondary: { text: "View the source", href: "https://github.com/Callout-Studio/obsidian", icon: "github" },
    image: "core-loop.svg",
  },
  footer: {
    name: "Callout Studio",
    year: 2026,
    license: { text: "ISC license", href: `https://github.com/${repository}/blob/master/LICENSE` },
    links: [
      { text: "Privacy", href: "https://callout-studio.github.io/internal-docs/27-privacy-and-permissions" },
      { text: "Install", href: "https://community.obsidian.md/plugins/callout-studio", hideOnSmallPhone: true },
      { text: "User docs", href: "https://callout-studio.github.io/docs/", hideOnPhone: true },
    ],
  },
})

export default site.config
export const layout = site.layout
