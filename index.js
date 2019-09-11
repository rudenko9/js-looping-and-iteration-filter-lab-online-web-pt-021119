// Code your solution in this file
function findMatching(list, name) {
 return list.filter(function (el) { return el.toUpperCase() === name.toUpperCase()});
}