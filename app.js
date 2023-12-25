document.getElementById('container')
<section id=​"container">​…​</section>​
document.querySelector('#container')
<section id=​"container">​…​</section>​


const secondItems = document.querySelectorAll('.second');

const thirdInOl = document.querySelector('ol .third');

document.getElementById('container').textContent = 'Hello!';


document.querySelector('.footer').classList.add('main');


document.querySelector('.footer').classList.remove('main');


const newLi = document.createElement('li');


newLi.textContent = 'four';


document.querySelector('ul').appendChild(newLi);


const olLis = document.querySelectorAll('ol li');
for (const li of olLis) {
    li.style.backgroundColor = 'green';
}


document.querySelector('.footer').remove();

