// 🌌 Dark-Themed DashboardLayout.jsx avec animation et design moderne
export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#1f1f47] to-[#090920] text-white">
      <aside className="w-64 bg-[#12122e] border-r border-[#2c2c5a] p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-8 text-purple-400 tracking-wide">🧩 Composants</h2>
        <ul className="space-y-4">
          <li><a href="#" className="block hover:text-purple-300 transition-colors">Button</a></li>
          <li><a href="#" className="block hover:text-purple-300 transition-colors">Modal</a></li>
          <li><a href="#" className="block hover:text-purple-300 transition-colors">Card</a></li>
        </ul>
      </aside>
      <main className="flex-1 p-10 overflow-y-auto bg-transparent">
        <div className="max-w-7xl mx-auto animate-fade-in-up">
          {children}
        </div>
      </main>
    </div>
  );
}
