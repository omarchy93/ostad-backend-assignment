"use client";
import { useState } from "react";

import Cookie from "js-cookie";
import Link from "next/link";

export default function Home() {
  const [preference, setPreference] = useState("");

  const handlePreferenceChange = (newPreference) => {
    setPreference(newPreference);
    Cookie.set("userPreference", newPreference);
  };

  return (
    <div className="pt-20 flex flex-col gap-3 justify-center">
      <h1 className="text-4xl text-center text-red-400">Cookies </h1>
      <div className="mx-auto">
        {" "}
        <button
          className="bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 px-6 py-3 mt-4 rounded-md "
          onClick={() => handlePreferenceChange("theme: dark")}
        >
          Set Dark Theme
        </button>
      </div>
      <div className="mx-auto">
        <button
          className="bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 px-6 py-3 mt-4 rounded-md"
          onClick={() => handlePreferenceChange("language: en")}
        >
          Set English Language
        </button>
      </div>
      <Link href={"/preferences"} className="mx-auto">
        <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 px-6 py-3 mt-4 rounded-md">
          View Cookies
        </button>
      </Link>
    </div>
  );
}
