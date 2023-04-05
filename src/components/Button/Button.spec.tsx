import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('default button', () => {
    const defaultButton = render(<Button label='Button' />);
    expect(defaultButton.container.firstChild).toMatchSnapshot();
  });

  it('default primary button', () => {
    const defaultButton = render(<Button variant='primary' label='Button' />);
    expect(defaultButton.container.firstChild).toMatchSnapshot();
  });

  it('primary and disabled button', () => {
    const defaultButton = render(
      <Button variant='primary' disabled label='Button' />
    );
    expect(defaultButton.container.firstChild).toMatchSnapshot();
  });

  it('primary and large button', () => {
    const defaultButton = render(
      <Button variant='primary' size='large' label='Button' />
    );
    expect(defaultButton.container.firstChild).toMatchSnapshot();
  });

  it('primary and small button', () => {
    const defaultButton = render(
      <Button variant='primary' size='small' label='Button' />
    );
    expect(defaultButton.container.firstChild).toMatchSnapshot();
  });

  it('default full-width button', () => {
    const defaultButton = render(<Button fullWidth label='Button' />);
    expect(defaultButton.container.firstChild).toMatchSnapshot();
  });

  it('default text button', () => {
    const defaultButton = render(<Button variant='action' label='Button' />);
    expect(defaultButton.container.firstChild).toMatchSnapshot();
  });

  it('text button with background', () => {
    const defaultButton = render(
      <Button variant='action' label='Button' className='bg-white' />
    );
    expect(defaultButton.container.firstChild).toMatchSnapshot();
  });

  it('default link button', () => {
    const defaultButton = render(<Button variant='tertiary' label='Button' />);
    expect(defaultButton.container.firstChild).toMatchSnapshot();
  });

  it('oauth button', () => {
    const defaultButton = render(
      <Button
        variant='oauth'
        label='Button'
        startIcon={<i className='neu-share' />}
      />
    );
    expect(defaultButton.container.firstChild).toMatchSnapshot();
  });
});
