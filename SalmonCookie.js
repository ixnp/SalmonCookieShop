// All Stores capacity is 60
//pp= pike place location  //
// table with location, time, cookies sold that hour and total per day

function salmonCookieShop(name, minimum, maximum, averageCookiesPerCustomer){
  console.log('~~~~');
  this.name= name;
    console.log('name',name);
  this.minimum = minimum;
    console.log('minimum', minimum);
  this.maximum = maximum;
    console.log('maximim', maximum);
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
    console.log('averageCookiesPerCustomer',averageCookiesPerCustomer);
  timeOfDay = ['10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00'];
    console.log('timeOfDay',timeOfDay);
  this.salePerHour= [];
  console.log()
//Random number of customers//
  this.customerPerHour = function(maximum, minimum){
console.log('maximum, minimum', maximum, minimum);
    return Math.random()*(this.maximum - this.minimum + 1 ) +  this.minimum;
  };


//cookies per hour//

this.cookierPerHour = function (){
  for(var i=0; i < this.timeOfDay.length; i++){
    var random = this.averageCookiesPerCustomer * this.customerPerHour();
    this.salePerHour.push(random);
  };
    console.log(cookierPerHour);
};

this.renderCookiesPerHour = function() {
  this.cookiesPurchased();
  var table = document.getElementById('shopTable');
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var tdNames =document.createElement('td');
  tdNames.appendChild(document.createTextNode(this.name));
  tr.appendChild(tdNames);

  for (var i = 0; i< this.timeOfDay.length; i++){
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(Math.Floor(this.cookiesPurchasedArray[i]) + 'cookies.'));
  };
}
}

    // push adds items to the end of the array and returns the new length//

// Justins way: I'm not sure I really understand what you were doing here//
// this.renderCookies = function(){
//   this.cookiesPerHour();

//this is how I was trying to do it on my own//
// this.renderAsRow = function(){
//   var shopTable = document.getElementById('shopTable');
//   var trElement = document.createElement('tr');
//   var nameData = document.createElement('td');
//   var minData = document.createElement('td');
//   var maxData = document.createElement('td');
//   var aveData = document.createElement('td');
//   nameData.textContent = this.name;
//   minData.textContent = this.minimum;
//   maxData.textContent = this.maximum;
//   aveData.textContent = this.averageCookiesPerCustomer;
//   trElment.appendChild(nameData);
//   trElment.appendChild(minData);
//   trElment.appendChild(maxData);
//   trElement.appendChild(aveData);
//   shopTable.appendChild(trElement);
// }


//
// // // shops///
//
var PikePlace = new salmonCookieShop ('Pike Place',77,88, 5.2);
var SeaTac =  new salmonCookieShop ('SeaTac', 6, 24, 1.2);
var SouthCenter = new salmonCookieShop ('SouthCenter', 11, 38, 1.9);
var BellevueSquare = new salmonCookieShop ('Bellevue Square', 20, 48, 3.3);

// PikePlace.render();
// SeaTac.render();
// SouthCenter.render();
// BellevueSquare.render();
