import * as React from "react";

import ThemeRegistry from "@/theme/components/ThemeRegistry/ThemeRegistry";
import DrawerAppBar from "./components/DrawerAppBar";
import Footer from "./components/footer/Footer";



export const metadata = {
  title: "iDeep",
  description: "iDeep is a company that provides AI services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{overflowX:"hidden"}}>
        <ThemeRegistry>
          <DrawerAppBar />
          {children}
          <Footer/>
        </ThemeRegistry>
      </body>
    </html>
  );
}
