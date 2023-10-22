import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default createMiddleware({
  locales: ['en','fa'],
  defaultLocale: 'en'
});

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}