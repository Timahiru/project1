// HW5
const som = document.getElementById('som');
const usd = document.getElementById('usd');
const eur = document.getElementById('eur');

const usdRate = 89;  // 1 USD = 87 KGS
const eurRate = 97;  // 1 EUR = 97 KGS

let isTyping = false;

som.addEventListener('input', () => {
  if (isTyping) return;
  isTyping = true;
  const somValue = parseFloat(som.value);
  usd.value = somValue ? (somValue / usdRate).toFixed(2) : '';
  eur.value = somValue ? (somValue / eurRate).toFixed(2) : '';
  isTyping = false;
});

usd.addEventListener('input', () => {
  if (isTyping) return;
  isTyping = true;
  const usdValue = parseFloat(usd.value);
  const somValue = usdValue * usdRate;
  som.value = usdValue ? somValue.toFixed(2) : '';
  eur.value = usdValue ? (somValue / eurRate).toFixed(2) : '';
  isTyping = false;
});

eur.addEventListener('input', () => {
  if (isTyping) return;
  isTyping = true;
  const eurValue = parseFloat(eur.value);
  const somValue = eurValue * eurRate;
  som.value = eurValue ? somValue.toFixed(2) : '';
  usd.value = eurValue ? (somValue / usdRate).toFixed(2) : '';
  isTyping = false;
});





// HW6
const card = document.querySelector('.card');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

let currentId = 1;


function renderCard(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => {
            card.innerHTML = `
                <span>${data.title}</span>
                <p>${data.body}</p>
            `;
        })
        .catch(err => console.error('Ошибка загрузки карточки:', err));
}


renderCard(currentId);

btnNext.addEventListener('click', () => {
    currentId = currentId === 200 ? 1 : currentId + 1;
    renderCard(currentId);
});

btnPrev.addEventListener('click', () => {
    currentId = currentId === 1 ? 200 : currentId - 1;
    renderCard(currentId);
});

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log('Все посты:', data));
