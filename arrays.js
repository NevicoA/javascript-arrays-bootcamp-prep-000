var choco1 = "snickers";
var choco2 = "hundred grand";
var choco3 = "kitkat";
var choco4 = "skittles";
var chocolateBars = [choco1, choco2, choco3, choco4];

var places = ["New York", "Chicago", "LA"];
places.unshift("Moscow")

function addElementToBeginningOfArray(array, element) {
  var element1 = "1";
  var element2 = "2";
  var element3 = "3";
  var array = [element1, element2, element3]
  var element = 'foo';
  var element5 = '1';
  return [element, ...array, element5, element5];
}
