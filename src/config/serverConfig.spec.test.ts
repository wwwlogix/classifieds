import serverConfig from './serverConfig';
describe('serverConfig', () => {
  test('server config port', () => {
    expect(serverConfig.port).toBe('3000');
  });
});
