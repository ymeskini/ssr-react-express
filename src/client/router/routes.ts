import loadable from '@loadable/component';

export const LoadableTopPage = loadable(() =>
  import(/* webpackPrefetch: true */ '../components/pages/Top')
);
