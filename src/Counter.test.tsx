import { Counter } from './Counter';
import { render, fireEvent, screen, waitFor } from '@testing-library/preact';

describe('', () => {
  it('', () => {
    const { container } = render(<Counter />);
  });
});

import { add } from './randomFn';

describe('', () => {
  it('', () => {
    const actual = add(3, 2);

    expect(actual).toEqual(5);
  });
});
