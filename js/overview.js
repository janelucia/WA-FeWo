// Selectors
const fewoList = document.querySelector('.fewo-list');
const filterWrapper = document.querySelector('.all-filter-wrapper');
const inputSearchName = document.querySelector('#search-for-name');
const selectSearchNeighbourhood = document.querySelector(
  '#neighbourhood-select'
);
const fewoTypeWrapper = document.querySelector('.fewo-type');
const reviewScoreStartWrapper = document.querySelector('.review-score-start');
const reviewScoreStart = document.getElementById('review-score-start');
const reviewScoreEndWrapper = document.querySelector('.review-score-end');
const reviewScoreEnd = document.getElementById('review-score-end');
const priceStartWrapper = document.querySelector('.price-start');
const priceStart = document.getElementById('price-start');
const priceEndWrapper = document.querySelector('.price-end');
const priceEnd = document.getElementById('price-end');
const filterButton = document.getElementById('filter-btn');

// Functions

async function renderOverviewPage() {
  console.log('Hallo');
  const details = (await csvData(listingCsvUrl)).data;
  addFilterDetails(details);
  for (let i = 0; i <= 10; i++) {
    const fewo = details[i];
    addOverviewDetail(fewo);
  }
}

// hilft beim rendern der Seite

function addDetail(tagName, className, parent) {
  const detail = document.createElement(tagName);
  if (className) {
    detail.classList.add(className);
  }
  parent.appendChild(detail);
  return detail;
}

function cleanNumber(num) {
  return parseFloat(num.replace(/[$,]/g, ''));
}

// add filter details

function addFilterDetails(details) {
  const neighbourhoods = [
    ...new Set(details.map((d) => d.neighbourhood_cleansed).filter((d) => !!d)),
  ].sort();

  const roomType = [
    ...new Set(details.map((d) => d.room_type).filter((d) => !!d)),
  ];

  const priceSortAscending = [
    ...new Set(details.map((d) => d.price).filter((d) => !!d)),
  ].sort((a, b) => {
    const priceA = cleanNumber(a);
    const priceB = cleanNumber(b);
    return priceA - priceB;
  });

  neighbourhoods.map((n) => {
    const optionNeighbourhood = addDetail(
      'option',
      null,
      selectSearchNeighbourhood
    );
    optionNeighbourhood.setAttribute('value', n);
    optionNeighbourhood.innerText = n;
  });

  roomType.map((t) => {
    const typeCheckbox = addDetail('input', 'type-checkbox', fewoTypeWrapper);
    typeCheckbox.setAttribute('type', 'checkbox');
    typeCheckbox.setAttribute('id', `check-${t}`);
    typeCheckbox.setAttribute('checked', 'checked');
    const labelCheckbox = addDetail('label', null, fewoTypeWrapper);
    labelCheckbox.setAttribute('for', `check-${t}`);
    labelCheckbox.innerText = t;
  });

  function displayStars(e) {
    let stars = '';
    for (let i = 1; i <= e; i++) {
      stars += '★';
    }
    return stars;
  }

  const labelReviewScoreStart = addDetail(
    'label',
    null,
    reviewScoreStartWrapper
  );
  reviewScoreStart.setAttribute('min', 1);
  reviewScoreStart.setAttribute('max', 5);
  reviewScoreStart.setAttribute('value', 1);
  labelReviewScoreStart.innerText = '★';
  reviewScoreStart.addEventListener('input', (e) => {
    let stars = displayStars(e.target.value);
    labelReviewScoreStart.innerText = stars;
    reviewScoreStart.setAttribute('value', e.target.value);
  });

  reviewScoreEnd.setAttribute('min', 1);
  reviewScoreEnd.setAttribute('max', 5);
  reviewScoreEnd.setAttribute('value', 5);
  const labelReviewScoreEnd = addDetail('label', null, reviewScoreEndWrapper);
  labelReviewScoreEnd.innerText = '★★★★★';
  reviewScoreEnd.addEventListener('input', (e) => {
    let stars = displayStars(e.target.value);
    labelReviewScoreEnd.innerText = stars;
    reviewScoreEnd.setAttribute('value', e.target.value);
  });

  priceStart.setAttribute('min', cleanNumber(priceSortAscending[0]));
  priceStart.setAttribute(
    'max',
    cleanNumber(priceSortAscending[priceSortAscending.length - 1])
  );
  priceStart.setAttribute('value', cleanNumber(priceSortAscending[0]));
  const labelPriceStart = addDetail('label', null, priceStartWrapper);
  labelPriceStart.innerText = `$${priceStart.value}`;
  priceStart.addEventListener('input', (e) => {
    labelPriceStart.innerText = `$${e.target.value}`;
    priceStart.setAttribute('value', e.target.value);
  });

  priceEnd.setAttribute('min', cleanNumber(priceSortAscending[0]));
  priceEnd.setAttribute(
    'max',
    cleanNumber(priceSortAscending[priceSortAscending.length - 1])
  );
  priceEnd.setAttribute(
    'value',
    cleanNumber(priceSortAscending[priceSortAscending.length - 1])
  );
  const labelPriceEnd = addDetail('label', null, priceEndWrapper);
  labelPriceEnd.innerText = `$${priceEnd.value}`;
  priceEnd.addEventListener('input', (e) => {
    labelPriceEnd.innerText = `$${e.target.value}`;
    priceEnd.setAttribute('value', e.target.value);
  });

  filterButton.addEventListener('click', () => {
    fewoList.innerHTML = '';
    filterFewo(details);
  });
}

