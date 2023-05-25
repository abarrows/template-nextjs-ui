import isUrl from './isUrl';

describe('isUrl', () => {
  it('does match an absolute url', () => {
    expect(isUrl('test.com')).toBe(true);
    expect(isUrl('test.com/1234')).toBe(true);
    expect(isUrl('www.test.com')).toBe(true);

    expect(isUrl('http://test.com')).toBe(true);
    expect(isUrl('https://test.com')).toBe(true);

    expect(isUrl('http://www.test.com')).toBe(true);
    expect(isUrl('https://www.test.com')).toBe(true);
  });

  it('does not match a relative url', () => {
    expect(isUrl('/test')).toBe(false);
    expect(isUrl('/test.com')).toBe(false);
    expect(isUrl('/test?query=true')).toBe(false);
  });

  it('does not match junk', () => {
    expect(isUrl('junk')).toBe(false);
    expect(isUrl('1337')).toBe(false);
  });
});
