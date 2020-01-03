export const getLoadableStatsPath = (env: string) =>
  env !== 'production'
    ? '../../../../dist/client/loadable-stats.json'
    : '../../../../client/loadable-stats.json';
