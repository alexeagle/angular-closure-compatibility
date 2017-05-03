exports.config = {
  specs: ['built/*test.js'],
  capabilities:
      {browserName: 'chrome', chromeOptions: {args: ['--no-sandbox']}},
  directConnect: true,
  baseUrl: 'http://localhost:8080/',
  framework: 'jasmine',
  useAllAngular2AppRoots: true
};
