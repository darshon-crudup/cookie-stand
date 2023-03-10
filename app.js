// Salmon Cookies//

//WINDOW INTO THE DOM
let htmlSection = document.getElementById('salesdata'); 
console.log(htmlSection);

//* GLOBALS  *//
let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

//* HELPER FUNCTIONS/UTILITIES *//

function randomNum(min,max){
// got this from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//* CONSTRUCTOR FUNCTIONS *//
function allStores(name, minCust, maxCust, avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.dailySoldTotal = 0;
  this.hourlySales = [];
  this.custperHour = [];
  // this.locationRender();
}
allStores.prototype.getCustomers = function(){
      for(let i = 0; i < hours.length; i++){
        this.custperHour.push(randomNum(this.minCust,this.maxCust)); 
      }
}

allStores.prototype.cookiesSoldPerHour = function(){
      this.getCustomers()
      for(let i = 0; i < hours.length; i++){
        this.hourlySales.push(Math.floor(this.custperHour[i] * this.avgCookie));
      }
}
//* TABLE *//
let table = document.getElementById('table');
let tbody = document.createElement("tbody");
table.appendChild(tbody);

allStores.prototype.locationRender = function (){
  this.cookiesSoldPerHour();
  let trElem = document.createElement('tr');
  let tdElem = document.createElement('td');
  tdElem.textContent = this.name; //double for loop here
  trElem.appendChild(tdElem);

  for (let i = 0; i < hours.length; i++){

    let tdElemSale = document.createElement('td');
    tdElemSale.textContent = this.hourlySales[i];
    trElem.appendChild(tdElemSale);

    this.dailySoldTotal += this.hourlySales[i];
  }
  let dailySoldTD = document.createElement('td');
    dailySoldTD.textContent = this.dailySoldTotal;
    trElem.appendChild(dailySoldTD);
    table.appendChild(trElem);
    console.log(this.hourlySales)
}

function headerRender(){
  // let head = document.createElement('thead');
  let trElem = document.createElement('tr');
  let thElem = document.createElement('th');
  thElem.textContent = 'Locations';
  trElem.appendChild(thElem);

  for (let i = 0; i < hours.length; i++){
    thElem = document.createElement('th');
    thElem.textContent = hours[i];
    trElem.appendChild(thElem);
  }
  thElem = document.createElement('th');
  thElem.textContent = 'Total';
  trElem.appendChild(thElem);
  // head.appendChild(trElem);
  tbody.appendChild(trElem);
}

function footerRender(){
}

//*CREATE FORM*//
// let myForm = document.getElementById('my-form');

// // TODO: STEP 3 DEFINE MY HANDLER
// function handleFormSubmit(event){
//   // ON ANY FORM HANDLER
//   event.preventDefault();
//   console.log(event);

//   let username = event.target.username.value;
//   console.log(username);

//   let password = event.target.password.value;
//   console.log(password);

//   let age = +event.target.age.value;
//   console.log(age);
//   console.log(typeof age);
// }


// // TODO: STEP 2 ATTACH MY EVENT LISTENER
// myForm.addEventListener('submit', handleFormSubmit);



// function renderMain() {
  //   trElem.appendChild(thElem);
  
  //  for (let i = 1; i < arrOfHours.length; i++){
    //   thElem = document.createElement('th');
    //   thElem.textContent =arr0fHours[i];
    //   trElem.appendChild(thElem);
    //  }
    
    // thElem = document.createElement('th');
    // thElem.textContent = 'Location Total';
    // trElem.appendChild(thElem);
    // head.appendChild(trElem);
    // tableElem.appendChild(head);
    // }
    
    //* OBJECT LITERALS *//
    let Seattle = new allStores('Seattle', 23, 65, 6.3);
    let Tokyo = new allStores('Tokyo', 3, 24, 1.2);
    let Dubai = new allStores('Dubai', 11, 38, 3.7);
    let Paris = new allStores('Paris', 20, 38, 2.3);
    let Lima = new allStores('Lima', 2, 16, 4.6);
    let storeLocations = [Seattle, Tokyo, Dubai, Paris, Lima];

headerRender();
Seattle.locationRender();
Tokyo.locationRender();
Dubai.locationRender();
Paris.locationRender();
Lima.locationRender();

// let Seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   custperHour: [],
//   hourlySales: [],
//   dailySoldTotal: 0,
//   getCustomers: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.custperHour.push(randomNum(this.minCust,this.maxCust)); 
//     }
// },
//   gethourlySales: function(){
    
//     }
// },
//   getcookiesTotal: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.dailySoldTotal += this.hourlySales[i];
//   }
// },
//   render: function(){
//     this.getCustomers();
//     this.gethourlySales();
//     this.getcookiesTotal();
//     // article
//     let articleElem = document.createElement("article");
//     htmlSection.appendChild(articleElem);
//     // <h2></h2>
//     let h2Elem = document.createElement("h2");
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);
//     // <ul></ul>
//     let unorderlst = document.createElement("ul");
//     console.log(unorderlst);
//     console.log(htmlSection);
//     articleElem.appendChild(unorderlst);
//     // <li></li>
    
//     for (let i = 0; i < hours.length; i++){
//       let li = document.createElement("li");
//       li.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
//       unorderlst.appendChild(li);
//     }

