import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#1a1a2e] p-6 shadow-xl border-r border-[#31314e] hidden md:block sticky top-0 h-screen">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-violet-400 tracking-wide">🎨 DesignEase</h1>
        <p className="text-sm text-gray-400 mt-1">UI Generator</p>
      </div>
      <nav className="space-y-4">
        <a href="#" className="block py-2 px-3 rounded-md bg-[#282846] hover:bg-violet-600 transition">Button</a>
        <a href="#" className="block py-2 px-3 rounded-md bg-[#282846] hover:bg-violet-600 transition">Modal</a>
        <a href="#" className="block py-2 px-3 rounded-md bg-[#282846] hover:bg-violet-600 transition">Card</a>
      </nav>
    </aside>
  );
}
