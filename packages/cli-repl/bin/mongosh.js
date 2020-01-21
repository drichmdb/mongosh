#!/usr/bin/env node
const { CliRepl, parseCliArgs, mapCliToDriver, generateUri } = require('../lib');

process.title = 'mongosh';

try {
  const options = parseCliArgs(process.argv);

  if (options.help) {
    console.log('help');
  } else if (options.version) {
    console.log(require('../package.json').version);
  } else {
    const driverOptions = mapCliToDriver(options);
    const driverUri = generateUri(options);
    console.log('Connecting to:', driverUri);
    new CliRepl(driverUri, driverOptions, options);
  }
} catch (e) {
  console.log(e.message);
}
