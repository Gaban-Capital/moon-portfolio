"use client";

import { FC, useEffect } from "react";
import Home from "@/pages/home";
import Hotjar from "@hotjar/browser";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  useEffect(() => {
    const siteId = 3694573;
    const hotjarVersion = 6;

    Hotjar.init(siteId, hotjarVersion);
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-10">
      {/* //? Welcome Component */}
      <Home />
    </main>
  );
};

export default Page;
