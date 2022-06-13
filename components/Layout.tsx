import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { NextUIProvider } from '@nextui-org/react';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <NextUIProvider> 
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        {/* <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}        
        |{' '} */}
        <Link href="/users/supabase">
          <a>Supabase</a>
        </Link>{' '}
        |{' '}
        <Link href="/users/forms">
          <a>Forms</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a href="/api/users">Users API</a>
        </Link>{' '}
        |{' '}
        <Link href="/event/125_DH_29_5_22">
          <a>Evento</a>
        </Link>{' '}
        |{' '}
        <a>Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </NextUIProvider>
)

export default Layout
