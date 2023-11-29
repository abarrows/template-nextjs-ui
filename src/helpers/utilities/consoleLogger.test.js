import { applyStyles, createHeader } from '@/utilities/consoleLogger';

describe('applyStyles', () => {
  it('formats styles correctly', () => {
    const styles = applyStyles({
      color: '#000000',
      backgroundColor: '#ffffff',
    });

    expect(styles).toEqual(
      'color: #000000;background-color: #ffffff;padding: 2px 4px;border-radius: 2px;',
    );
  });
});

describe('createHeader', () => {
  it('outputs a header with matched styles', () => {
    const header = createHeader('auth');

    expect(header).toContain(`%c${process.env.APPLICATION_NAME} Auth`);
    expect(header).toContain(
      'color: #64B969;background-color: #EDF7EF;padding: 2px 4px;border-radius: 2px;',
    );
  });

  it('outputs a header with default styles', () => {
    const header = createHeader();

    expect(header).toContain(`%c${process.env.APPLICATION_NAME} Debug`);
    expect(header).toContain(
      'color: #ffffff;background-color: #421a82;padding: 2px 4px;border-radius: 2px;',
    );
  });
});
