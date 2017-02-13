// All Stores capacity is 60
//pp= pike place location  //
// table with location, time, cookies sold that hour and total per day
function salmonCookieShop(name, minimum, maximum, averageCookiesPerCustomer){
  this.name= name;
  this.minimum = minimum;
  this.maximum = maximum;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.salePerHour= [];
//Random number of customers//
  this.customerPerHour = function(){
    return (Math.round(Math.random()*(this.maximum - this.minimum + 1 ))) +  this.minimum;
  };
};

//cookies per hour//

this.cookierPerHour = function (){
  for(i=0; i<6; i++)
    hour = Math.round(this.customerPerHour()*this.averageCookiesPerCustomer);
    this.salePerHour.push(hour);
    // push adds items to the end of the array and returns the new length//
};
// Justins way: I'm not sure I really understand what you were doing here//
salmonCookieShop.prototype.render = function(){
var trElement = document.createElement('tr');

var tdElement = document.createElement('td');

  tdElement.innerHTML = this.total;
  tdElement.innerHTML = this.name;
  trElement.appendChild(tdElement);



  for(var i=0; i<6; i++){
    td = document.createElement('td');
    td.innerHTML = the.salePerHour[i];
    trElement.appendChild(td);
}
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
}
// PikePlace.render();
// SeaTac.render();
// SouthCenter.render();
// BellevueSquare.render();
