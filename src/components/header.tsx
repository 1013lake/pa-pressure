"use client";
import React from "react";

export default function Header() {
  return (
    <>
      {/* Solid Bar to Push Content Down */}
      <div className="h-24 bg-black"></div> {/* Height of the navbar */}
      <header className="fixed inset-x-0 top-0 z-50 bg-black shadow-lg">
        {/* The actual solid black bar that bumps everything down */}
        <div className="h-24 bg-black"></div>
      </header>
    </>
  );
}

export function MainContent() {
  return (
    <div className="pt-24">
      {/* This padding ensures content doesn't overlap with navbar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Welcome to Port Pressure
        </h1>
        {/* Add more content as needed */}
      </div>
    </div>
  );
}
