// Данные автомобилей
const cars = [
  {
    brand: 'VAZ',
    model: '2110',
    price: '310.000₽',
    hp: 89,
    transmission: 'Manual',
    seats: 5,
    img: 'vaz2110.png',
  },
  {
    brand: 'VAZ',
    model: '2114',
    price: '269.000₽',
    hp: 89,
    transmission: 'Manual',
    seats: 5,
    img: 'vaz2114.png',
  },
  {
    brand: 'VAZ',
    model: '2114-2011',
    price: '349.000₽',
    hp: 89,
    transmission: 'Manual',
    seats: 5,
    img: 'vaz21142.png',
  },
  {
    brand: 'VAZ',
    model: '2114-2011-detailed',
    price: '449.000₽',
    hp: 89,
    transmission: 'Manual',
    seats: 5,
    img: 'vaz21143.png',
  }
];

const splash = document.getElementById('splash');
const mainContent = document.getElementById('mainContent');
const carDetail = document.getElementById('carDetail');
const enterBtn = document.getElementById('enterBtn');
const backBtn = document.getElementById('backBtn');
const brandsList = document.getElementById('brandsList');
const carsSection = document.getElementById('carsSection');

let selectedBrand = null;

function setBrand(brand) {
  console.log('Выбран бренд:', brand);
  selectedBrand = brand;
  Array.from(document.querySelectorAll('.brand-card')).forEach(card => {
    card.classList.toggle('active', card.getAttribute('data-brand') === brand);
  });
  
  // Показываем список машин выбранного бренда
  carDetail.style.display = 'none';
  mainContent.style.display = 'flex';
  renderCars();
}

function showCarDetail(car) {
  console.log('Показываем детальную карточку:', car);
  
  // Динамически создаем содержимое карточки
  let year = '2005';
  if (car.model === '2114') year = '2008';
  if (car.model === '2114-2011' || car.model === '2114-2011-detailed') year = '2011';
  
  let description;
  if (car.model === '2114') {
    description = {
      engine: '1.6 бензин',
      music: 'ЕСТЬ',
      condition: 'В хорошем техническом состоянии'
    };
  } else if (car.model === '2114-2011') {
    description = {
      engine: '1.6 бензин',
      music: 'Стандарт',
      condition: 'В хорошем состоянии'
    };
  } else if (car.model === '2114-2011-detailed') {
    description = {
      engine: '1.6 8-кл',
      music: 'Приятная музыка',
      condition: 'Отличное состояние',
      mileage: '172 т.км',
      owners: '2 владельца',
      documents: 'В порядке',
      registration: 'На учете',
      autoteka: 'Зеленая',
      soundproofing: 'В шумке'
    };
  } else {
    description = {
      engine: '1.6 16V',
      music: 'Стандарт',
      condition: 'Отличное'
    };
  }
  
  let statsGrid = '';
  if (car.model === '2114-2011-detailed') {
    statsGrid = `
      <div class="stat-item">
        <div class="stat-icon">🔧</div>
        <div class="stat-title">Тех. состояние</div>
        <div class="stat-value">${description.condition}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🛡️</div>
        <div class="stat-title">Двигатель</div>
        <div class="stat-value">${description.engine}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🎵</div>
        <div class="stat-title">Музыка</div>
        <div class="stat-value">${description.music}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">📊</div>
        <div class="stat-title">Пробег</div>
        <div class="stat-value">${description.mileage}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">👥</div>
        <div class="stat-title">Владельцы</div>
        <div class="stat-value">${description.owners}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">📋</div>
        <div class="stat-title">Документы</div>
        <div class="stat-value">${description.documents}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🚗</div>
        <div class="stat-title">Учет</div>
        <div class="stat-value">${description.registration}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">📊</div>
        <div class="stat-title">Автотека</div>
        <div class="stat-value">${description.autoteka}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🔇</div>
        <div class="stat-title">Шумоизоляция</div>
        <div class="stat-value">${description.soundproofing}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">💰</div>
        <div class="stat-title">Цена</div>
        <div class="stat-value">${car.price}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">📅</div>
        <div class="stat-title">Год</div>
        <div class="stat-value">${year}</div>
      </div>
    `;
  } else {
    statsGrid = `
      <div class="stat-item">
        <div class="stat-icon">🔧</div>
        <div class="stat-title">Тех. состояние</div>
        <div class="stat-value">${description.condition}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🛡️</div>
        <div class="stat-title">Двигатель</div>
        <div class="stat-value">${description.engine}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🎵</div>
        <div class="stat-title">Музыка</div>
        <div class="stat-value">${description.music}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🚗</div>
        <div class="stat-title">Тип</div>
        <div class="stat-value">Легковое авто</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">💰</div>
        <div class="stat-title">Цена</div>
        <div class="stat-value">${car.price}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">📅</div>
        <div class="stat-title">Год</div>
        <div class="stat-value">${year}</div>
      </div>
    `;
  }
  
  const detailContent = document.querySelector('.detail-content');
  detailContent.innerHTML = `
    <div class="car-image">
      <img src="${car.img}" alt="${car.brand} ${car.model}">
    </div>
    <div class="car-title-section">
      <h2>${car.brand} ${car.model}</h2>
      <div class="car-year">${year} год</div>
      <div class="car-price">${car.price}</div>
    </div>
    <div class="car-stats-grid">
      ${statsGrid}
    </div>
  `;
  
  mainContent.style.display = 'none';
  carDetail.style.display = 'flex';
  carDetail.style.animation = 'fadeIn 1s';
}

function renderCars() {
  carsSection.innerHTML = '';
  cars.forEach(car => {
    let year = '2005';
    if (car.model === '2114') year = '2008';
    if (car.model === '2114-2011' || car.model === '2114-2011-detailed') year = '2011';
    
    carsSection.innerHTML += `
      <div class="car-card" onclick="showCarDetail(${JSON.stringify(car).replace(/"/g, '&quot;')})">
        <div class="car-title-row">
          <span class="car-title">${car.brand} ${car.model}</span>
          <span class="car-price">${car.price}</span>
        </div>
        <div class="car-info-row">
          <span>📅 ${year} год</span>
          <span>💰 ${car.price}</span>
          <span>🚗 Легковое авто</span>
        </div>
        <img class="car-img" src="${car.img}" alt="${car.brand} ${car.model}">
      </div>
    `;
  });
}

function goBack() {
  carDetail.style.display = 'none';
  mainContent.style.display = 'flex';
  selectedBrand = null;
  Array.from(document.querySelectorAll('.brand-card')).forEach(card => {
    card.classList.remove('active');
  });
}

brandsList.addEventListener('click', e => {
  let card = e.target.closest('.brand-card');
  if (card) setBrand(card.getAttribute('data-brand'));
});

backBtn.addEventListener('click', goBack);

// Анимация перехода
enterBtn.addEventListener('click', () => {
  splash.style.transition = 'opacity 0.7s';
  splash.style.opacity = 0;
  setTimeout(() => {
    splash.style.display = 'none';
    mainContent.style.display = 'flex';
    mainContent.style.animation = 'fadeIn 1s';
    renderCars();
  }, 700);
});

// По умолчанию показываем только splash
mainContent.style.display = 'none';
carDetail.style.display = 'none';

// Проверка загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM загружен');
  console.log('carDetail элемент:', carDetail);
  console.log('mainContent элемент:', mainContent);
  
  if (!carDetail) {
    console.error('Элемент carDetail не найден!');
  }
  if (!mainContent) {
    console.error('Элемент mainContent не найден!');
  }
}); 