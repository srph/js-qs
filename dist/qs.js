!function(e,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o();else if("function"==typeof define&&define.amd)define(o);else{var r=o();for(var t in r)("object"==typeof exports?exports:e)[t]=r[t]}}(this,function(){return function(e){function o(t){if(r[t])return r[t].exports;var n=r[t]={exports:{},id:t,loaded:!1};return e[t].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var r={};return o.m=e,o.c=r,o.p="",o(0)}([/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function(e,o,r){o.parse=r(/*! ./parse */2),o.stringify=r(/*! ./stringify */3)},/*!***********************!*\
  !*** ./src/extend.js ***!
  \***********************/
function(e){e.exports=function(e,o){var r=Object.keys(o);return r.forEach(function(r){e[r]=o[r]}),e}},/*!**********************!*\
  !*** ./src/parse.js ***!
  \**********************/
function(e,o,r){var t=r(/*! ./extend */1);e.exports=function(e,o){if("string"!=typeof e)throw new Error("Provided query must be a string");var r={},n={decode:!0};void 0!==o&&t(n,o),o=n;for(var i=e.replace(/^\?/,"").split("&"),f=0;f<i.length;f++){var c=i[f].split("=");r[c[0]]=o.decode?decodeURIComponent(c[1]):c[1]}return r}},/*!**************************!*\
  !*** ./src/stringify.js ***!
  \**************************/
function(e,o,r){var t=r(/*! ./extend */1);e.exports=function(e,o){if(null==e||"object"!=typeof e)throw new Error("Provided query must be an object");var r="",n=Object.keys(e),i={prepend:!0,encode:!0};return void 0!==o&&t(i,o),o=i,n.forEach(function(t,n){var i=e[t],f=o.encode?encodeURIComponent(i):i,c=n>0?"&":"";r+=c+t+"="+f}),(o.prepend?"?":"")+r}}])});
//# sourceMappingURL=qs.js.map