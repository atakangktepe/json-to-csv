JSON to CSV Converter
=========

Convert json files to csv from command line

```shell
$ npm install -g convert2csv
$ convert2csv --help
  Usage: convert2csv [options]

    Options:

      -h, --help             output usage information
      -V, --version          output the version number
      -i, --input <input>    Incoming json file path
      -o, --output <output>  Path for outgoing CSV file. Defaults to current directory.
$ convert2csv -i filename.json -o outputname.csv
  The file was saved to /path/to/outputname.csv!
```
