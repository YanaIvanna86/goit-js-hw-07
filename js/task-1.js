
const ulEl = document.querySelector(`ul#categories`);
console.log (`Number of categories: ${ulEl.children.length}`);
const liEl = ulEl.querySelectorAll(`li.item`);
liEl.forEach ( liEl => 
    {
        const liCategory = liEl.querySelector('h2').textContent;
        const liElements = liEl.querySelectorAll('li').length;
        console.log(`Category: ${liCategory}`);
        console.log(`Elements: ${liElements}`);
    }
);
  
  