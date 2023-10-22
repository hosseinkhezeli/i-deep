import * as React from "react";

import ThemeRegistry from "@/theme/components/ThemeRegistry/ThemeRegistry";
import DrawerAppBar from "./components/DrawerAppBar";
import Footer from "./components/footer/Footer";
import StoreProvider from "@/context/store-provider";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: {locale: string};
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ['en', 'fa'].map((locale) => ({locale}));
}

export async function generateMetadata({params: {locale}}: Props) {
  const messages = await getMessages(locale);

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({locale, messages});

  return {
    title: t('LocaleLayout.title')
  };
}



// export const metadata = {
//   title: "iDeep",
//   description: "iDeep is a company that provides AI services",
// };

export default async function LocalLayout({
  children,
  params: {locale}
}: Props) {

  const messages = await getMessages(locale);
  console.log(locale)
  return (
    <html lang={locale}>
      <body style={{ overflowX: "hidden" }}>
        <StoreProvider>
          <ThemeRegistry>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <DrawerAppBar />
            {children}
            <Footer />
            </NextIntlClientProvider>
          </ThemeRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
