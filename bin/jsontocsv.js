#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
var pjson = require('../package.json');

/*
 * @todo:
 *   [] Add pretty console.log with tables
 */
program
  .version(pjson.version)
  .option('-c, --convert', 'Convert specified file')
  .parse(process.argv);

if (program.convert) {
  console.log('Yay')
}
