import { getLoadableStatsPath } from './getLoadableStatsPath';

test('should getLoadableStatsPath return the right path', () => {
  expect(getLoadableStatsPath('production')).toBe('../../../../client/loadable-stats.json');
  expect(getLoadableStatsPath('development')).toBe('../../../../dist/client/loadable-stats.json');
  expect(getLoadableStatsPath('test')).toBe('../../../../dist/client/loadable-stats.json');
});
