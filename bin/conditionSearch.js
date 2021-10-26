#!/usr/bin/env node

import readlineSync from "readline-sync";
import excludeValue from "../src/exclude.js";
import includeValue from "../src/include.js";
import sortValue from "../src/sort.js";

console.log('Instruction:\n1)In the first line you write the data. Example: {"data":[{"name":"John","email":"john2@mail.com","disabled":true},{"name":"John","email":"john1@mail.com","disabled":false},{"name":"Jane","email":"jane@mail.com","disabled":false}]}\n2)In the second line you write the conditions that will be used to find the data you need. Example: {"condition":{"include":[{"name":"John"}],"exclude":[{"disabled":true}]}}\n3)In the next lines you get the result under the given conditions. Example: {result: [{ name: "John", email: "john1@mail.com", disabled: false }]}\n');

const getData = () => readlineSync.question("May I have your data? ");
const getCondition = () => readlineSync.question("May I have your condition? ");

function getQuestionAndAnswer(getData, getCondition){
	getData = JSON.parse(getData());
	getCondition = JSON.parse(getCondition());
	console.log(getData.includeValue(getCondition).sortValue(getCondition).excludeValue(getCondition));
};

getQuestionAndAnswer(getData, getCondition);
