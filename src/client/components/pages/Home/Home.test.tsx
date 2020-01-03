import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '.';
import { initialState } from '../../../reducers';

test('should call loadTopPage via useDispatch', () => {
  const mockStore = configureStore()(initialState);

  render(
    <Provider store={mockStore}>
      <Home />
    </Provider>
  );
});
