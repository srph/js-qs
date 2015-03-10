!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define(r);else{var o=r();for(var t in o)("object"==typeof exports?exports:e)[t]=o[t]}}(this,function(){return function(e){function r(t){if(o[t])return o[t].exports;var n=o[t]={exports:{},id:t,loaded:!1};return e[t].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}var o={};return r.m=e,r.c=o,r.p="",r(0)}([/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function(e,r,o){r.parse=o(/*! ./parse */2),r.stringify=o(/*! ./stringify */3)},/*!***********************!*\
  !*** ./src/extend.js ***!
  \***********************/
function(e){e.exports=function(e){for(var r=1;r<arguments.length;r++)for(var o=arguments[r],t=Object.keys(o),n=0;n<t.length;n++){var i=t[n];e[i]=o[i]}return e}},/*!**********************!*\
  !*** ./src/parse.js ***!
  \**********************/
function(e,r,o){var t=o(/*! ./extend */1),n={decode:!0};e.exports=function(e,r){if("string"!=typeof e)throw new Error("Provided query must be a string");var o={};r=void 0!==r?t({},n,r):n;for(var i=e.replace(/^\?/,"").split("&"),f=0;f<i.length;f++){var d=i[f].split("="),p=void 0!==d[1]?d[1]:"";o[d[0]]=r.decode?decodeURIComponent(p):p}return o}},/*!**************************!*\
  !*** ./src/stringify.js ***!
  \**************************/
function(e,r,o){var t=o(/*! ./extend */1),n={prepend:!0,encode:!0};e.exports=function(e,r){if(null==e||"object"!=typeof e)throw new Error("Provided query must be an object");var o="",i=Object.keys(e);r=void 0!==r?t({},n,r):n;for(var f=0;f<i.length;f++){var d=i[f],p=e[d];if(void 0!==p&&null!==p){var u=r.encode?encodeURIComponent(p):p,c=f>0&&o.length?"&":"";o+=c+d+"="+u}}return(r.prepend?"?":"")+o}}])});
//# sourceMappingURL=qs.js.map