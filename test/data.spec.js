import { filterTeam } from '../src/data.js';

describe('filterTeam', () => {
  it('is a function', () => {
    expect(typeof filterTeam).toBe('function');
  })

  it('returns `filterTeam`', () => {
    expect(filterTeam()).toBe('filterTeam');
  });
});