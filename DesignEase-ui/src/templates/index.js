// Central registry of templates by category
// Each template has: id, name, preview (JSX or HTML string), code (string), type

export const CATEGORIES = [
  { id: 'html', label: 'HTML' },
  { id: 'css', label: 'CSS' },
  { id: 'js', label: 'JS' },
  { id: 'react', label: 'React/JSX' },
  { id: 'wizard-css', label: 'Wizard CSS' }
];

// Simple starter templates per category
const htmlTemplates = [
  {
    id: 'html-card-1',
    name: 'Card simple',
    preview: `<div class="p-4 rounded-xl border bg-white shadow">
  <h3 class="text-lg font-bold">Titre</h3>
  <p class="text-gray-600">Contenu court</p>
</div>`,
    code: `<div class="card">
  <h3>Titre</h3>
  <p>Contenu court</p>
</div>`
  }
];

const cssTemplates = [
  {
    id: 'css-button-1',
    name: 'Bouton gradient',
    preview: null, // use code block
    code: `.btn-gradient {\n  padding: 12px 20px;\n  border-radius: 10px;\n  color: #fff;\n  background: linear-gradient(90deg, #3b82f6, #8b5cf6);\n}`
  }
];

const jsTemplates = [
  {
    id: 'js-toggle-1',
    name: 'Toggle class',
    preview: null,
    code: `function toggleActive(id) {\n  const el = document.getElementById(id);\n  el?.classList.toggle('active');\n}`
  }
];

const reactTemplates = [
  {
    id: 'react-button-1',
    name: 'Button primaire',
    preview: null,
    code: `export default function PrimaryButton({ children }) {\n  return (\n    <button className=\"px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700\">{children}</button>\n  );\n}`
  }
];

const wizardCssTemplates = [
  {
    id: 'wizard-loader-1',
    name: 'Loader pulsant',
    preview: `<div class="w-12 h-12 rounded-full bg-blue-500 animate-pulse"></div>`,
    code: `.animate-pulse {\n  animation: pulse 1.5s ease-in-out infinite;\n}\n@keyframes pulse {\n  0%, 100% { opacity: .6 }\n  50% { opacity: 1 }\n}`
  }
];

export const TEMPLATES_BY_CATEGORY = {
  'html': htmlTemplates,
  'css': cssTemplates,
  'js': jsTemplates,
  'react': reactTemplates,
  'wizard-css': wizardCssTemplates,
};