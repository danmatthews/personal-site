import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-rose-500 dark:text-zinc-200 dark:hover:text-rose-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-rose-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Dan Matthews</title>
        <meta
          name="description"
          content="I’m Dan Matthews, I build web applications for a living using Laravel & PHP"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Dan Matthews, and oh boy... I really hate writing these about pages.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;ll try and write some stuff here without going on too much! TL;DR? ADHD Web Developer working in the nonprofit industry. Trying to do some good through code.
              </p>
              <p>
                I&apos;m a web developer and have been ever since I was given a book on CSS and HTML
                from a friend&apos;s dad nearly two decades ago now, I&apos;ve been
                fascinated with what you can do with code. I even turned down a place
                at university to do mechanical engineering to delve further into the tech world.
              </p>
              <p>
                I studied at the University of Cumbria on a course that promised a lot and delivered very little for someone with my aims.
                Everything i know about web development i sort of pride myself on having taught myself
                or learned through meeting and working with some incredible people over the years.
              </p>
              <p>
                I was hired straight out of university, and spent 5-6 years building websites in Drupal with some of the finest people i&apos;ve ever met.
              </p>
              <p>
                After that, I spent nearly six years running my own
                freelancing business - <a className="underline" href="https://blacklabsoftware.co.uk">Black Lab Software</a> -
                working with fantastic clients in the healthcare and recruitment sectors.
              </p>
              <p>Now? I&apos;m working at the fantastic <a className="underline" href="https://socialsync.io">Social Sync</a> with a brilliant
                team who are focused on building best-in-class tools for nonprofits
                to be able to run fundraising campaigns without paying extortionate amounts to
                fundraising companies.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/danmatthews" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://instagram.com/danmatthews" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/danmatthews" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/daniel-matthews-1871aaba/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:hello@danmatthews.me"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                hello@danmatthews.me
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
