// Sales Data

// Within your javascript file, create separate JS object literals for each shop location. Each location will be responsible for generating sales data and providing output on an html document. You should be able to perform the following tasks in your javascript file:

// Store the min/max hourly customers, and the average cookies per customer, in object properties.

// Use a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.

// Store the results for each location in a separate array… perhaps as a property of the object representing that location.

// Display the values of each array as unordered lists in the browser.

// Calculating the sum of these hourly totals; your output for each location should look like this:

//WINDOW INTO THE DOM
let htmlSection = document.getElementById('salesdata'); 
console.log(htmlSection);

//* GLOBALS  *//
let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

//* HELPER FUNCTIONS/UTILITIES *//

function randomNum(min,max){
// got this from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//* OBJECT LITERALS *//

let Seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  custperHour: [],
  hourlySales: [],
  dailySoldTotal: 0,
  getCustomers: function(){
    for(let i = 0; i < hours.length; i++){
      this.custperHour.push(randomNum(this.minCust,this.maxCust)); 
    }
},
  gethourlySales: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlySales.push(Math.floor(this.custperHour[i] * this.avgCookie));
    }
},
  getcookiesTotal: function(){
    for(let i = 0; i < hours.length; i++){
      this.dailySoldTotal += this.hourlySales[i];
  }
},
  render: function(){
    this.getCustomers();
    this.gethourlySales();
    this.getcookiesTotal();
    // article
    let articleElem = document.createElement("article");
    htmlSection.appendChild(articleElem);
    // <h2></h2>
    let h2Elem = document.createElement("h2");
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);
    // <ul></ul>
    let unorderlst = document.createElement("ul");
    console.log(unorderlst);
    console.log(htmlSection);
    articleElem.appendChild(unorderlst);
    // <li></li>
    
    for (let i = 0; i < hours.length; i++){
      let li = document.createElement("li");
      li.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      unorderlst.appendChild(li);
    }

    let li = document.createElement('li');
     li.textContent = `Total ${this.dailySoldTotal}`;
     unorderlst.appendChild(li);
  }
}
let Tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  custperHour: [],
  hourlySales: [],
  dailySoldTotal: 0,
  getCustomers: function(){
    for(let i = 0; i < hours.length; i++){
      this.custperHour.push(randomNum(this.minCust,this.maxCust)); 
    }
},
  gethourlySales: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlySales.push(Math.floor(this.custperHour[i] * this.avgCookie));
    }
},
  getcookiesTotal: function(){
    for(let i = 0; i < hours.length; i++){
      this.dailySoldTotal += this.hourlySales[i];
  }
},
  render: function(){
    this.getCustomers();
    this.gethourlySales();
    this.getcookiesTotal();
    // article
    let articleElem = document.createElement("article");
    htmlSection.appendChild(articleElem);
    // <h2></h2>
    let h2Elem = document.createElement("h2");
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);
    // <ul></ul>
    let unorderlst = document.createElement("ul");
    console.log(unorderlst);
    console.log(htmlSection);
    articleElem.appendChild(unorderlst);
    // <li></li>
    
    for (let i = 0; i < hours.length; i++){
      let li = document.createElement("li");
      li.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      unorderlst.appendChild(li);
    }

    let li = document.createElement('li');
     li.textContent = `Total ${this.dailySoldTotal}`;
     unorderlst.appendChild(li);
  }
}
let Dubai = {
  name: 'Dubai',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  custperHour: [],
  hourlySales: [],
  dailySoldTotal: 0,
  getCustomers: function(){
    for(let i = 0; i < hours.length; i++){
      this.custperHour.push(randomNum(this.minCust,this.maxCust)); 
    }
},
  gethourlySales: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlySales.push(Math.floor(this.custperHour[i] * this.avgCookie));
    }
},
  getcookiesTotal: function(){
    for(let i = 0; i < hours.length; i++){
      this.dailySoldTotal += this.hourlySales[i];
  }
},
  render: function(){
    this.getCustomers();
    this.gethourlySales();
    this.getcookiesTotal();
    // article
    let articleElem = document.createElement("article");
    htmlSection.appendChild(articleElem);
    // <h2></h2>
    let h2Elem = document.createElement("h2");
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);
    // <ul></ul>
    let unorderlst = document.createElement("ul");
    console.log(unorderlst);
    console.log(htmlSection);
    articleElem.appendChild(unorderlst);
    // <li></li>
    
    for (let i = 0; i < hours.length; i++){
      let li = document.createElement("li");
      li.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      unorderlst.appendChild(li);
    }

    let li = document.createElement('li');
     li.textContent = `Total ${this.dailySoldTotal}`;
     unorderlst.appendChild(li);
  }
}
let Paris = {
  name: 'Paris',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  custperHour: [],
  hourlySales: [],
  dailySoldTotal: 0,
  getCustomers: function(){
    for(let i = 0; i < hours.length; i++){
      this.custperHour.push(randomNum(this.minCust,this.maxCust)); 
    }
},
  gethourlySales: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlySales.push(Math.floor(this.custperHour[i] * this.avgCookie));
    }
},
  getcookiesTotal: function(){
    for(let i = 0; i < hours.length; i++){
      this.dailySoldTotal += this.hourlySales[i];
  }
},
  render: function(){
    this.getCustomers();
    this.gethourlySales();
    this.getcookiesTotal();
    // article
    let articleElem = document.createElement("article");
    htmlSection.appendChild(articleElem);
    // <h2></h2>
    let h2Elem = document.createElement("h2");
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);
    // <ul></ul>
    let unorderlst = document.createElement("ul");
    console.log(unorderlst);
    console.log(htmlSection);
    articleElem.appendChild(unorderlst);
    // <li></li>
    
    for (let i = 0; i < hours.length; i++){
      let li = document.createElement("li");
      li.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      unorderlst.appendChild(li);
    }

    let li = document.createElement('li');
     li.textContent = `Total ${this.dailySoldTotal}`;
     unorderlst.appendChild(li);
  }
}
let Lima = {
  name: 'Lima',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  custperHour: [],
  hourlySales: [],
  dailySoldTotal: 0,
  getCustomers: function(){
    for(let i = 0; i < hours.length; i++){
      this.custperHour.push(randomNum(this.minCust,this.maxCust)); 
    }
},
  gethourlySales: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlySales.push(Math.floor(this.custperHour[i] * this.avgCookie));
    }
},
  getcookiesTotal: function(){
    for(let i = 0; i < hours.length; i++){
      this.dailySoldTotal += this.hourlySales[i];
  }
},
  render: function(){
    this.getCustomers();
    this.gethourlySales();
    this.getcookiesTotal();
    // article
    let articleElem = document.createElement("article");
    htmlSection.appendChild(articleElem);
    // <h2></h2>
    let h2Elem = document.createElement("h2");
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);
    // <ul></ul>
    let unorderlst = document.createElement("ul");
    console.log(unorderlst);
    console.log(htmlSection);
    articleElem.appendChild(unorderlst);
    // <li></li>
    
    for (let i = 0; i < hours.length; i++){
      let li = document.createElement("li");
      li.textContent = `${hours[i]}: ${this.hourlySales[i]} cookies`;
      unorderlst.appendChild(li);
    }

    let li = document.createElement('li');
     li.textContent = `Total ${this.dailySoldTotal}`;
     unorderlst.appendChild(li);
  }
}

//* EXECUTABLE CODE *//
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
