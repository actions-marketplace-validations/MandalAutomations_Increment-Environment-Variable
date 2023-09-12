import { getInput } from "@actions/core";
// const github = require("@actions/github");

const name = getInput("name");

console.log(`Hello, ${name}!`);