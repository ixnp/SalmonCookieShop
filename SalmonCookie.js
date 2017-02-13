// All Stores capacity is 60
//pp= pike place location  //
// var  = document.getElementById('one')

//PikePlace//
var salmonShopPikePlace = new Object()

salmonShopPikePlace.name = "PikePlaceShop";
salmonShopPikePlace.minimum= Math.round((Math.random() * 50 ) + 1);
  console.log(salmonShopPikePlace.minimum);

//max random calculation//
salmonShopPikePlace.maximum = Math.round((Math.random() * 50 ) + 1) + salmonShopPikePlace.minimum;
  console.log(salmonShopPikePlace.maximum);

salmonShopPikePlace.ave = Math.round(2136 / 8);
    console.log(salmonShopPikePlace.ave);

var resultsPikePlace = document.getElementById('PikePlace');
resultsPikePlace.textContent = salmonShopPikePlace.name;
var newEl = document.createElement('li');
var newText = document.createTextNode('Minimum Customers: ' + salmonShopPikePlace.minimum);
newEl.appendChild(newText);
var position = document.getElementById('PikePlace')
position.appendChild(newEl);

var newElMax = document.createElement('li');
var newTextMax = document.createTextNode('Maximum Customers: ' + salmonShopPikePlace.maximum);
newElMax.appendChild(newTextMax);
var positionMax = document.getElementById('PikePlace')
position.appendChild(newElMax);

var newElAve = document.createElement('li');
var newTextAve = document.createTextNode('Average cookies per/hour: ' +salmonShopPikePlace.ave);
newElAve.appendChild(newTextAve);
var positionAve = document.getElementById('PikePlace')
position.appendChild(newElAve);

//SeaTac//

var salmonShopSeaTac = new Object()

salmonShopSeaTac.name = "SeaTac";
salmonShopSeaTac.minimum= Math.round((Math.random() * 50 ) + 1);
  console.log(salmonShopSeaTac.minimum);

salmonShopSeaTac.maximum = Math.round((Math.random() * 50 ) + 1) + salmonShopSeaTac.minimum;
  console.log(salmonShopSeaTac.maximum);

salmonShopSeaTac.ave = Math.round(277 / 8);
    console.log(salmonShopSeaTac.ave);

var resultsSeaTac = document.getElementById('SeaTac');
resultsSeaTac.textContent = salmonShopSeaTac.name;
var newEl = document.createElement('li');
var newText = document.createTextNode('Minimum Customers: ' + salmonShopSeaTac.minimum);
newEl.appendChild(newText);
var position = document.getElementById('SeaTac')
position.appendChild(newEl);

var newElMax = document.createElement('li');
var newTextMax = document.createTextNode('Maximum Customers: ' + salmonShopSeaTac.maximum);
newElMax.appendChild(newTextMax);
var positionMax = document.getElementById('SeaTac')
position.appendChild(newElMax);

var newElAve = document.createElement('li');
var newTextAve = document.createTextNode('Average cookies per/hour: ' +salmonShopSeaTac.ave);
newElAve.appendChild(newTextAve);
var positionAve = document.getElementById('SeaTac')
position.appendChild(newElAve);

//SouthCenter//
var salmonShopSouthcenter = new Object()

salmonShopSouthcenter.name = "Southcenter";
salmonShopSouthcenter.minimum= Math.round((Math.random() * 50 ) + 1);
  console.log(salmonShopSouthcenter.minimum);

salmonShopSouthcenter.maximum = Math.round((Math.random() * 50 ) + 1) + salmonShopSouthcenter.minimum;
  console.log(salmonShopSouthcenter.maximum);

salmonShopSouthcenter.ave = Math.round(338 / 8);
    console.log(salmonShopSouthcenter.ave);

var resultsSouthcenter = document.getElementById('Southcenter');
resultsSouthcenter.textContent = salmonShopSouthcenter.name;
var newEl = document.createElement('li');
var newText = document.createTextNode('Minimum Customers: ' + salmonShopSouthcenter.minimum);
newEl.appendChild(newText);
var position = document.getElementById('Southcenter')
position.appendChild(newEl);

var newElMax = document.createElement('li');
var newTextMax = document.createTextNode('Maximum Customers: ' + salmonShopSouthcenter.maximum);
newElMax.appendChild(newTextMax);
var positionMax = document.getElementById('Southcenter')
position.appendChild(newElMax);

var newElAve = document.createElement('li');
var newTextAve = document.createTextNode('Average cookies per/hour: ' +salmonShopSouthcenter.ave);
newElAve.appendChild(newTextAve);
var positionAve = document.getElementById('Southcenter')
position.appendChild(newElAve);

//BellevueSquare//
var salmonBellevueSquare = new Object()

salmonBellevueSquare.name = "BellevueSquare";
salmonBellevueSquare.minimum= Math.round((Math.random() * 50 ) + 1);
  console.log(salmonBellevueSquare.minimum);

salmonBellevueSquare.maximum = Math.round((Math.random() * 50 ) + 1) + salmonBellevueSquare.minimum;
  console.log(salmonBellevueSquare.maximum);

salmonBellevueSquare.ave = Math.round(338 / 8);
    console.log(salmonBellevueSquare.ave);

var resultsBellevueSquare = document.getElementById('BellevueSquare');
resultsBellevueSquare.textContent = salmonBellevueSquare.name;
var newEl = document.createElement('li');
var newText = document.createTextNode('Minimum Customers: ' + salmonBellevueSquare.minimum);
newEl.appendChild(newText);
var position = document.getElementById('BellevueSquare')
position.appendChild(newEl);

var newElMax = document.createElement('li');
var newTextMax = document.createTextNode('Maximum Customers: ' + salmonBellevueSquare.maximum);
newElMax.appendChild(newTextMax);
var positionMax = document.getElementById('BellevueSquare')
position.appendChild(newElMax);

var newElAve = document.createElement('li');
var newTextAve = document.createTextNode('Average cookies per/hour: ' +salmonBellevueSquare.ave);
newElAve.appendChild(newTextAve);
var positionAve = document.getElementById('BellevueSquare')
position.appendChild(newElAve);


//
// var maximumCustomers = document.getElementById('PikePlace');
// console.log(PikePlace);
// maximumCustomers.textContent = Southcenter;
//
// document.write(myObj.name);
// document.write("<br/>");
// document.write(myObj.age);
// document.write("<br/>");
// document.write(myObj.getAge());




//
// var aveCookiesPike = aveCookies(2136);
// console.log(aveCookiesPike);
//
// var aveCookiesSeaTac = aveCookies(277);
// console.log(aveCookiesSeaTac);
//
// var aveCookiesSouthcenter = aveCookies(338);
// console.log(aveCookiesSouthcenter);
//
// var aveCookiesBellevueSquare = aveCookies(879);
// console.log(aveCookiesBellevueSquare);
//
//
// //Average cookies per customer//
//
//
// // // }
// // var averageCookies = document.getElementById('average');
// // console.log(averageCookies);
// // averageCookies.textContent = ave;
