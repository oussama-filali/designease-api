import React from "react";

// Palette pro + boutons animés avec effet glass
export default function Sidebar({ templates, activeType, setActiveType }) {
  return (
    <aside className="w-full flex flex-col items-start gap-2 pt-8 px-8 pb-4 border-b border-white/10 bg-transparent">
      <h1 className="text-3xl xl:text-4xl font-black mb-4 tracking-tight gradient-text drop-shadow">DesignEase</h1>
      <div className="flex flex-wrap gap-2 mb-2">
        {templates.map(tpl => (
          <button
            key={tpl.value}
            onClick={() => setActiveType(tpl.value)}
            className={`
              flex items-center px-6 py-2 rounded-xl font-semibold text-base xl:text-lg transition-all duration-200
              shadow-md border border-white/10
              ${activeType === tpl.value
                ? "bg-gradient-to-tr from-[#b9c3cf33] via-[#f7fafc1a] to-[#dee2e633] text-white scale-105 ring-2 ring-blue-200/40 backdrop-blur-xl"
                : "bg-white/5 text-gray-200 hover:bg-white/10 hover:scale-105"}
            `}
            style={{
              boxShadow: activeType === tpl.value
                ? "0 2px 28px 0 #a68eff44, 0 1.5px 10px 0 #7ddfff33"
                : undefined
            }}
          >
            <span className="mr-2">{
              tpl.label === 'Button' ? '🔘' :
              tpl.label === 'Modal' ? '🪟' :
              tpl.label === 'Card' ? '🃏' :
              tpl.label === 'Input' ? '⌨️' :
              tpl.label === 'Navbar' ? '📑' :
              tpl.label === 'Footer' ? '📄' : '🧩'
            }</span>
            <span>{tpl.label}</span>
            {activeType === tpl.value &&
              <span className="ml-3 w-2 h-2 bg-blue-300 rounded-full animate-pulse shadow" />}
          </button>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-4 pl-1">
        <span className="font-semibold">1.</span> Choisis un template<br />
        <span className="font-semibold">2.</span> Configure-le<br />
        <span className="font-semibold">3.</span> Génère ton code
      </p>
    </aside>
  );
}
