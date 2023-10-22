import * as React from "react";

import ThemeRegistry from "@/theme/components/ThemeRegistry/ThemeRegistry";
import DrawerAppBar from "./components/DrawerAppBar";
import Footer from "./components/footer/Footer";
import StoreProvider from "@/context/store-provider";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { ReactNode } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";

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

  const t = createTranslator({locale, messages});

  return {
    title: t('LocaleLayout.title')
  };
}


export default async function LocalLayout({
  children,
  params: {locale}
}: Props) {

  const messages = await getMessages(locale);
  return (
    <html lang={locale} dir={locale==="fa"||locale==="ar"?"rtl":"ltr"}>
      <body style={{ overflowX: "hidden" }}>
        <StoreProvider>
          <ThemeRegistry>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ScrollToTopButton/>
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
