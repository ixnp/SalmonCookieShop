// All Stores capacity is 60
//pp= pike place location  //
// var  = document.getElementById('one')

//make a loop for time//

//Total?//


//min random calculation//
var min = Math.round((Math.random() * 50 ) + 1);
console.log(min);

var minimumCustomers = document.getElementById('minimum');
console.log(minimumCustomers);
minimumCustomers.textContent = min;

//max random calculation//
var max = Math.round((Math.random() * 50 ) + 1) + min;
console.log(max);

var maximumCustomers = document.getElementById('Maximum');
console.log(maximumCustomers);
maximumCustomers.textContent = max;

//Avrage (min+max)/total//

aveCookies= function(sum) {
  return sum/8;
}
var aveCookiesPike = aveCookies(2136);
console.log(aveCookiesPike);

var aveCookiesSeaTac = aveCookies(277);
console.log(aveCookieSeaTac);

var aveCookiesSouthcenter = aveCookies(338);
console.log(aveCookiesSouthcenter);

var aveCookiesBellevueSquare = aveCookies(879);
console.log(aveCookiesBellevueSquare);


//Average cookies per customer//

var cookiesPerCustomer = Math.round(aveCookiesPike / max);
console.log(cookiesPerCustomer)

var perCustomer = document.getElementById('average');
console.log(perCustomer);
document.createElement('li')
perCustomer.textContent = cookiesPerCustomer;


// // }
// var averageCookies = document.getElementById('average');
// console.log(averageCookies);
// averageCookies.textContent = ave;
