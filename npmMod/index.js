import val from 'chalk';

import chopa from "validator";
// console.log(val.blue.inverse("Hello world"));
const val1 = chopa.isEmail("sidmallick@yahoo.com");
console.log(val1 ? val.green.inverse(val1) :val.red.inverse(val1) );