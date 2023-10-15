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
    <main className="mt-[100px]">
      <div className="max-w-[335px]">
        <h1 className="text-pink font-bold text-4xl">Moon Portfolio</h1>
        <h4 className="text-yellow text-2xl	">
          Track and project your crypto wealth
        </h4>
        <button type="button" className="btn gray-333 w-full mb-4">
          Sign Up with Email
        </button>
        <button type="button" className="btn gray-555 w-full">
          Continue with Google
        </button>
      </div>
    </main>
  );
}
