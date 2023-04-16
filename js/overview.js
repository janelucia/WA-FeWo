// Selectors
const fewoList = document.querySelector('.fewo-list');
const filterWrapper = document.querySelector('.all-filter-wrapper');
const inputSearchName = document.querySelector('#search-for-name');
const selectSearchNeighbourhood = document.querySelector(
  '#neighbourhood-select'
);
const fewoTypeWrapper = document.querySelector('.fewo-type');
const reviewScoreStart = document.querySelector('.review-score-start');
const reviewScoreEnd = document.querySelector('.review-score-end');
const priceStart = document.querySelector('.review-score-start');
const priceEnd = document.querySelector('.review-score-end');
const filterButton = document.getElementById('filter-btn');

// Functions

async function renderOverviewPage() {
  const details = (await csvData(listingCsvUrl)).data;
  addFilterDetails(details);
  for (let i = 0; i <= 10; i++) {
    const fewo = details[i];
    addOverviewDetail(fewo, i);
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

// add filter details

function addFilterDetails(details) {
  const neighbourhoods = [
    ...new Set(details.map((d) => d.neighbourhood_cleansed).filter((d) => !!d)),
  ].sort();

  const roomType = [
    ...new Set(details.map((d) => d.room_type).filter((d) => !!d)),
  ];

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
    console.log(t);
    const typeCheckbox = addDetail('input', null, fewoTypeWrapper);
    typeCheckbox.setAttribute('type', 'checkbox');
    typeCheckbox.setAttribute('id', `check-${t}`);
    const labelCheckbox = addDetail('label', null, fewoTypeWrapper);
    labelCheckbox.setAttribute('for', `check-${t}`);
    labelCheckbox.innerText = t;
  });

  filterButton.addEventListener('click', () => filterFewo(details));
}

// add Overview Details

function addOverviewDetail(fewo, i) {
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

  for (let i = 1; i < fewo.review_scores_value; i++) {
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
  fewoDetailsLink.setAttribute('href', `./about.html?id=${i}`);
}

function filterFewo(details) {
  console.log(details);

  // Name der Unterkunft
  const filteredDetails = details
    .filter((d) => d.name)
    .filter((d) => d.name.includes(inputSearchName.value));
  // Stadtteil
  // Typ der Unterkunft
  // Bewertung
  // Preis
  // Sortierung Bewertung
  // Preis Bewertung

  // filteredDetails.map((m) => m.name).forEach(console.log);
  // filteredDetails.forEach((d) => {
  //   console.log(d.name);
  // });

  // console.log(filteredDetails);
}
