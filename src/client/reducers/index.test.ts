import { createStore } from 'redux';
import { rootReducer } from '.';

const store = createStore(rootReducer);

test('should return rootReducer', () => {
  expect(store.getState()).toEqual({
    authentication: {
      isLogged: false
    }
  });
});
