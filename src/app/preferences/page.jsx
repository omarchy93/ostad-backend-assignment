"use client";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";

export default function Preferences() {
  const [userPreference, setUserPreference] = useState("");

  useEffect(() => {
    const preference = Cookie.get("userPreference");
    setUserPreference(preference);
  }, []);

  return (
    <div className="mt-10">
      <h1 className="text-4xl text-center text-red-400">Show Cookies</h1>
      {userPreference ? (
        <p className="text-4xl text-center text-green-400 mt-5">
          Preference: {userPreference}
        </p>
      ) : (
        <p className="text-4xl text-center text-red-400 mt-5">
          No preference set
        </p>
      )}
    </div>
  );
}
