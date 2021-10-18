let i = 500;
let para = document.createElement('p');

function isPrime(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
}


// Add your code here
while (i > 1) {
    if (isPrime(i)) {
        para.textContent += `${i} `;
    }
    i--;
}

// Don't edit the code below here!
let section = document.querySelector('section');
section.appendChild(para);