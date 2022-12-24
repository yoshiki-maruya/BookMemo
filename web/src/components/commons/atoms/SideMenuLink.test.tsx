import React from 'react';
import { render } from '@testing-library/react';

import SideMenuLink from './SideMenuLink';

describe('SideMenuLink', () => {
  function renderComponent(
    className: string | undefined,
    onClick: (e: React.SyntheticEvent<HTMLElement>) => void,
    children: React.ReactNode,
  ) {
    return render(
      <SideMenuLink className={className} onClick={onClick}>
        {children}
      </SideMenuLink>
    );
  }

  it('should show children', () => {
    const container = renderComponent('', jest.fn(), 'hello');
    container.getAllByText('hello');
  });
});
