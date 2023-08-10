// @packages
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

// @scripts
import ActionButtonAtm from './index';

describe('ActionButtonAtm', () => {
  it('Render ActionButtonAtm Component', () => {
    render(<ActionButtonAtm />);
    const actionButtonAtm = screen.getByTestId('action-button');
    expect(actionButtonAtm).toBeInTheDocument();
  });

  it('Render ActionButtonAtm Component with label', () => {
    render(<ActionButtonAtm label="test" />);
    const element = screen.getByText('test');
    expect(element).toBeInTheDocument();
  });
});
