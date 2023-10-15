// ? User routes layout template
"use client";
import { FC, ReactNode } from "react";
import { MOON_PORTFOLIO } from "@/constants/copy";

interface layoutProps {
  children: ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <div className="lg:max-w-[360px] max-w-[400px]">
        <div>
          <h1 className="logo-text lg:text-5xl text-4xl">{MOON_PORTFOLIO}</h1>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;