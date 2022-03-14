import { applyStyles, createHeader } from 'src/helpers/utilities/outputToConsole';

describe('applyStyles', () => {
  it('formats styles correctly', () => {
    const styles = applyStyles({
      color: '#000000',
      backgroundColor: '#ffffff',
    });

    expect(styles).toEqual(
      'color: #000000;background-color: #ffffff;padding: 2px 4px;border-radius: 2px;'
    );
  });
});

describe('createHeader', () => {
  it('outputs a header with default styles', () => {
    const header = createHeader();

    expect(header).toContain(`%cAmuProduct Debug`);
    expect(header).toContain(
      'color: #00233d;background-color: #fffcf2;padding: 2px 4px;border-radius: 2px;'
    );
  });
});
