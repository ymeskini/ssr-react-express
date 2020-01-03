import { LoadableHomePage } from './routes';

test('should resolve required modules', async () => {
  expect(
    (((await LoadableHomePage.load()) as unknown) as { default: Function }).default.name
  ).toEqual('Home');
});
