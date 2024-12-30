import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  test('renders a heading', () => {
    render(<Footer />);

    const heading = screen.getByText('footer');

    expect(heading).toBeInTheDocument();
  });
});
