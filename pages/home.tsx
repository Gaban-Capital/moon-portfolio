"use client";

import { useEffect } from "react";
import Hotjar from "@hotjar/browser";

export default function Home() {
  useEffect(() => {
    const siteId = 3694573;
    const hotjarVersion = 6;

    Hotjar.init(siteId, hotjarVersion);
  }, []);

  return (
    <main className="mt-[100px] lg:max-w-[360px] max-w-[400px]">
      <div>
        <h1 className="logo-text lg:text-5xl text-4xl">Moon Portfolio</h1>
        <h4 className="text-yellow lg:text-2xl text-md">
          Track and project your crypto wealth
        </h4>
        <button
          type="button"
          className="btn gray-333 text-sm lg:text-lg w-full mb-4"
        >
          Sign Up with Email
        </button>
        <button
          type="button"
          className="btn gray-555 text-sm lg:text-lg w-full"
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}
