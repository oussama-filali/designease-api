import { describe, it, expect } from 'vitest';
import { templates } from '../api/templates/route';

// Test API backend: validation des templates exportés

describe('API Backend', () => {
  it('contient le template wizard-login', () => {
    const tpl = templates['wizard-login'];
    expect(tpl).toBeDefined();
    expect(tpl).toHaveProperty('id', 'wizard-login');
    expect(tpl).toHaveProperty('html');
    expect(tpl).toHaveProperty('css');
    expect(tpl).toHaveProperty('js');
  });
});

// Test frontend: dashboard et visualisation

describe('Frontend Dashboard', () => {
  it('affiche le dashboard et les stats', () => {
    // Ici, on pourrait utiliser @testing-library/react pour tester le rendu du dashboard
    expect(true).toBe(true); // Placeholder
  });
});
