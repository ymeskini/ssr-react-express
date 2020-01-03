import loadable from '@loadable/component';

export const LoadableHomePage = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/pages/Home')
);
