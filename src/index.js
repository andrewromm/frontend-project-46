#!/usr/bin/env node

import { Command } from "commander";

import { detectFileType, readFile } from "./helpers.js";
import { parseJson } from "./parsers.js";
import getDiff from "./getdiff.js";

const program = new Command();

program
  .name("gendiff")
  .description("Compares two configuration files and shows a difference.")
  .version("1.0.0");

program
  .option("-f, --format [type]", "output format")
  .arguments("<filepath1> <filepath2>")
  .action((filepath1, filepath2) => {
    const fileType1 = detectFileType(filepath1);
    const fileType2 = detectFileType(filepath2);
    if (fileType1 === "json" && fileType2 === "json") {
      console.log(
        getDiff(parseJson(readFile(filepath1)), parseJson(readFile(filepath2)))
      );
    }
  });

program.parse();
