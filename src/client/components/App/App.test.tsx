import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { App } from '.';

test('should call loadAppProcess via useDispatch', () => {
  const mockStore = configureStore()({});

  // browser
  {
    process.env.IS_BROWSER = 'true';

    render(
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={['/']} keyLength={0}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    delete process.env.IS_BROWSER;
  }

  // server
  {
    render(
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={['/']} keyLength={0}>
          <App />
        </MemoryRouter>
      </Provider>
    );
  }
});
