// @packages
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

// @scripts
import TypographyAtm from './index';

describe('TypographyAtm', () => {
  it('Render TypographyAtm Component', () => {
    render(<TypographyAtm variant="h2">Typography</TypographyAtm>);
    const typographyAtm = screen.getByTestId('typography');
    expect(typographyAtm).toBeInTheDocument();
  });
});
