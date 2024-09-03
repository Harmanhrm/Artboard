"use client";
// as nextjs pages are server-side rendered by default
import Live from "@/components/Live";

export default function Page() {
  return (
      <div className="h-[100vh] w-full flex justify-center items-center text-center">
    
      <Live/>
      </div>
  );
}