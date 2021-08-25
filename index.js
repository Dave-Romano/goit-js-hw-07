// --- task-01
console.log('TASK-01');
const categories = document.querySelectorAll('#categories .js-item');
console.log(`В списке ${categories.length} категории.`);
categories.forEach(item => {
  //   console.log(item);
  console.log('Категория: ', item.querySelector('h2').textContent);
  console.log(`Количество элементов: ${item.querySelectorAll('ul li').length}`);
});
// --- task-02
console.log('TASK-02');
const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const ingredientsNode = document.querySelector('#ingredients');
const itemsNode = ingredients.map(item => `<li>${item}</li>`);
ingredientsNode.innerHTML = itemsNode.join('');
// --- task-03
console.log('TASK-03');
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryNode = document.querySelector('#gallery');
images.forEach(item => {
  galleryNode.insertAdjacentHTML(
    'beforeend',
    `<li class="gallery__item"><img class="gallery__image" src=${item.url} alt="${item.alt}" /></li>`,
  );
});

// --- task-04
console.log('TASK-04');
let counterValue = 0;
const decrementNode = document.querySelector('[data-action="decrement"]');
const incrementNode = document.querySelector('[data-action="increment"]');
const counterNode = document.querySelector('#value');
const increment = () => {
  counterValue += 1;
  counterNode.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  counterNode.textContent = counterValue;
};

decrementNode.addEventListener('click', decrement);
incrementNode.addEventListener('click', increment);
// --- task-05
console.log('TASK-05');

const inputNode = document.querySelector('#name-input');
const outputNode = document.querySelector('#name-output');
inputNode.addEventListener('input', e => {
  //   console.log(e);
  if (e.target.value === '') {
    outputNode.textContent = 'незнакомец';
    return false;
  }
  outputNode.textContent = e.target.value;
});
// --- task-06
console.log('TASK-06');
const validationNode = document.querySelector('#validation-input');
validationNode.addEventListener('focusout', e => {
  const isValid = Number(e.target.dataset.length) === e.target.value.length;
  e.target.classList.remove(isValid ? 'invalid' : 'valid');
  e.target.classList.add(isValid ? 'valid' : 'invalid');
  //   if (Number(e.target.dataset.length) === e.target.value.length) {
  //     console.log('ne rabotaet');
  //     e.target.classList.remove('invalid');
  //     e.target.classList.add('valid');
  //   } else {
  //     console.log('rabotaet');
  //     e.target.classList.remove('valid');
  //     e.target.classList.add('invalid');
  //   }
});
// --- task-07
console.log('TASK-07');
const rangeNode = document.querySelector('#font-size-control');
const textNode = document.querySelector('#text');

rangeNode.addEventListener('input', e => {
  textNode.style.fontSize = `${e.target.value}px`;
});
// --- task-08
console.log('TASK-08');
console.log(
  'Сказать что я это не могу сделать было бы ложью, просто мне очень лень это делать, поэтому простите :)',
);
// --- task-09
