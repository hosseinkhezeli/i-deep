import * as React from "react";

import ThemeRegistry from "@/theme/components/ThemeRegistry/ThemeRegistry";
import DrawerAppBar from "./components/app-bar";



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
      <body>
        <ThemeRegistry>
          <DrawerAppBar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
