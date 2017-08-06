// Automate process of parsing Bible verses
// Created by imasaru 2017.08.05
// Can I consider myself a programmer yet??

var argv = require("optimist")
  .usage("Automate process of parsing .md files for bible verses.\n" +
    "Usage: parse_automator.js -p [string] -l [string]")
  .alias({
    "p": "path"
  })
  .describe({
    "p": "Path to scan for .md files and parse. e.g. src/ja/2017-03/ ",
    "l": "Parse language"
  })
  .demand(["p"])
  .default({
    "l": "en"
  })
  .argv;

var execSync = require("child_process").execSync;
var fs = require('fs');


var dir = argv.p;
folderNum = 0;
folderNum = (parseInt(folderNum, 10) + 101).toString().substr(1);
console.log('Starting folder: ' + folderNum);

fs.readdir(dir, (err, files) => {
  // Hacky method of declaring # of folders (# of files - info.yml and cover.png)
  console.log(files.length - 2 + " folders found.\n")
  console.log('Parsing ' + folderNum + '...');

  // FOR loop that runs depending on # of folders
  for (; folderNum < files.length - 2;) {

    // FOR loop that runs seven times for each .md file
    for (var i = 0; i < 7; i++) {

      execSync('node bible_verse_parser_2.js ' + '-p ' + dir + folderNum +
        '/' + ' -l ' + argv.l);

    }

    // Clever solution (not by me)
    // 1 -> 102 -> 02
    // 9 -> 110 -> 10

//  console.log('Parsing ' + folderNum + 1 + '...');
    folderNum = (parseInt(folderNum, 10) + 101).toString().substr(1);

  }

  console.log("Done parsing " + (files.length - 2) * 7 +
    " .md files.");
});
