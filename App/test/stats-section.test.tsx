
import React from 'react';
import { describe, it, expect } from 'vitest';
import { StatsSection } from '../components/stats-section';
import { render, screen } from '@testing-library/react';

describe('StatsSection', () => {
  it('affiche tous les stats', () => {
    render(<StatsSection />);
    expect(screen.getByText('20 days')).toBeDefined();
    expect(screen.getByText('98%')).toBeDefined();
    expect(screen.getByText('300%')).toBeDefined();
    expect(screen.getByText('6x')).toBeDefined();
  });

  it('affiche toutes les entreprises', () => {
    render(<StatsSection />);
    expect(screen.getByText('Netflix')).toBeDefined();
    expect(screen.getByText('TripAdvisor')).toBeDefined();
    expect(screen.getByText('Box')).toBeDefined();
    expect(screen.getByText('eBay')).toBeDefined();
  });
});
