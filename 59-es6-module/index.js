// ES6 Module = An external file that contains reusable code
//              that can be imported into another Javascript files.
//              Write reusable code for many different apps.
//              Can contain variables, classes, functions ... and more
//              Introduced as part of EMAScript 2015 update

import { PI, getCircumference, getArea, getVolume } from "./mathUtil.js";

console.log(PI);

const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)} cm`);
console.log(`${area.toFixed(2)} cm^2`);
console.log(`${volume} cm^3`);
