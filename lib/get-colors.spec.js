const path = require('path');
const getColors = require('./get-colors');

const noop = () => {};

describe('the color set reading/parsing', () => {
  it('should return colors defined in standard javascript format', async () => {
    const colors = await getColors(path.resolve(__dirname, 'test-helpers', 'colors.js'), noop);
    expect(colors).toMatchSnapshot();
  });
  it('should parse and transform a base16 dark scheme YAML file', async () => {
    const colors = await getColors(path.resolve(__dirname, 'test-helpers', 'base16-dark.yml'), noop);
    expect(colors).toMatchSnapshot();
  });
  it('should parse and transform a base16 light scheme YAML file', async () => {
    const colors = await getColors(path.resolve(__dirname, 'test-helpers', 'base16-light.yml'), noop);
    expect(colors).toMatchSnapshot();
  });
});
