// let test = document.getElementsByClassName('success-stories');

// let test2 = test[0].textContent;
// let test3 = test[0].innerText;

// console.log(test2);
// console.log(test3);


// let test = document.querySelector('footer');

// let test2 = test.children;

// test2[0].style.fontSize = '20px';

// console.log(test2);

let test = document.getElementsByClassName('story1');

let test2 = test[0].children;

let test3 = test2[0].firstChild.nodeValue;

test3.textContent = 'test';

console.log(test3);