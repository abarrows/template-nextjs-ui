import isInList from './isInList';

describe('isInList', () => {
  // isStrict = true
  it('returns true when string is in list', () => {
    expect(isInList('check', ['check', 'is', 'in', 'the', 'list'], true)).toBe(
      true,
    );
  });

  it('returns false when string is capitalized but in the list', () => {
    expect(isInList('check', ['Check', 'is', 'in', 'the', 'list'], true)).toBe(
      false,
    );
  });

  it('returns false when string is not in the list', () => {
    expect(isInList('check', ['is', 'not', 'in', 'the', 'list'], true)).toBe(
      false,
    );
  });

  // isStrict = false
  it('returns true when string is in list', () => {
    expect(isInList('check', ['check', 'is', 'in', 'the', 'list'])).toBe(true);
  });

  it('returns true when string is capitalized but in the list', () => {
    expect(isInList('check', ['Check', 'is', 'in', 'the', 'list'])).toBe(true);
  });

  it('returns false when string is not in the list', () => {
    expect(isInList('check', ['is', 'not', 'in', 'the', 'list'])).toBe(false);
  });
});
