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
  },
  {
    brand: 'DAEWOO',
    model: 'Sens',
    price: '239.000₽',
    hp: 75,
    transmission: 'Manual',
    seats: 5,
    img: 'whitedeo.png',
  },
  {
    brand: 'DAEWOO',
    model: 'Sens-2006',
    price: '219.000₽',
    hp: 75,
    transmission: 'Manual',
    seats: 5,
    img: 'deo2.png',
  },
  {
    brand: 'SKODA',
    model: 'Fabia',
    price: '589.000₽',
    hp: 75,
    transmission: 'Manual',
    seats: 5,
    img: 'skodacar.png',
  },
  {
    brand: 'SKODA',
    model: 'Fabia-2006',
    price: '670.000₽',
    hp: 75,
    transmission: 'Automatic',
    seats: 5,
    img: 'skodacar2.png',
  },
  {
    brand: 'Hyundai',
    model: 'Sonata',
    price: '1.199.000₽',
    hp: 175,
    transmission: 'Automatic',
    seats: 5,
    img: 'hyndaycar.png',
  },
  {
    brand: 'Mercedes',
    model: 'E320',
    price: '819.000₽',
    hp: 224,
    transmission: 'Automatic',
    seats: 5,
    img: 'benzcar.png',
  },
  {
    brand: 'Volkswagen',
    model: 'Golf-5',
    price: '799.000₽',
    hp: 102,
    transmission: 'Automatic',
    seats: 5,
    img: 'wolcar.png',
  },
  {
    brand: 'Renault',
    model: '21',
    price: '179.000₽',
    hp: 90,
    transmission: 'Manual',
    seats: 5,
    img: 'renocar.png',
  },
  {
    brand: 'KIA',
    model: 'Cerato',
    price: '850.000₽',
    hp: 122,
    transmission: 'Manual',
    seats: 5,
    img: 'kiacar.png',
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
  if (car.model === 'Sens') year = '2004';
  if (car.model === 'Sens-2006') year = '2006';
  if (car.model === 'Fabia') year = '2007';
  if (car.model === 'Fabia-2006') year = '2006';
  if (car.model === 'Sonata') year = '2010';
  if (car.model === 'E320') year = '2002';
  if (car.model === 'Golf-5') year = '2007';
  if (car.model === '21') year = '1986';
  if (car.model === 'Cerato') year = '2010';
  
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
  } else if (car.model === 'Sens') {
    description = {
      engine: '1.3 бензин',
      music: 'Стандарт',
      condition: 'Хорошее техническое состояние',
      documents: 'ГАЗ ВПИСАН',
      hitch: 'Фаркоп вписан',
      body: 'Кузов без дыр и гнили'
    };
  } else if (car.model === 'Sens-2006') {
    description = {
      engine: '1.3 бензин',
      music: 'Стандарт',
      condition: 'Хорошее техническое состояние',
      documents: 'Стандарт',
      hitch: 'Фаркоп вписан',
      body: 'Кузов без дыр и гнили',
      bumpers: 'Есть моменты по бамперам'
    };
  } else if (car.model === 'Fabia') {
    description = {
      engine: '1.4 бензин',
      transmission: 'Механика',
      condition: 'В хорошем состоянии, обслужена',
      ac: 'Кондиционер (работает)',
      investments: 'Без вложений'
    };
  } else if (car.model === 'Fabia-2006') {
    description = {
      engine: '1.4 16V',
      transmission: 'Автомат',
      condition: 'В отличном состоянии',
      tires: 'Новая резина',
      ac: 'Кондиционер',
      seats: 'Подогрев сидений',
      parking: 'Парктроник',
      keys: '2 ключа',
      service: 'Сервисная книга',
      mileage: '162.000 км',
      originality: 'ОРИГИНАЛ',
      owner: 'Ездила девушка'
    };
  } else if (car.model === 'Sonata') {
    description = {
      engine: '2.4 бензин',
      transmission: 'Автомат',
      condition: 'В хорошем состоянии',
      investments: 'Вложений не требует',
      operation: 'Все работает в штатном режиме'
    };
  } else if (car.model === 'E320') {
    description = {
      engine: '3.2 бензин',
      transmission: 'Автомат',
      condition: 'Состояние хорошее',
      equipment: 'В максимальной комплектации',
      operation: 'Работает все в штатном режиме',
      exhaust: 'Выхлоп заставляет людей обернутся'
    };
  } else if (car.model === 'Golf-5') {
    description = {
      engine: '1.6 бензин',
      transmission: 'Автомат',
      condition: 'В очень хорошем состоянии',
      climate: 'Климат',
      investments: 'Без вложений абсолютно'
    };
  } else if (car.model === '21') {
    description = {
      engine: '1.7 бензин (газ)',
      transmission: 'Механика',
      condition: 'В достойном состоянии на свои годы',
      investments: 'Делать нечего не нужно',
      contact: 'Связь с хозяином есть',
      registration: 'Переоформление без ограничений'
    };
  } else if (car.model === 'Cerato') {
    description = {
      engine: '1.6 бензин',
      transmission: 'Механика 6',
      condition: 'В хорошем состоянии',
      mileage: '172.000 км',
      ac: 'Кондиционер',
      windows: '4 стеклоподъемника',
      investments: 'Вложений и внимания не требует'
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
  } else if (car.model === 'Sens') {
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
        <div class="stat-icon">📋</div>
        <div class="stat-title">Документы</div>
        <div class="stat-value">${description.documents}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🚗</div>
        <div class="stat-title">Фаркоп</div>
        <div class="stat-value">${description.hitch}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🔧</div>
        <div class="stat-title">Кузов</div>
        <div class="stat-value">${description.body}</div>
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
  } else if (car.model === 'Sens-2006') {
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
        <div class="stat-icon">📋</div>
        <div class="stat-title">Документы</div>
        <div class="stat-value">${description.documents}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🚗</div>
        <div class="stat-title">Фаркоп</div>
        <div class="stat-value">${description.hitch}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🔧</div>
        <div class="stat-title">Кузов</div>
        <div class="stat-value">${description.body}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🚗</div>
        <div class="stat-title">Бампера</div>
        <div class="stat-value">${description.bumpers}</div>
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
  } else if (car.model === 'Fabia') {
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
        <div class="stat-icon">⚙️</div>
        <div class="stat-title">Коробка</div>
        <div class="stat-value">${description.transmission}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">❄️</div>
        <div class="stat-title">Кондиционер</div>
        <div class="stat-value">${description.ac}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">💸</div>
        <div class="stat-title">Вложения</div>
        <div class="stat-value">${description.investments}</div>
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
  } else if (car.model === 'Fabia-2006') {
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
        <div class="stat-icon">⚙️</div>
        <div class="stat-title">Коробка</div>
        <div class="stat-value">${description.transmission}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🛞</div>
        <div class="stat-title">Резина</div>
        <div class="stat-value">${description.tires}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">❄️</div>
        <div class="stat-title">Кондиционер</div>
        <div class="stat-value">${description.ac}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🔥</div>
        <div class="stat-title">Подогрев сидений</div>
        <div class="stat-value">${description.seats}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🚗</div>
        <div class="stat-title">Парктроник</div>
        <div class="stat-value">${description.parking}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🔑</div>
        <div class="stat-title">Ключи</div>
        <div class="stat-value">${description.keys}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">📋</div>
        <div class="stat-title">Сервисная книга</div>
        <div class="stat-value">${description.service}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">📊</div>
        <div class="stat-title">Пробег</div>
        <div class="stat-value">${description.mileage}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">✅</div>
        <div class="stat-title">Оригинальность</div>
        <div class="stat-value">${description.originality}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">👩</div>
        <div class="stat-title">Владелец</div>
        <div class="stat-value">${description.owner}</div>
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
  } else if (car.model === 'Sonata') {
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
        <div class="stat-icon">⚙️</div>
        <div class="stat-title">Коробка</div>
        <div class="stat-value">${description.transmission}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">💸</div>
        <div class="stat-title">Вложения</div>
        <div class="stat-value">${description.investments}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">✅</div>
        <div class="stat-title">Работа</div>
        <div class="stat-value">${description.operation}</div>
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
  } else if (car.model === 'E320') {
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
        <div class="stat-icon">⚙️</div>
        <div class="stat-title">Коробка</div>
        <div class="stat-value">${description.transmission}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">⭐</div>
        <div class="stat-title">Комплектация</div>
        <div class="stat-value">${description.equipment}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">✅</div>
        <div class="stat-title">Работа</div>
        <div class="stat-value">${description.operation}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🔊</div>
        <div class="stat-title">Выхлоп</div>
        <div class="stat-value">${description.exhaust}</div>
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
  } else if (car.model === 'Golf-5') {
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
        <div class="stat-icon">⚙️</div>
        <div class="stat-title">Коробка</div>
        <div class="stat-value">${description.transmission}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">❄️</div>
        <div class="stat-title">Климат</div>
        <div class="stat-value">${description.climate}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">💸</div>
        <div class="stat-title">Вложения</div>
        <div class="stat-value">${description.investments}</div>
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
  } else if (car.model === '21') {
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
        <div class="stat-icon">⚙️</div>
        <div class="stat-title">Коробка</div>
        <div class="stat-value">${description.transmission}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">💸</div>
        <div class="stat-title">Вложения</div>
        <div class="stat-value">${description.investments}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">📞</div>
        <div class="stat-title">Связь</div>
        <div class="stat-value">${description.contact}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">📋</div>
        <div class="stat-title">Переоформление</div>
        <div class="stat-value">${description.registration}</div>
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
  } else if (car.model === 'Cerato') {
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
        <div class="stat-icon">⚙️</div>
        <div class="stat-title">Коробка</div>
        <div class="stat-value">${description.transmission}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">📊</div>
        <div class="stat-title">Пробег</div>
        <div class="stat-value">${description.mileage}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">❄️</div>
        <div class="stat-title">Кондиционер</div>
        <div class="stat-value">${description.ac}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">🪟</div>
        <div class="stat-title">Стеклоподъемники</div>
        <div class="stat-value">${description.windows}</div>
      </div>
      <div class="stat-item">
        <div class="stat-icon">💸</div>
        <div class="stat-title">Вложения</div>
        <div class="stat-value">${description.investments}</div>
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
  
  // Фильтруем автомобили по выбранному бренду
  const filteredCars = selectedBrand ? cars.filter(car => car.brand === selectedBrand) : cars;
  
  filteredCars.forEach(car => {
    let year = '2005';
    if (car.model === '2114') year = '2008';
    if (car.model === '2114-2011' || car.model === '2114-2011-detailed') year = '2011';
    if (car.model === 'Sens') year = '2004';
    if (car.model === 'Sens-2006') year = '2006';
    if (car.model === 'Fabia') year = '2007';
    if (car.model === 'Fabia-2006') year = '2006';
    if (car.model === 'Sonata') year = '2010';
    if (car.model === 'E320') year = '2002';
    if (car.model === 'Golf-5') year = '2007';
    if (car.model === '21') year = '1986';
    if (car.model === 'Cerato') year = '2010';
    
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

document.getElementById('evalForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const plate = document.getElementById('plateInput').value.trim();
  const problems = document.getElementById('problemsInput').value.trim();
  const photos = document.getElementById('photoInput').files;
  const resultDiv = document.getElementById('evalResult');
  resultDiv.innerHTML = '⏳ Оцениваем...';

  const formData = new FormData();
  formData.append('plate', plate);
  formData.append('problems', problems);
  for (let i = 0; i < photos.length; i++) {
    formData.append('photos[]', photos[i]);
  }
  formData.append('api_key', 'sk-7b61b6ea707c44dfbbcbc1e3d78bc17b');

  try {
    const response = await fetch('https://depseek.ai/api/evaluate', {
      method: 'POST',
      body: formData
    });
    if (!response.ok) throw new Error('Ошибка запроса к Depseek');
    const data = await response.json();
    resultDiv.innerHTML = `
      <b>Depseek оценка:</b> ${data.price ? data.price.toLocaleString() + '₽' : 'нет данных'}<br>
      <span style="color:#fff8;font-size:0.95em;">${data.comment || 'Оценка ниже рынка, зависит от состояния и комплектации'}</span>
    `;
  } catch (err) {
    resultDiv.innerHTML = 'Ошибка при получении оценки от Depseek';
  }
}); 

// Модальное окно оценки авто
const evalModal = document.getElementById('evalModal');
const openEvalBtn = document.getElementById('openEvalBtn');
const closeEvalBtn = document.getElementById('closeEvalBtn');

openEvalBtn.addEventListener('click', () => {
  evalModal.classList.add('active');
});
closeEvalBtn.addEventListener('click', () => {
  evalModal.classList.remove('active');
});
// Закрытие по клику вне формы
window.addEventListener('click', (e) => {
  if (e.target === evalModal) evalModal.classList.remove('active');
}); 