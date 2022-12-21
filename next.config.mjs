import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import { remarkCodeHike } from "@code-hike/mdx";
import theme from "shiki/themes/material-default.json" assert {type:'json'}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
    },
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, [remarkCodeHike, {
      theme,
      lineNumbers: true,
        showCopyButton: true,
    }]],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