// add Overview Details

function addOverviewDetail(fewo) {
  const fewoDiv = addDetail('div', 'fewo-list-item-wrapper', fewoList);

  const fewoImageWrapper = addDetail('div', 'fewo-img-wrapper', fewoDiv);

  const fewoBild = addDetail('img', null, fewoImageWrapper);
  fewoBild.setAttribute('src', fewo.picture_url);

  const fewoListInfo = addDetail('div', 'fewo-list-info', fewoDiv);

  const fewoName = addDetail('h2', null, fewoListInfo);
  fewoName.innerText = fewo.name;

  const fewoTyp = addDetail('p', null, fewoListInfo);
  fewoTyp.innerText = fewo.property_type;

  const fewoOrt = addDetail('p', null, fewoListInfo);
  fewoOrt.innerText = fewo.neighbourhood_cleansed;

  const fewoPreisStars = addDetail('div', 'price-stars', fewoListInfo);

  const fewoPreis = addDetail('span', null, fewoPreisStars);
  fewoPreis.innerText = `${fewo.price}`;

  const fewoStarsDiv = addDetail('div', null, fewoPreisStars);

  for (let i = 0; i < fewo.review_scores_value; i++) {
    const fewoBewertung = addDetail('span', null, fewoStarsDiv);
    fewoBewertung.innerText = '★';
  }

  const fewoAnzahlBewertungen = addDetail(
    'span',
    'overview-bewertung',
    fewoStarsDiv
  );
  fewoAnzahlBewertungen.innerText = fewo.number_of_reviews;

  const fewoDetailsLink = addDetail('a', 'details-bnt', fewoDiv);
  fewoDetailsLink.innerText = 'mehr anzeigen';
  fewoDetailsLink.setAttribute('href', `./about.html?id=${fewo.id}`);
}

function filterFewo(details) {
  const typeCheckbox = document.getElementsByClassName('type-checkbox');
  const checkedCheckboxes = [...typeCheckbox].filter((c) => c.checked);

  // Name der Unterkunft
  // Stadtteil
  // Typ der Unterkunft
  // Preis
  const filteredDetails = details
    .filter(
      (d) =>
        d.name &&
        d.neighbourhood_cleansed &&
        d.room_type &&
        d.review_scores_value &&
        d.price
    )
    .filter((d) => d.name.includes(inputSearchName.value))
    .filter(
      (d) =>
        d.neighbourhood_cleansed === selectSearchNeighbourhood.value ||
        !selectSearchNeighbourhood.value
    )
    .filter((d) =>
      checkedCheckboxes.some((c) => c.labels[0].innerText === d.room_type)
    )
    .filter(
      (d) =>
        d.review_scores_value >= reviewScoreStart.value &&
        d.review_scores_value <= reviewScoreEnd.value
    )
    .filter(
      (d) =>
        cleanNumber(d.price) >= priceStart.value &&
        cleanNumber(d.price) <= priceEnd.value
    );

  // Bewertung

  // Sortierung Bewertung
  // Preis Bewertung

  // filteredDetails.map((m) => m.name).forEach(console.log);
  // filteredDetails.forEach((d) => {
  //   console.log(d.name);
  // });

  console.log(filteredDetails);
  for (let i = 0; i < filteredDetails.length; i++) {
    const fewo = filteredDetails[i];
    addOverviewDetail(fewo);
  }
}
