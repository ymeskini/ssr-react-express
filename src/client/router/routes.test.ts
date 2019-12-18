import { LoadableTopPage } from './routes';

test('should resolve required modules', async () => {
  expect(
    (((await LoadableTopPage.load()) as unknown) as { default: Function }).default.name
  ).toEqual('Top');
});
