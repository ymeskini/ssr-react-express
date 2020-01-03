test('should provide history', async () => {
  // memoryHistory
  {
    const { history } = await import('./configureStore');

    expect(history.location).toHaveProperty('key');
  }

  jest.resetModules();

  // browserHistory
  {
    process.env.IS_BROWSER = 'true';

    const { history } = await import('./configureStore');

    expect(history.location).not.toHaveProperty('key');
  }
});