//     let li = document.createElement('li');
//      li.textContent = `Total ${this.dailySoldTotal}`;
//      unorderlst.appendChild(li);
//   }
// }
// let Tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   custperHour: [],
//   hourlySales: [],
//   dailySoldTotal: 0,
//   getCustomers: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.custperHour.push(randomNum(this.minCust,this.maxCust)); 
//     }
// },
//   gethourlySales: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.hourlySales.push(Math.floor(this.custperHour[i] * this.avgCookie));
//     }
// },
//   getcookiesTotal: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.dailySoldTotal += this.hourlySales[i];
//   }
// },
//   render: function(){
//     this.getCustomers();
//     this.gethourlySales();
//     this.getcookiesTotal();
//     // article
//     let articleElem = document.createElement("article");
//     htmlSection.appendChild(articleElem);
//     // <h2></h2>
//     let h2Elem = document.createElement("h2");
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);
//     // <ul></ul>
//     let unorderlst = document.createElement("ul");
//     console.log(unorderlst);
//     console.log(htmlSection);
//     articleElem.appendChild(unorderlst);
//     // <li></li>
    
//     for (let i = 0; i < hours.length; i++){
//       let li = document.createElement("li");
//       li.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
//       unorderlst.appendChild(li);
//     }

//     let li = document.createElement('li');
//      li.textContent = `Total ${this.dailySoldTotal}`;
//      unorderlst.appendChild(li);
//   }
// }
// let Dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7,
//   custperHour: [],
//   hourlySales: [],
//   dailySoldTotal: 0,
//   getCustomers: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.custperHour.push(randomNum(this.minCust,this.maxCust)); 
//     }
// },
//   gethourlySales: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.hourlySales.push(Math.floor(this.custperHour[i] * this.avgCookie));
//     }
// },
//   getcookiesTotal: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.dailySoldTotal += this.hourlySales[i];
//   }
// },
//   render: function(){
//     this.getCustomers();
//     this.gethourlySales();
//     this.getcookiesTotal();
//     // article
//     let articleElem = document.createElement("article");
//     htmlSection.appendChild(articleElem);
//     // <h2></h2>
//     let h2Elem = document.createElement("h2");
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);
//     // <ul></ul>
//     let unorderlst = document.createElement("ul");
//     console.log(unorderlst);
//     console.log(htmlSection);
//     articleElem.appendChild(unorderlst);
//     // <li></li>
    
//     for (let i = 0; i < hours.length; i++){
//       let li = document.createElement("li");
//       li.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
//       unorderlst.appendChild(li);
//     }

//     let li = document.createElement('li');
//      li.textContent = `Total ${this.dailySoldTotal}`;
//      unorderlst.appendChild(li);
//   }
// }
// let Paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,
//   custperHour: [],
//   hourlySales: [],
//   dailySoldTotal: 0,
//   getCustomers: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.custperHour.push(randomNum(this.minCust,this.maxCust)); 
//     }
// },
//   gethourlySales: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.hourlySales.push(Math.floor(this.custperHour[i] * this.avgCookie));
//     }
// },
//   getcookiesTotal: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.dailySoldTotal += this.hourlySales[i];
//   }
// },
//   render: function(){
//     this.getCustomers();
//     this.gethourlySales();
//     this.getcookiesTotal();
//     // article
//     let articleElem = document.createElement("article");
//     htmlSection.appendChild(articleElem);
//     // <h2></h2>
//     let h2Elem = document.createElement("h2");
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);
//     // <ul></ul>
//     let unorderlst = document.createElement("ul");
//     console.log(unorderlst);
//     console.log(htmlSection);
//     articleElem.appendChild(unorderlst);
//     // <li></li>
    
//     for (let i = 0; i < hours.length; i++){
//       let li = document.createElement("li");
//       li.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
//       unorderlst.appendChild(li);
//     }

//     let li = document.createElement('li');
//      li.textContent = `Total ${this.dailySoldTotal}`;
//      unorderlst.appendChild(li);
//   }
// }
// let Lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,
//   custperHour: [],
//   hourlySales: [],
//   dailySoldTotal: 0,
//   getCustomers: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.custperHour.push(randomNum(this.minCust,this.maxCust)); 
//     }
// },
//   gethourlySales: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.hourlySales.push(Math.floor(this.custperHour[i] * this.avgCookie));
//     }
// },
//   getcookiesTotal: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.dailySoldTotal += this.hourlySales[i];
//   }
// },
//   render: function(){
//     this.getCustomers();
//     this.gethourlySales();
//     this.getcookiesTotal();
//     // article
//     let articleElem = document.createElement("article");
//     htmlSection.appendChild(articleElem);
//     // <h2></h2>
//     let h2Elem = document.createElement("h2");
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);
//     // <ul></ul>
//     let unorderlst = document.createElement("ul");
//     console.log(unorderlst);
//     console.log(htmlSection);
//     articleElem.appendChild(unorderlst);
//     // <li></li>
    
//     for (let i = 0; i < hours.length; i++){
//       let li = document.createElement("li");
//       li.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
//       unorderlst.appendChild(li);
//     }

//     let li = document.createElement('li');
//      li.textContent = `Total ${this.dailySoldTotal}`;
//      unorderlst.appendChild(li);
//   }
// }