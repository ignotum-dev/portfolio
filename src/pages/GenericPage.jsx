import React from "react";
import { Link } from "react-router-dom";

const GenericPage = ({ title = "Page" }) => {
  return (
    <main className="min-h-screen bg-[#030708] text-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-6xl font-bold mb-4 text-white">{title}</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-[#5227FF] via-[#7b4dff] to-[#FF9FFC] rounded-full mb-6" />
        <p className="text-slate-300 mb-8">
          This is a placeholder page for <span className="text-white/90 font-medium">{title}</span>.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 hover:bg-white/10 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
};

export default GenericPage;
